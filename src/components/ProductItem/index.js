import { RatingGroup } from "@chakra-ui/react";
import { SlSizeFullscreen } from "react-icons/sl";
import { Button } from "@mui/material";
import { FaRegHeart } from "react-icons/fa";
import ProductModal from "../ProductModal";
import { useContext,  useState } from 'react';
import { Link } from "react-router-dom";
import Details from '../../pages/Details';
import { useNavigate } from "react-router-dom";


const ProductItem = ({category , type,MFG , life ,state, images, title, realprice,discountprice, price, discount , className ,description , brand }) => {
const navigate = useNavigate();

        const goToDetails = () => {
navigate("/details", {
        state: {
            title,
            images,
            description,
            brand,
            state,
            price,
            realprice,
            discountprice,
            type,
            MFG,
            life,
        },
    });
  };

  const [isOpenProductModal,setIsOpenProductModal] = useState(false);
   const viewProductDetails=(id)=>{
      setIsOpenProductModal(true);
    }

  const closeProductModal=()=>{
    setIsOpenProductModal(false);
  }


  return (
    <>
       <div className={`card ${className}`}  onClick={goToDetails}
  style={{ cursor: "pointer" ,width:'14rem'}}>

      <div className="upperCard">
         <div className="actions">
        <Button  onClick={(e)=>{e.stopPropagation();   viewProductDetails();}}>
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
        <button disabled={state==='out of stock'} onClick={(e)=>{ e.preventDefault(); e.stopPropagation();}} href="#" className="btn btn-card w-100">
          Add to cart
        </button>
      </div>
    </div>
 {isOpenProductModal === true && <ProductModal
  open={isOpenProductModal}
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
/> }   
    </>
  );
};

export default ProductItem;