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
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_xC-iqFlaeeeTP5ahMUJ1J5KVx4QNX9CiLK08c5PW31C8uKt6OzkxuEr_&s=10" className="sideImg cursor w-100"/>
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
                          
                            <div className="card card-right" style="width: 18rem;">
  <img src="https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/585174_1752334763_9f5fb91b-e92b-470d-87be-3f667d80f6f7.png" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Chessy Mushroom</h5>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">in stock</li>
    <li className="list-group-item text-secondary">190 LE</li>
  </ul>
  <div className="card-body">
    <a href="#" className="btn btn-card w-100 card-link">Read More</a>
  </div>
</div>


 <div className="card card-middle" style="width: 18rem;">
  <img src="https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/585174_1767202250_a0b9e23d-0d20-4cba-b02c-f5f9e60449a5.jpg
" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Chessy Mushroom</h5>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">in stock</li>
    <li className="list-group-item text-secondary">190 LE</li>
  </ul>
  <div className="card-body">
    <a href="#" className="btn btn-card w-100 card-link">Read More</a>
  </div>
</div>


 <div className="card card-middle" style="width: 18rem;">
  <img src="https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/585174_1701100860_9ab6d740-1a26-455d-9765-dbd23efa1175.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Chessy Mushroom</h5>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">in stock</li>
    <li className="list-group-item text-secondary">190 LE</li>
  </ul>
  <div className="card-body">
    <a href="#" className="btn btn-card w-100 card-link">Read More</a>
  </div>
</div>

 <div className="card card-left" style="width: 18rem;">
    <img src="https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/585174_1739978869_9e400a3e-93d6-44fa-b9fd-847a4ceea88d.jpeg" className="card-img-top"/>
  <div className="card-body">
    <h5 className="card-title">Chessy Mushroom</h5>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">in stock</li>
    <li className="list-group-item text-secondary">190 LE</li>
  </ul>
  <div className="card-body">
    <a href="#" className="btn btn-card w-100 card-link">Read More</a>
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