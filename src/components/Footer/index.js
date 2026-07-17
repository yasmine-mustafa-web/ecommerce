import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { CiDiscount1 } from "react-icons/ci";
import { MdOutlinePriceCheck } from "react-icons/md";
import { Link } from "react-router-dom";
import { TbPhoneCall } from "react-icons/tb";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";


const Footer =()=>{
    return(
        <>
        <div className="footer">
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

                    <div className="secFooter  justify-content-between row mt-4">
                        <div className="col">
                            <h5 className="fw-bold">Care</h5>
                            <ul>
                                <li><Link to="#">Skin care</Link></li>
                                <li><Link to="#">Hair care</Link></li>
                                <li><Link to="#">Oral care</Link></li>

                            </ul>
                        </div>

                         <div className="col">
                            <h5 className="fw-bold">Care</h5>
                            <ul>
                                <li><Link to="#">Skin care</Link></li>
                                <li><Link to="#">Hair care</Link></li>
                                <li><Link to="#">Oral care</Link></li>

                            </ul>
                        </div> <div className="col">
                            <h5 className="fw-bold">Care</h5>
                            <ul>
                                <li><Link to="#">Skin care</Link></li>
                                <li><Link to="#">Hair care</Link></li>
                                <li><Link to="#">Oral care</Link></li>

                            </ul>
                        </div> <div className="col">
                            <h5 className="fw-bold">Care</h5>
                            <ul>
                                <li><Link to="#">Skin care</Link></li>
                                <li><Link to="#">Hair care</Link></li>
                                <li><Link to="#">Oral care</Link></li>

                            </ul>
                        </div> <div className="col align-items-center">
                            <h5 className="fw-bold">Care</h5>
                            <ul>
                                <li><Link to="#">Skin care</Link></li>
                                <li><Link to="#">Hair care</Link></li>
                                <li><Link to="#">Oral care</Link></li>

                            </ul>
                        </div>
                    </div>
                      </div>
                        </div>
                      <footer>
                <div className="container"> 
                <div className="thirdFooter row mt-4">
                    <div className="col-md-3 d-flex text-align-center">
                    <span className="fs-4 me-3 mt-2">  <TbPhoneCall /></span>  
                    <div>
                        <h4 className="mb-0">01015011656</h4>
                        <p className="text-secondary mt-0">Working 10:00 - 22:00</p>
                    </div>
                    </div>  
                    <div className="col-md-3">
                    
                        <h6 className="mb-0">Download App on Mobile :</h6>
                        <p className="text-secondary">15% discount on your first purchase</p>
                    </div>
                    <div className="col-md-3 d-flex">
                        <div>
                            <img src="https://freelogopng.com/images/all_img/1664287128google-play-store-logo-png.png" />
                        </div>
                        <div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/3840px-Download_on_the_App_Store_Badge.svg.png" />
                        </div>
                    </div>
                                        <div className="col-md-3 d-flex">
                                <span><CiFacebook /></span>
                                <span><CiInstagram/></span>
                        </div>
                </div>
          </div>
                          </footer>
</>
      
    )
}


export default Footer;