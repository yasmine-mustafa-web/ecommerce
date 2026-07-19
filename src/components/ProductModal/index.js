import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog'
import { MdClose } from "react-icons/md";
import { useState } from 'react';
import React, { useEffect } from 'react';
import Slide from '@mui/material/Slide';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction='up' ref={ref} {...props} />;
})

const ProductModal =(props)=>{


  
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
                 onClick={(e)=>{
                    e.stopPropagation()
                    props.closeProductModal();}}
            >
                <MdClose />
            </Button>
        
            <h4>Laroch Possay mela b3 serum</h4>
        </Dialog>
        </>
    )
}

export default ProductModal;