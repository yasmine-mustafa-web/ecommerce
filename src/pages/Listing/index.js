import SideBar from "../../components/SideBar";
import { Button } from "@mui/material";
import { IoMdMenu } from "react-icons/io";
import { CgMenuGridO } from "react-icons/cg";
import { RxDragHandleDots2 } from "react-icons/rx";
import { TfiLayoutGrid4 } from "react-icons/tfi";
const Listing=()=>{
    return(
        <>
            <section className="productsListing">
                <div className="container">
                    <div className="productListing d-flex">
                        <SideBar/>

                        <div className="content-right">
                            <div>
                                <img className="rounded-4 w-100 object-fit-cover" src="https://i.ytimg.com/vi/VFzcPwyT8RU/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGFIgZShgMA8=&rs=AOn4CLCu0g88-ssSpWvh5QUNCEwrMc7rqA"/>
                                <div className="showBy w-100 d-flex rounded-4 mt-3">
                                    <Button><IoMdMenu/></Button>
                                    <Button><RxDragHandleDots2/></Button>
                                    <Button><CgMenuGridO/></Button>
                                    <Button><TfiLayoutGrid4/></Button>
                                </div>
                           
                            </div>
                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}

export default Listing;