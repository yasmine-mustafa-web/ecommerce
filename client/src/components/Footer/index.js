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
        <div className="footer d-flex">
            <div className="container">
                <div className="row topInfo d-flex w-100">
                <div className="col align-items-center d-flex">
                    <span className="me-2">< MdOutlineProductionQuantityLimits /></span>
                    <span>Trusted Products</span>
                </div>
                <div className="col align-items-center d-flex">
                    <span className="me-2">< MdOutlineDeliveryDining /></span>
                    <span>Delivery on time</span>
                </div><div className="col align-items-center d-flex">
                    <span className="me-2">< CiDiscount1 /></span>
                    <span>Daily discounts</span>
                </div><div className="col align-items-center d-flex">
                    <span className="me-2">< MdOutlinePriceCheck  /></span>
                    <span>best price on market</span>
                </div>
                </div>

                    
                      </div>
                        </div>
                      <footer className="mb-4">
                <div className="container"> 
                <div className="thirdFooter row mt-4 align-items-center">
                    <div className="col-md-3 d-flex text-align-center col-12">
                    <span className="fs-4 me-3 mt-2">  <TbPhoneCall /></span>  
                    <div>
                        <h4 className="mb-0">01015011656</h4>
                        <p className="text-secondary mt-0">Working 10:00 - 22:00</p>
                    </div>
                    </div>  
                    <div className="col-md-9 d-flex justify-content-end">
                        <div className="d-flex align-items-center gap-4 ">
                    <div>
                    
                        <h6 className="mb-0 fw-bold">Download App on Mobile :</h6>
                        <p className="text-secondary">15% discount on your first purchase</p>
                    </div>
                    <div className="d-flex gap-2 imgFooterContainer">
                        <div>
                        <Link to="https://play.google.com/store/apps/details?hl=en-US&id=com.awfar.elezaby&utm_source=chatgpt.com" target="_blank">
                        <img alt="" src="https://freelogopng.com/images/all_img/1664287128google-play-store-logo-png.png" />
                        </Link>    
                        </div>
                        <div>
                        <Link to="https://apps.apple.com/eg/app/elezaby/id1528993866?platform=iphone&utm_source=chatgpt.com" target="_blank">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/3840px-Download_on_the_App_Store_Badge.svg.png" alt=""/>
                        </Link>
                        </div>
                    </div>
                                        <div className="socailContainer d-flex gap-1 fs-4">
                              
                               <Link to="https://www.instagram.com/elezabypharmacy/?hl=en" target="_blank">
                               <span><CiInstagram className="text-decoration-none"/></span></Link>
                               <Link to="https://www.facebook.com/elezabypharmacy/" target="_blank">
                               <span><CiFacebook className="text-decoration-none" /></span>
                               </Link> 
                                
                        </div>
                        </div>
                        </div>
                </div>
          </div>
          <div>
            <p className="text-secondary text-center my-4">Copyright 2026 © E-COMMERCE. All rights reserved. Developed by <Link to="https://cv-website-kappa-blue.vercel.app/" target="_blank">Yasmina</Link>.</p>
          </div>
                          </footer>
</>
      
    )
}


export default Footer;