import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog'
import { RatingGroup } from "@chakra-ui/react";
import { MdClose } from "react-icons/md";
import { useRef , useContext} from 'react';
import React from 'react';
import Slide from '@mui/material/Slide';
import QtyBox from '../QtyBox';
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineCompareArrows } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import Slider from "react-slick";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css"
import { MyContext } from '../../App';



const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction='up' ref={ref} {...props} />;
})

const ProductModal =({open , closeProductModal , product})=>{
   var settings={
      dots:false,
      infinite:false,
      speed:500,
      slidesToShow:5,
      slidesToScroll:1,
      fade:false,
      arrows:true
    }


    var settings2={
      dots:false,
      infinite:false,
      speed:700,
      slidesToShow:1,
      slidesToScroll:1,
      fade:false,
      arrows:false
    }


    const zoomSliderBig= useRef();
    const zoomSlider= useRef();

    const goto = (index) =>{
      zoomSlider.current.slickGoTo(index);
      zoomSliderBig.current.slickGoTo(index);

    }

    return(
        <>
           <Dialog
            sx={{ zIndex: 130000 }}
           className='productModal'
            TransitionComponent={Transition}
            open={open}
            onClose={closeProductModal}
             disableRestoreFocus
           
        >
        
        
        
            <Button
                className="close_"
                 onClick={()=>closeProductModal()}
            >
                <MdClose />
            </Button>
            <div className='container'></div>
            <div className='row'>
                <div className='col-12' style={{borderBottom:'1px solid rgba(0,0,0,0.1)' , padding:'10px 20px' , marginBottom:'20px'}}>
           
             
             <h4 className='mb-1 fw-bold' >{product.name}</h4>
               </div>
             </div>
             <div className='row'>
                <div className='col-12 col-md-4'>
             <div className='d-flex col-md-4 justify-content-between align-items-center' >
               
                                 <p className='mt-2 pe-2 me-2 text-secondary' style={{borderRight:'1px solid rgba(0,0,0,0.1)', flexWrap:'nowrap' , whiteSpace:'nowrap'}}>Brand:{product.brand} </p>

              
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
        </div>
             </div>
             </div>
             <div className='row'>
                <div className='col-12 col-md-5'>
                <div className='productZoom position-relative'>
                  {/* <div className='badge bg-red position-absolute'>23%</div> */}
                  <Slider {...settings2} className='zoomSliderBig' ref={zoomSliderBig}>
                     {product.images?.map((img, i) => (
                    <div className='item' key={i}>
                    <InnerImageZoom zoomType='hover' zoomScale={1} src={img}/>
                    </div>
                     ))}
                  </Slider>
                </div>
                  <Slider {...settings} className='zoomSlider' ref={zoomSlider}>
                    {product.images?.map((img,i ) => (

                   
                    <div className='item'>
                      <img className='w-100' onClick={()=>goto(i)} src={img}/>
                    </div>
                     ))}
                  </Slider>
                   </div>
                    <div className='col-12 col-md-7'>
                       
                            <div className='d-flex info algin-items-center mb-2'>
                                <h4 className='netPrice lg'><sup>EGP</sup>{product.price}</h4>                             
                                </div>
                             <span className='badge  bg-success'>No. of items in stock:{product.countInStock}</span>
                            
                  
                    <p className='mt-3'>{product.description}</p>
                    <div className='d-flex align-items-center gap-3'>
                          <QtyBox/>
                         
                    </div>
                    <div className='my-5 d-flex align-items-center gap-2'>
                      <button  type="button" className=" text-uppercase btn rounded-pill d-flex align-items-center py-2 px-2" style={{height: '2.0625rem' , border:'1px solid rgba(0,0,0,0.3)',    fontFamily: '"Dosis", sans-serif'
    , fontSize:'14px'}}><FaRegHeart className='fs-6' /> &nbsp; add to wishlist</button>
                         <button  type="button" className=" text-uppercase btn  d-flex align-items-center py-2 px-2" style={{height: '2.0625rem'   , fontFamily: '"Dosis", sans-serif'
    , fontSize:'14px'}}><MdOutlineCompareArrows /> &nbsp; add to compare</button>
                    </div>
                          <div style={{borderBottom:'1px solid rgba(0,0,0,0.1)' , color:'#3e445a'}} className='align-items-center'>
                          <div  >
                          <p className='d-flex align-items-center mb-1'><TiTick className='fs-6 text-green' /> Type : {product.type} </p>
                          </div>
                          <div >
                          <p className='d-flex align-items-center mb-1'><TiTick className='fs-6 text-green' /> MFG :{product.MFG} </p>   
                          </div>
                           <div >
                           <p className='d-flex align-items-center'><TiTick className='fs-6 text-green' /> LIFE : {product.life} </p>    
                           </div>
                       </div>

                    </div>
                    </div>
        </Dialog>
        </>
    )
}

export default ProductModal;