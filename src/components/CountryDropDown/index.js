import React from 'react';
import { FaAngleDown } from 'react-icons/fa6';
import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog'
import { IoIosSearch } from "react-icons/io";
import { MdClose } from "react-icons/md";
import {useState} from 'react';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props,ref){
    return <Slide direction='up' ref={ref} {...props} />;
})


const CountryDropDown = () => {

    const [isOpenModal ,setisOpenModal]=useState(false);
    return (
        <>
            <Button className='countryDrop' onClick={()=>setisOpenModal(true)}>
                <div className='info d-flex flex-column'>
                    <span className='label'>Your Location</span>
                    <span className='name'>Egypt</span>

                </div>
                <span className='ml-auto'><FaAngleDown /></span>
            </Button>
            <Dialog TransitionComponent={Transition} open={isOpenModal} onClose={()=>setisOpenModal(false)} className='locationModal'>
                <h5>Choose your delivery location</h5>
                <p>Enter your address and we will specify the offer for your area.</p>
                <Button className='close_' onClick={()=>setisOpenModal(false)}><MdClose /></Button>
                <div className='headerSearchBar w-100'>
                    <Button><IoIosSearch /></Button>
                    <input type='text' placeholder='Search your area' />

                </div>
                <ul className='countryList mt-3'>
                    <li><Button onClick={()=>setisOpenModal(false)}>India</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>India</Button></li>
                    <li><Button>India</Button></li>
                    <li><Button>India</Button></li>
                    <li><Button>India</Button></li>
                    <li><Button>India</Button></li>
                    <li><Button>India</Button></li>
                    <li><Button>India</Button></li>
                    <li><Button>India</Button></li>
                    <li><Button>India</Button></li>
                    <li><Button>India</Button></li>
                    <li><Button>India</Button></li>
                    <li><Button>India</Button></li>
                    <li><Button>India</Button></li>
                    <li><Button>India</Button></li>
                    <li><Button>India</Button></li>
                    <li><Button>India</Button></li>
                    <li><Button>India</Button></li>
                    <li><Button>India</Button></li>
                    <li><Button>India</Button></li>
                    <li><Button>India</Button></li>
                    <li><Button>India</Button></li>
                </ul>
            </Dialog>
        </>
    )
}


export default CountryDropDown