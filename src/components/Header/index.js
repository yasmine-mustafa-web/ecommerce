import {Link} from 'react-router-dom';
import Logo from '../../assets/unnamed-removebg-preview.png';
import CountryDropDown from '../CountryDropDown';
import {Button} from '@mui/material';
import { IoIosSearch } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";
import SerachBox from './SearchBox';
import { RxHamburgerMenu } from "react-icons/rx";
import {FaAngleDown} from 'react-icons/fa6';
import Navigation from './Navigation';

const Header = () => {
    return (
        <>
            <div className="headerWrapper">
                <div className="top-strip bg-blue">
                    <div className="container">
                        <p className="text-center my-0">
                            Due to <b>Fifa </b>orders maybe delayed today
                        </p>
                    </div>
                </div>
                <header className="header">
                    <div className="container">
                        <div className="row">
                            <div className="logoWrapper d-flex align-items-center col-sm-2">
                                <Link to={'/'}><img src={Logo}/></Link>
                            </div>
                        <div className='part2 d-flex align-items-center col-sm-10'>
                         <CountryDropDown />
                      <SerachBox />


                         <div className='part3 d-flex align-items-center ml-auto' >
                            <Button className='circle align-items-center justify-content-center mr-3'><FiUser /></Button>
                            <div className='ml-auto cartTab d-flex align-items-center'>
                                <span className='price'>$3.29</span>
                                <div className='position-relative  ml-2'>
                                   <Button className='circle'><IoBagOutline /></Button>
                                    <span className='count d-flex align-items-center justify-content-center'>1</span>
                                
                                </div>
                            </div>
                         </div>


                            </div>    
                        </div>
                    </div>
                </header>

      <Navigation />

            </div>
        </>
    )
}

export default Header;