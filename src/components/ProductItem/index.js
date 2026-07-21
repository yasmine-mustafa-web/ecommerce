import { RatingGroup } from "@chakra-ui/react";
import { SlSizeFullscreen } from "react-icons/sl";
import { Button } from "@mui/material";
import { FaRegHeart } from "react-icons/fa";
import ProductModal from "../ProductModal";
import { useState } from 'react';

const ProductItem = ({type,MFG , life ,state, images, title, realprice,discountprice, price, discount , className ,description , brand }) => {

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
      <img src={images[0]} className="card-img-top" alt={title} />
    </div>
      <span className="badge bg-red">{discount}%</span>

     

      <div className="card-body">
        <h6 className="card-title fw-bold ">{title}</h6>
      </div>

      <ul className="list-group list-group-flush">
        <li className={`list-group-item ${state=== 'out of stock' ? 'text-danger' :'text-green' }`}>{state}</li>

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
        <div className="d-flex">
          {realprice && discountprice ?(
            <>
                  <li  style={{border:'none'}}  className="mx-0 pe-1 my-3 list-group-item text-secondary discountprice">
         
         <sup>EGP</sup>{realprice}
        </li>
                  <li style={{border:'none' , fontSize:'17px'}} className="px-0 my-3 mx-0 list-group-item font-color">
          <sup>EGP</sup>{discountprice}
        </li>
        </>
          ):(   <li  style={{border:'none'}}  className="list-group-item text-secondary">
          <sup>EGP</sup>{price}
        </li>)}
     
        
        </div>
       
      </ul>

      <div className="card-body">
        <button disabled={state==='out of stock'} onClick={(e)=>{ e.preventDefault()}} href="#" className="btn btn-card w-100">
          Add to cart
        </button>
      </div>
    </div>


 <ProductModal open={isOpenProductModal}
    closeProductModal={closeProductModal}
    name={title}
    realprice={realprice}
    discountprice={discountprice}
    price={price}
    images={images}
    description={description}
    brand={brand}
    state={state}
     type={type}
        MFG={MFG}
        life={life}
    />

    </>
  );
};

export default ProductItem;