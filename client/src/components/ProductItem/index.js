import { RatingGroup } from "@chakra-ui/react";
import { SlSizeFullscreen } from "react-icons/sl";
import { Button } from "@mui/material";
import { FaRegHeart } from "react-icons/fa";
import ProductModal from "../ProductModal";
import { useContext,  useState } from 'react';
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../App";


const ProductItem = (props) => {
const navigate = useNavigate();
const context = useContext(MyContext);
const [modalOpen, setModalOpen] = useState(false);
const title = props.title ?? props.name;

  const product = {
  _id:props._id,
  name: title,
  images: props.images || [],
  description: props.description || "",
  brand: props.brand || "",
  price: props.price || 0,
  type: props.type || "",
  MFG: props.MFG ||"",
  life: props.life || "",
  rating: props.rating || 0,
  isFeatured:props.isFeatured || "",
  countInStock:props.countInStock || 0
}

console.log("PRODUCT:", product);

const goToDetails = () => {
  if(product._id)
    navigate(`/product/details/${product._id}`)
    else navigate("/product/details", { state: product });}

  return (
    <>
       <div className={`card productItem ${props.itemView} ${props.className || ""}`}  onClick={goToDetails}
        style={{ cursor: "pointer"}}>
      <div className="upperCard">
         <div className="actions">
        <Button  onClick={(e)=>{e.stopPropagation();   setModalOpen(true);}}>
          <SlSizeFullscreen />
        </Button>
        <Button onClick={(e)=>{e.stopPropagation(); }}>< FaRegHeart style={{fontSize:'20px'}}/></Button>
      </div>
      <div className="imgWrapper">
      <img src={product.images?.[0]} className="card-img-top" alt=""/>
      </div>
    
</div>
     
<div className="productInfo">
      <div className="card-body">
      <h6 className="card-title fw-bold ">{product.name}</h6>
      </div>

      <ul className="list-group list-group-flush">
        <li className={`list-group-item ${
    product.countInStock > 0 ? 'text-green' : 'text-danger'
      }`}>
         {product.countInStock > 0
    ? `In Stock: ${product.countInStock}`
    : "Out of Stock"}
          {product.countInStock <= 7
    ? `Please hurry! only ${product.countInStock} left`
    : ""}

      </li>
        <li className="list-group-item">
          <RatingGroup.Root
            count={5}
            defaultValue={3}
            size="sm"
            colorPalette="yellow"
            readOnly
          >
            <RatingGroup.HiddenInput />
            <RatingGroup.Control />
          </RatingGroup.Root>
        </li>
       <div className="d-flex gap-2 align-items-center">
              <li style={{border:'none'}} className="list-group-item text-secondary"><sup>EGP</sup>{product.price}</li>
        </div>
       
      </ul>

      <div className="card-body">
        <button disabled={product.countInStock===0}
         onClick={(e)=>{ e.preventDefault(); e.stopPropagation(); if(product.countInStock>0) context.addToCart(product)}} className="btn btn-card w-100">
          Add to cart
        </button>
      </div>
    </div>
    </div>
 {modalOpen === true && <ProductModal
  open={modalOpen}
        closeProductModal={() => setModalOpen(false)}
        product={product}
 /> }   
    </>
  );
};

export default ProductItem;