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

const Navigation = () =>{
    return(
          <nav>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-sm-3 navPart1'>
                                <div className="catWrapper">
                                 <Button className='allCatTab align-items-center'>
                                    <span className="icon1 mr-2"><RxHamburgerMenu /></span>
                                    <span className='text'>ALL CATEGORIES</span>
                                    <span className="icon2 ml-4"><FaAngleDown /></span>
                                 </Button>
                                 <div className="sideBarNav shadow">
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
                                    <li className="list-inline-item"><Link to="/"><Button><MdFoodBank />Meats and Food</Button></Link>
                                    <div className="submenu shadow">
                                    <Link to="/"><Button>Cakes</Button></Link>
                                    <Link to="/"><Button>Cupcakes</Button></Link>
                                    <Link to="/"><Button>Tre leche</Button></Link>
                                    <Link to="/"><Button>Gatoh</Button></Link>
                                    </div>
                                    </li>
                                    <li className="list-inline-item"><Link to="/"><Button><MdOutlineBakeryDining />Bakery</Button></Link></li>
                                    <li className="list-inline-item"><Link to="/"><Button><GiWrappedSweet />snacks</Button></Link></li>
                                    <li className="list-inline-item"><Link to="/"><Button><MdElectricalServices/>electronics</Button></Link></li>
                                    <li className="list-inline-item"><Link to="/"><Button><PiHairDryer />hair care</Button></Link></li>
                                    <li className="list-inline-item"><Link to="/"><Button><GiClothes />Clothes</Button></Link></li>
                                    <li className="list-inline-item"><Link to="/"><Button><TiMessage/>Contact</Button></Link></li>

                                
                                
                                </ul>
                            </div>    
                        </div>
                    </div>
                </nav>
    )
}

export default Navigation;