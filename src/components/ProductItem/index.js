import { RatingGroup } from "@chakra-ui/react";
import { SlSizeFullscreen } from "react-icons/sl";
import { Button } from "@mui/material";
import { FaRegHeart } from "react-icons/fa";
import ProductModal from "../ProductModal";
import { useState } from 'react';

const ProductItem = ({ image, title, price, discount , className }) => {

  const [isOpenProductModal,setisOpenProductModal]= useState(false);

  const viewProductDetails=(id)=>{
    setisOpenProductModal(true);

  }
  const closeProductModal=()=>{
        setisOpenProductModal(false);

  }


  return (
    <>
    <div className={`card ${className}`} style={{ width: "13rem" }}>
      <div className="upperCard">
         <div className="actions">
        <Button  onClick={(e)=>{e.stopPropagation(); viewProductDetails(1);}}>
          <SlSizeFullscreen />
        </Button>
        <Button onClick={(e)=>{e.stopPropagation(); }}>< FaRegHeart style={{fontSize:'20px'}}/></Button>
      </div>
      <img src={image} className="card-img-top" alt={title} />
    </div>
      <span className="badge bg-red">{discount}%</span>

     

      <div className="card-body">
        <h5 className="card-title">{title}</h5>
      </div>

      <ul className="list-group list-group-flush">
        <li className="list-group-item text-green">In Stock</li>

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

        <li className="list-group-item text-secondary">
          {price} LE
        </li>
      </ul>

      <div className="card-body">
        <button onClick={(e)=>{ e.preventDefault()}} href="#" className="btn btn-card w-100">
          Add to cart
        </button>
      </div>
    </div>


 <ProductModal open={isOpenProductModal}
    closeProductModal={closeProductModal}/>

    </>
  );
};

export default ProductItem;