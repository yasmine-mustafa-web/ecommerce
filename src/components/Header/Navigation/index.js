import { RxHamburgerMenu } from "react-icons/rx";
import {FaAngleDown} from 'react-icons/fa6';
import {Button} from '@mui/material';
import { Link } from "react-router-dom";
import { MdOutlineBakeryDining } from "react-icons/md";
import { GiClothes } from "react-icons/gi";
import { IoMdHome } from "react-icons/io";
import { MdFoodBank } from "react-icons/md";
import { MdElectricalServices } from "react-icons/md";
import { PiHairDryer } from "react-icons/pi";
import { GiWrappedSweet } from "react-icons/gi";
import { TiMessage } from "react-icons/ti";
import { useState } from "react";
import { LuBeef } from "react-icons/lu";
import { GiChickenLeg } from "react-icons/gi";
import { GiFrenchFries } from "react-icons/gi";
import { GiSandwich } from "react-icons/gi";
import { MdOutlinePriceCheck } from "react-icons/md";
import { TfiShine } from "react-icons/tfi";

const Navigation = () =>{

    const[isOpenSideBarVal , setisOpenSideBarVal]= useState(false);

    return(
          <nav>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-sm-3 navPart1'>
                                <div className="catWrapper">
                                 <Button className='allCatTab align-items-center' onClick={()=>setisOpenSideBarVal(!isOpenSideBarVal)}>
                                    <span className="icon1 me-2"><RxHamburgerMenu /></span>
                                    <span className='text'>ALL CATEGORIES</span>
                                    <span className="icon2 ms-4"><FaAngleDown /></span>
                                 </Button>
                                 <div className={`sideBarNav ${isOpenSideBarVal === true ? "open" : ""}`}>
                                    <ul>
                                    <li className="list-inline-item"><Link to="/"><Button><IoMdHome />Home</Button></Link></li>
                                    <li className="list-inline-item"><Link to="/"><Button><MdFoodBank />Meats and Food</Button></Link></li>

                                    </ul>
                                 </div>
                                </div>
                              
                            </div>
                        <div className='col-sm-9 navPart2 d-flex align-items-center'>
                                <ul className="list list-inline ml-auto">
                                    <li className="list-inline-item"><Link to="/"><Button><IoMdHome />Home</Button></Link></li>
                                    <li className="list-inline-item"><Link to="/"><Button><TfiShine  />Care</Button></Link>
                                    <div className="submenu shadow">
                                    <Link to="/"><Button>hair care</Button></Link>
                                    <Link to="/"><Button>oral care</Button></Link>
                                    <Link to="/"><Button>nail care</Button></Link>
                                    <Link to="/"><Button>skin care</Button></Link>
                                    </div>
                                    </li>
                                    <li className="list-inline-item"><Link to="/"><Button><TfiShine />korean products</Button></Link></li>
                                    <li className="list-inline-item"><Link to="/"><Button><MdOutlinePriceCheck/>under LE.200</Button></Link></li>
                                    <li className="list-inline-item"><Link to="/"><Button><PiHairDryer />curly hair</Button></Link></li>
                                    <li className="list-inline-item"><Link to="/"><Button><TiMessage/>Contact</Button></Link></li>

                                
                                
                                </ul>
                            </div>    
                        </div>
                    </div>
                </nav>
    )
}

export default Navigation;