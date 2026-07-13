import HomeBanner from "../../components/HomeBanner";
import {Button} from '@mui/material';
import { IoIosArrowRoundForward } from "react-icons/io";
import React from "react";
import Slider from "react-slick";

const Home = () =>{
     var productSliderOptions = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow:4 ,
    slidesToScroll: 1
  };
return(
    
    <>
    <HomeBanner/>

    <section className="homeProducts">
        <div
        className="container">
            <div className="row">
                <div className="col-md-3">
                    <div className="banner">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfyeq3YxzpqATCJAlDX5icD0hvkl1NQPyHLk0a68IO90MCXcTlMvqtJSA&s=10" className="cursor w-100"/>
                    </div>
                </div>
                 <div className="col-md-9">
                    <div className="d-flex align-items-center">
                        <div className="info">
                            <h3>Best Seller</h3>

                             </div>
                             <Button className="ml-auto  align-items-center viewAllBtn ">
                                View all<IoIosArrowRoundForward/>
                             </Button>
                    </div>
                    <div className="productRow w-100 mt-3">
                        <Slider {...productSliderOptions}>
                            <div className="item productItem">
                                <div className="imgWrapper">
                                    <img className="w-100" src="https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/585174_1752334763_9f5fb91b-e92b-470d-87be-3f667d80f6f7.png" />
                                </div>
                       
                            </div>
                            <div className="item productItem">
                                <div className="imgWrapper">
                                    <img className="w-100" src="https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/585174_1752334763_9f5fb91b-e92b-470d-87be-3f667d80f6f7.png" />
                                </div>
                       
                            </div>
                            <div className="item productItem">
                                <div className="imgWrapper">
                                    <img className="w-100" src="https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/585174_1752334763_9f5fb91b-e92b-470d-87be-3f667d80f6f7.png" />
                                </div>
                       
                            </div>
                            <div className="item productItem">
                                <div className="imgWrapper">
                                    <img className="w-100" src="https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/585174_1752334763_9f5fb91b-e92b-470d-87be-3f667d80f6f7.png" />
                                </div>
                       
                            </div>
                            <div className="item productItem">
                                <div className="imgWrapper">
                                    <img className="w-100" src="https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/585174_1752334763_9f5fb91b-e92b-470d-87be-3f667d80f6f7.png" />
                                </div>
                       
                            </div>
                            <div className="item productItem">
                                <div className="imgWrapper">
                                    <img className="w-100" src="https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/585174_1752334763_9f5fb91b-e92b-470d-87be-3f667d80f6f7.png" />
                                </div>
                       
                            </div>
                       
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
)
}

export default Home;