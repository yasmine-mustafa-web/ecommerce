import { Link } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";
import { MdMenuOpen } from "react-icons/md";
import SearchBox from "../SearchBox";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { IoIosCart } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";
import {Button, Avatar, Menu, Portal } from "@chakra-ui/react"

const Header = () =>{
    return(
    <>
    <header className=" d-flex align-items-center">
        <div className="container-fluid">
            <div className="row d-flex align-items-center">
                <div className="col-lg-3 col-md-3 part1 ps-1">
                    <Link to={'/'} className="d-flex align-items-center logo">
                    <img src='https://img.freepik.com/premium-vector/pharmacy-logo-vector_23987-171.jpg'/>
                    <span className="ms-2 text-dark fw-bold ">Pharmacy</span>
                    </Link>
                </div>
                <div className="col-lg-4 col-md-4 d-flex align-items-center part2 ps-3">
                    <button className="btn rounded-circle me-3"><MdMenuOpen/></button>
                    <SearchBox />
                </div>
                <div className="col-lg-5 col-md-5 d-flex align-items-center part3 justify-content-end">
                    <div className="btnsHolder ms-auto">
                           <button className="btn rounded-circle me-3"><MdLightMode/></button>
                    <button></button>
                     <Menu.Root positioning={{ placement: "right-start" }}>
      <Menu.Trigger asChild>
        <Button  className="btn rounded-circle me-3" variant="outline" size="sm">
         <IoIosCart/>
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="new-txt">New Text File</Menu.Item>
            <Menu.Item value="new-file">New File...</Menu.Item>
            <Menu.Item value="new-win">New Window</Menu.Item>
            <Menu.Item value="open-file">Open File...</Menu.Item>
            <Menu.Item value="export">Export</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
                    <button className="btn rounded-circle me-3"><MdOutlineMailOutline/></button>
                    <button className="btn rounded-circle me-3"><FaRegBell/></button>
                    </div>
                 

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
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="account">Account</Menu.Item>
            <Menu.Item value="settings">Settings</Menu.Item>
            <Menu.Item value="logout">Logout</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
    </div>
      <div className="userInfo align-items-center ms-2">
                            <h6 className="mb-0 pb-0 text-capitalize">yasmina aly</h6>
                            <p className="text-secondary mt-0 pt-0">@yasminallyy</p>
                             </div>
                        
                     
                        </div>
                    </div>
                  

                </div>
            </div>
        </div>
    </header>
    </>
    )
}

export default Header;