import { Link , useNavigate} from "react-router-dom";
import { RatingGroup } from "@chakra-ui/react";
import QtyBox from "../../components/QtyBox";
import { IoIosClose } from "react-icons/io";
import {MyContext} from "../../App";
import { useContext } from "react";

const Cart = ()=>{
    const {cart , updateCartQty , removeFromCart , cartTotal} = useContext(MyContext);
    const navigate = useNavigate();
    if(!cart.length) return (
        <section className="section cartPage my-5">
            <div className="container text-center py-5">
                <h2>Your cart is empty</h2>
                <Link to="/" className="btn bg-red text-white mt-3">
                    Continue Shopping
                </Link>
            </div>
        </section>
    );
    return(
        <section className="section cartPage  my-4" style={{ fontFamily: "'Dosis' , sans-serif"}}>
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                      <h2>Your Cart</h2>
                <p>There are <b>{cart.reduce((s,i) => s+ i.quantity,0)}</b> products in your cart</p>

        <div className="table-responsive"> 
            <table className="table text-secondary">
                <thead>
                <tr className="tableRow text-secondary" >

                    <th width="45%">Product</th>
                    <th width="15%" style={{flexWrap:'nowrap' , whiteSpace:'nowrap'}}>Price</th>
                    <th width="20%">Quantity</th>
                    <th width="10%">Subtotal</th>
                    <th width="10%">Remove</th>
                </tr>
                </thead>
                <tbody className="align-items-center">
                    {cart.map (item => (
                        <tr key={item._id}>
                            <td>
                                <Link to={`/product/details/${item._id}`} className="d-flex align-items-center gap-3">
                                <img src={item.images?.[0]} style={{width:80 , height:80 , objectFit:"contain"}}/>
                                <h6>{item.name}</h6>
                                </Link>
                            </td>
                            <td><sup>EGP</sup>{item.price}</td>
                            <td><QtyBox value={item.quantity} max={item.countInStock} onChange={q => updateCartQty(item._id ,q)}/></td>
                            <td><sup>EGP</sup>{(Number(item.price)*item.quantity).toFixed(2)}</td>
                            <td><button className="btn" onClick={() => removeFromCart(item._id)}><IoIosClose /></button></td>
                        </tr>

                    ))}
                    </tbody>
                    </table>
                    </div>
            </div>
            <div className="col-md-4">
                <div className="card p-3 cartDetails">
                    <h5>Cart totals</h5><hr />
                    <div className="d-flex"><h6>Subtotal</h6><p className="ms-auto"><sup>EGP</sup>{cartTotal.toFixed(2)}</p></div>
                <hr/>
                    <div className="d-flex"><h6>Total</h6><h5 className="ms-auto"><sup>EGP</sup>{cartTotal.toFixed(2)}</h5></div>
                <hr />
                <button onClick={() => navigate("/checkout")} className="btn btn-danger w-100 rounded-1 text-white py-3 fw-bold">Proceed to checkout</button>
                </div>
                    </div>
                    </div>
                    </div>
                    </section>
                    );
                };

export default Cart;