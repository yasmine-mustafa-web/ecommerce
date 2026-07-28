import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog'
import { RatingGroup } from "@chakra-ui/react";
import { MdClose } from "react-icons/md";
import { useState , useRef , useContext} from 'react';
import React, { useEffect } from 'react';
import Slide from '@mui/material/Slide';
import { Carousel, IconButton, Image } from "@chakra-ui/react"
import { LuChevronLeft, LuChevronRight } from "react-icons/lu"
import QtyBox from '../QtyBox';
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineCompareArrows } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import ZoomImage from '../ZoomImg';
import Details from '../../pages/Details';
import Slider from "react-slick";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css"
import { MyContext } from '../../App';



const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction='up' ref={ref} {...props} />;
})

const ProductModal =(props)=>{

    const context = useContext(MyContext);

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
            open={props.open}
            onClose={()=>props.closeProductModal()}
             disableRestoreFocus
           
        >
        
        
        
            <Button
                className="close_"
                 onClick={()=>props.closeProductModal()}
            >
                <MdClose />
            </Button>
            <div className='container'></div>
            <div className='row'>
                <div className='col-12' style={{borderBottom:'1px solid rgba(0,0,0,0.1)' , padding:'10px 20px' , marginBottom:'20px'}}>
           
             
             <h4 className='mb-1 fw-bold' >love</h4>
               </div>
             </div>
             <div className='row'>
                <div className='col-12 col-md-4'>
             <div className='d-flex col-md-4 justify-content-between align-items-center' >
               
                                 <p className='mt-2 pe-2 me-2 text-secondary' style={{borderRight:'1px solid rgba(0,0,0,0.1)', flexWrap:'nowrap' , whiteSpace:'nowrap'}}>Brand </p>

              
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
                  <div className='badge bg-red position-absolute'>23%</div>
                  <Slider {...settings2} className='zoomSliderBig' ref={zoomSliderBig}>
                    <div className='item'>
                    <InnerImageZoom zoomType='hover' zoomScale={1} src='https://m.media-amazon.com/images/I/61dzGbM7EnL._AC_SX569_.jpg'/>
                    </div>
                    <div className='item'>
                    <InnerImageZoom zoomType='hover' zoomScale={1} src='https://m.media-amazon.com/images/I/61eHITpNFtL._AC_SX569_.jpg'/>
                    </div><div className='item'>
                    <InnerImageZoom zoomType='hover' zoomScale={1} src='https://m.media-amazon.com/images/I/61SVz8DtYBL._AC_SX569_.jpg'/>
                    </div>
                  </Slider>
                </div>
                  <Slider {...settings} className='zoomSlider' ref={zoomSlider}>
                    <div className='item'>
                      <img className='w-100' onClick={()=>goto(0)} src='https://m.media-amazon.com/images/I/61dzGbM7EnL._AC_SX569_.jpg'/>
                    </div>
                    <div className='item'>
                      <img className='w-100' onClick={()=>goto(1)} src="https://m.media-amazon.com/images/I/61eHITpNFtL._AC_SX569_.jpg"/>
                    </div>
                     <div className='item'>
                      <img className='w-100' onClick={()=>goto(2)} src="https://m.media-amazon.com/images/I/61SVz8DtYBL._AC_SX569_.jpg"/>
                    </div>
                  </Slider>
                   </div>
                    <div className='col-12 col-md-7'>
                       
                                <div className='d-flex info algin-items-center mb-2'>
                                <h6 className='oldPrice me-2 lg'><sup>EGP</sup>9.6</h6>
                                <h4 className='netPrice text-danger lg'><sup>EGP</sup>5.2</h4>                             
                                </div>
                             <span className='badge  bg-success'>In Stock</span>
                            
                  
                    <p className='mt-3'> lorem</p>
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
                          <p className='d-flex align-items-center mb-1'><TiTick className='fs-6 text-green' /> Type : </p>
                          </div>
                          <div >
                          <p className='d-flex align-items-center mb-1'><TiTick className='fs-6 text-green' /> MFG : </p>   
                          </div>
                           <div >
                           <p className='d-flex align-items-center'><TiTick className='fs-6 text-green' /> LIFE : </p>    
                           </div>
                       </div>

                    </div>
                    </div>
        </Dialog>
        </>
    )
}

export default ProductModal;