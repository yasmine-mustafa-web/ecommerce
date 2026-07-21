import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog'
import { RatingGroup } from "@chakra-ui/react";
import { MdClose } from "react-icons/md";
import { useState } from 'react';
import React, { useEffect } from 'react';
import Slide from '@mui/material/Slide';
import { Carousel, IconButton, Image } from "@chakra-ui/react"
import { LuChevronLeft, LuChevronRight } from "react-icons/lu"
import QtyBox from '../QtyBox';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction='up' ref={ref} {...props} />;
})

const ProductModal =({state,open , closeProductModal , name ,price ,discountprice, realprice , images , brand, description})=>{
    return(
        <>
           <Dialog
            sx={{ zIndex: 130000 }}
           className='productModal'
            TransitionComponent={Transition}
            open={open}
            onClose={()=>closeProductModal()}
             disableRestoreFocus
           
        >
        
        
        
            <Button
                className="close_"
                 onClick={(e)=>{
                    e.stopPropagation()
                    closeProductModal();}}
            >
                <MdClose />
            </Button>
            <div className='container'></div>
            <div className='row'>
                <div className='col-12' style={{borderBottom:'1px solid rgba(0,0,0,0.1)' , padding:'10px 20px' , marginBottom:'20px'}}>
           
             
             <h4 className='fw-bold' >{name}</h4>
               </div>
             </div>
             <div className='row'>
                <div className='col-12 col-md-4'>
             <div className='d-flex col-md-4 justify-content-between align-items-center' >
                {brand &&(
                                 <p className='mt-2 pe-2 me-2 text-secondary' style={{borderRight:'1px solid rgba(0,0,0,0.1)', flexWrap:'nowrap' , whiteSpace:'nowrap'}}>Brand : <b>{brand}</b></p>

                )}
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
                <div className='col-12 col-md-6'>
             <Carousel.Root slideCount={images.length} maxW="2xl" gap="4">
      <Carousel.Control justifyContent="center" gap="4" width="full">
        <Carousel.PrevTrigger asChild>
          <IconButton size="xs" variant="outline">
            <LuChevronLeft />
          </IconButton>
        </Carousel.PrevTrigger>

        <Carousel.ItemGroup width="full">
          {images.map((item, index) => (
            <Carousel.Item key={index} index={index}>
              <Image
                aspectRatio="16/9"
                src={item}
                w="100%"
                h="100%"
                objectFit="cover"
              />
            </Carousel.Item>
          ))}
        </Carousel.ItemGroup>

        <Carousel.NextTrigger asChild>
          <IconButton size="xs" variant="outline">
            <LuChevronRight />
          </IconButton>
        </Carousel.NextTrigger>
      </Carousel.Control>

      <Carousel.IndicatorGroup>
        {images.map((item, index) => (
          <Carousel.Indicator
            key={index}
            index={index}
            unstyled
            _current={{
              outline: "2px solid currentColor",
              outlineOffset: "2px",
            }}
          >
            <Image
              w="20"
              aspectRatio="16/9"
              src={item}
              objectFit="contain"
            />
          </Carousel.Indicator>
        ))}
      </Carousel.IndicatorGroup>
    </Carousel.Root>
                   </div>
                    <div className='col-12 col-md-6'>
                        {
                            discountprice && realprice ? (
                                <>
                                <div className='d-flex gap-2'>
                                <h6 className='discountprice text-secondary '><sup>EGP</sup>{realprice}</h6>
                                <h4><sup>EGP</sup>{discountprice}</h4>                             
                                </div>
                                </>
                            ):(
                                   <h4>{price}</h4>
                            )
                        }
                      <p className={`${state === 'out of stock' ? 'outofstock' : 'instock'}`}>{state}</p>
                  
                    <p>{description}</p>
                    <div className='d-flex align-items-center gap-3'>
                          <QtyBox state={state} />
                         
                          <Button style={{ textTransform:'none',zIndex:'3' , fontFamily:'"Inter", sans-serif' ,width:'140px' , maxWidth: '220px', fontSize:'.8125rem' , height: '2.75rem' , borderRadius: '1.875rem', fontWeight:'500' }} disabled={state==='out of stock'} className={`align items-center text-align-center btn bg-red text-white `}>Add to cart</Button>
                    </div>
                    


                    </div>
                    </div>
        </Dialog>
        </>
    )
}

export default ProductModal;