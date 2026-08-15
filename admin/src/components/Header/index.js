import { Link } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";
import { MdMenuOpen } from "react-icons/md";
import { IoIosCart } from "react-icons/io";
import { Avatar, Menu, Portal } from "@chakra-ui/react"
import { useNavigate } from 'react-router-dom';
import {useContext , useState , useEffect} from 'react';
import { MyContext } from '../../App';


const Header = ({
    isSidebarOpen,
    setIsSidebarOpen
}) =>{    

     const navigate = useNavigate();
      const context = useContext(MyContext);
  
      const [setExistingUser] = useState(false);
  
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
          navigate('/');
      }
  
    return(
    <>
    <header className=" d-flex align-items-center">
        <div className="container-fluid">
            <div className="row d-flex align-items-center">
                <div className="col-lg-3 col-md-3 part1 ps-1">
                    <Link to={'/dashboard'} className="d-flex align-items-center logo">
                    <img src='https://img.freepik.com/premium-vector/pharmacy-logo-vector_23987-171.jpg' alt=""/>
                    <span className="ms-2 text-dark fw-bold ">Pharmacy</span>
                    </Link>
                </div>
                <div className="col-lg-4 col-md-4 d-flex align-items-center part2 ps-3">
                <button
                className="btn rounded-circle me-3"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                >
                {
                    isSidebarOpen
                        ? <MdMenuOpen/>
                        : <MdOutlineMenu/>
                }
                 </button>
                </div>
                <div className="col-lg-5 col-md-5 d-flex align-items-center part3 justify-content-end">
              
                 

              
    {context.isLogin?(
      <>
           <div className="myAccWrapper d-flex align-items-center">
                     <div className="myAcc d-flex align-items-center">
                        <div className="userImg d-flex">
                             
      <Menu.Root positioning={{ placement: "right-end" }}>
      <Menu.Trigger rounded="full" focusRing="outside">
        <Avatar.Root size="sm">
          <Avatar.Fallback name="Segun Adebayo" />
          <Avatar.Image className="object-fit-contain w-100" src="https://bluemoji.io/cdn-proxy/646218c67da47160c64a84d5/66b3eba284d9bc814570814d_18.png" />           
        </Avatar.Root>
      </Menu.Trigger>
    </Menu.Root>
    </div>
       <div className="userInfo align-items-center ms-2">
                            <h6 className="mb-0 pb-0 text-capitalize">{context.user?.username}</h6>
                            <p className="text-secondary mt-0 pt-0">@{context.user?.username}</p>
                             </div>
                             <div className="mx-2">
                        <button onClick={handleLogout} className="btn bg-red text-white rounded-4">logout</button>
                     </div>
                          </div>
                    </div>
                     </>
                        
    ):(  <button className="btn bg-red text-white rounded-4"  onClick={() => navigate('/')}>Sign In</button>   )
                     }
     
                
                   
                  

                </div>
            </div>
        </div>
    </header>
    </>
    )
}

export default Header;