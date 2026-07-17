import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { CiDiscount1 } from "react-icons/ci";
import { MdOutlinePriceCheck } from "react-icons/md";

const Footer =()=>{
    return(
        <footer>
            <div className="container">
                <div className="row topInfo d-flex w-100">
                <div className="col align-items-center d-flex">
                    <span className="me-2">< MdOutlineProductionQuantityLimits /></span>
                    <span>Trusted Products</span>
                </div>
                <div className="col align-items-center d-flex">
                    <span className="me-2">< MdOutlineDeliveryDining /></span>
                    <span>Free delivery fo order over LE.999</span>
                </div><div className="col align-items-center d-flex">
                    <span className="me-2">< CiDiscount1 /></span>
                    <span>Daily discounts</span>
                </div><div className="col align-items-center d-flex">
                    <span className="me-2">< MdOutlinePriceCheck  /></span>
                    <span>best price on market</span>
                </div>
                </div>
            </div>
        </footer>
    )
}


export default Footer;