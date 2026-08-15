import {Link} from 'react-router-dom';
import {Button} from '@mui/material';
import { FiUser } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import {useContext , useState , useEffect} from 'react';
import { MyContext } from '../../App';

const Header = () => {
    const navigate = useNavigate();
    const context = useContext(MyContext);

    const [existingUser , setExistingUser] = useState(false);

    useEffect(() =>{
        const token = localStorage.getItem("token");
        setExistingUser(!!token);
        
    }, [context?.isLogin]);

    const handleLogout=() =>{
        localStorage.removeItem("token");
        setExistingUser(false);
        context.setIsLogin(false);
        context.setAlertBox(
            {
                open:true,
                error:false,
                msg:"Logged out successfully!"
            }
        )
        navigate('/my-orders');
    }

    return (
        <>
            <div className="headerWrapper">
                <div className="top-strip bg-red">
                    <div className="container">
                        <p className="text-center my-0 fs-6">
                           Our HotLine is <b> 19880 </b>
                        </p>
                    </div>
                </div>
                <header className="header py-2">
                    <div className="container-fluid">
                        <div className="d-flex flex-nowrap align-items-center justify-content-between">
                            <div className="logoWrapper d-flex align-items-center me-3">
                                <Link to={'/'}><img src='https://img.freepik.com/premium-vector/pharmacy-logo-vector_23987-171.jpg' alt=''/></Link>
                            </div>
                         <div className='part3 d-flex align-items-center gap-2' >                          
                            <Button className='circle align-items-center justify-content-center' onClick={() => navigate(context.isLogin? "/cart" : "/signIn")}><FiUser /></Button>
                            <div className='ml-auto cartTab d-flex align-items-center'>
                                <span className='price mx-2' style={{flexWrap:"nowrap" , whiteSpace:"nowrap"}}><sup>EGP</sup> {context.cartTotal.toFixed(0)}</span>
                                <div className='position-relative  mx-2'>
                                   <Button className='circle' onClick={() => navigate("/cart")}><IoBagOutline /></Button>
                                    <span className='count d-flex align-items-center justify-content-center'>{context.cartCount}</span>
                                
                                </div>

                            {context?.isLogin? (
                                <button onClick={handleLogout} className='btn logout text-white bg-red rounded-4'>Logout</button>
                            ):(
                        <>
                            <button style={{flexWrap:"nowrap" , whiteSpace:"nowrap"}} className="signIn btn bg-red text-white me-2 rounded-4" onClick={() => navigate('/signIn')}>Sign In</button>
                            <button style={{flexWrap:"nowrap" , whiteSpace:"nowrap"}} className="signUp btn me-2 rounded-4" onClick={() => navigate('/signUp')}>Sign Up</button>
                            <button style={{flexWrap:"nowrap" , whiteSpace:"nowrap"}} className="signUp btn me-2 rounded-4" onClick={() => window.open('http://localhost:3001/' , '_blank')}>Admin Dashboard</button>

                        </>
                            )}
                         </div>


                            </div>    
                        </div>
                    </div>
                </header>


            </div>
        </>
    )
}

export default Header;