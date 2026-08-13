import { RatingGroup } from "@chakra-ui/react";
import { SlSizeFullscreen } from "react-icons/sl";
import { Button } from "@mui/material";
import { FaRegHeart } from "react-icons/fa";
import ProductModal from "../ProductModal";
import { useContext,  useState } from 'react';
import { Link } from "react-router-dom";
import Details from '../../pages/Details';
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../App";


const ProductItem = (props) => {
const navigate = useNavigate();

        const goToDetails = () => {
           navigate("/product/details", {
            state: {
            name: props.name,
            images: props.images,
            description: props.description,
            brand: props.brand,
            price: props.price,
            type: props.type,
            MFG: props.MFG,
            life: props.life,
            rating: props.rating,
            isFeatured:props.isFeatured,
            countInStock:props.countInStock
        },
    });
  };
const context= useContext(MyContext);
  const [isOpenProductModal,setIsOpenProductModal] = useState(false);
   const viewProductDetails=()=>{
      setIsOpenProductModal(true);
    }

  const closeProductModal=()=>{
    setIsOpenProductModal(false);
  }


  return (
    <>
       <div className={`card productItem ${props.itemView} ${props.className || ""}`}  onClick={goToDetails}
        style={{ cursor: "pointer"}}>
      <div className="upperCard">
         <div className="actions">
        <Button  onClick={(e)=>{e.stopPropagation();   viewProductDetails();}}>
          <SlSizeFullscreen />
        </Button>
        <Button onClick={(e)=>{e.stopPropagation(); }}>< FaRegHeart style={{fontSize:'20px'}}/></Button>
      </div>
      <div className="imgWrapper">
      <img src={props.images?.[0]} className="card-img-top"/>
      </div>
    
</div>
     
<div className="productInfo">
      <div className="card-body">
      <h6 className="card-title fw-bold ">{props.name}</h6>
      </div>

      <ul className="list-group list-group-flush">
        <li className={`list-group-item ${
    props.countInStock > 0 ? 'text-green' : 'text-danger'
      }`}>
         {props.countInStock > 0
    ? `In Stock: ${props.countInStock}`
    : "Out of Stock"}
      </li>
        <li className="list-group-item">
          <RatingGroup.Root
            count={5}
            defaultValue={3}
            size="sm"
            colorPalette="yellow"
          >
            <RatingGroup.HiddenInput />
            <RatingGroup.Control />
          </RatingGroup.Root>
        </li>
       <div className="d-flex gap-2 align-items-center">
              <li style={{border:'none'}} className="list-group-item text-secondary"><sup>EGP</sup>{props.price}</li>
        </div>
       
      </ul>

      <div className="card-body">
        <button  onClick={(e)=>{ e.preventDefault(); e.stopPropagation();}} className="btn btn-card w-100">
          Add to cart
        </button>
      </div>
    </div>
    </div>
 {isOpenProductModal === true && <ProductModal
  open={isOpenProductModal}
        closeProductModal={closeProductModal}
        product={props}
 /> }   
    </>
  );
};

export default ProductItem;