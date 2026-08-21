const express =  require('express');
const jwt = require("jsonwebtoken");
const Order = require("../models/order");
const Product = require("../models/product");
const router = express.Router();

const SHIPPING_COST = 30;
const FIRST_ORDER_DISCOUNT_RATE = 0.15;
const egyptianPhoneRegex = /^(010|011|012|015)\d{8}$/;

function getUserId(req) {
    const header = req.headers.authorization || "";
    if(!header.startsWith("Bearer")) return null;
    try{ return jwt.verify(header.slice(7) , process.env.JSON_WEB_TOKEN_SECRET_KEY).id}
    catch{
        return null;
    }
}

router.post("/", async (req,res) => {
  try {
    const userId = getUserId(req);
    if (!userId) return res.status(401).json({ message:"Please sign in first" });

    const { customerName, phone, address, items } = req.body;
    if (!customerName || !phone || !address || !Array.isArray(items) || !items.length){
      return res.status(400).json({ message:"Missing checkout information" });
    }
    const cleanPhone = String(phone).trim();

    if (!egyptianPhoneRegex.test(phone)) {
    return res.status(400).json({
        message: "Please enter a valid Egyptian phone number"
    });
    }

    const ids = items.map(i => i.product);
    const products = await Product.find({ _id:{ $in:ids } });
    const byId = new Map(products.map(p => [String(p._id), p]));

    let subtotal = 0;
    const orderItems = [];
    for (const item of items) {
      const p = byId.get(String(item.product));
      const quantity = Number(item.quantity);
      if (!p) return res.status(400).json({ message:"A product no longer exists" });
      if (!Number.isInteger(quantity) || quantity < 1 || quantity > p.countInStock)
        return res.status(400).json({ message:`Not enough stock for ${p.name}` });
      subtotal += p.price * quantity;
      orderItems.push({ product:p._id, quantity, price:p.price });
    }

    const isFirstOrder = (await Order.countDocuments({ user:userId })) === 0;
    const discount = isFirstOrder ? +(subtotal * FIRST_ORDER_DISCOUNT_RATE).toFixed(2) : 0;
    const shippingCost = isFirstOrder ? 0 : SHIPPING_COST;
    const total = +(subtotal - discount + shippingCost).toFixed(2);


    const order = await Order.create({ user:userId, customerName, phone:cleanPhone , address, items:orderItems, subtotal,discount,shippingCost,total });
    for (const item of orderItems) await Product.findByIdAndUpdate(item.product, { $inc:{ countInStock:-item.quantity } });
    res.status(201).json(await order.populate("items.product"));
  } catch(error) {
    res.status(500).json({ message:"Could not create order", error:error.message });
  }
}); 

router.get("/mine", async (req,res) => {
  res.set("Cache-Control", "no-store");
  const userId = getUserId(req);
  if (!userId) return res.status(401).json({message:"Please sign in first"});
  res.json(await Order.find({user:userId}).populate("items.product").sort({createdAt:-1}));
});

router.get("/", async (req,res) => {
  res.json(await Order.find().populate("user items.product").sort({createdAt:-1}));
});

module.exports = router;