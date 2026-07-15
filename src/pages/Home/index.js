import HomeBanner from "../../components/HomeBanner";
import {Button} from '@mui/material';
import { IoIosArrowRoundForward } from "react-icons/io";
import React from "react";
import Slider from "react-slick";
import ProductItem from "../../components/ProductItem";
import AllMenu from "../../components/AllMenu";

const Home = () =>{
     var productSliderOptions = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow:4 ,
    slidesToScroll: 1
  };



      const products = [
    {
      image:
        "https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/585174_1752334763_9f5fb91b-e92b-470d-87be-3f667d80f6f7.png",
      title: "Cheesy Mushroom",
      price: 190,
      discount: 28,
    },
    {
      image:
        "https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/585174_1767202250_a0b9e23d-0d20-4cba-b02c-f5f9e60449a5.jpg",
      title: "Chicken Burger",
      price: 220,
      discount: 15,
    },
    {
      image:
        "https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/585174_1701100860_9ab6d740-1a26-455d-9765-dbd23efa1175.jpg",
      title: "Double Burger",
      price: 250,
      discount: 10,
    },
    {
      image:
        "https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/585174_1739978869_9e400a3e-93d6-44fa-b9fd-847a4ceea88d.jpeg",
      title: "Beef Burger",
      price: 210,
      discount: 20,
    },
    {
      image:
        "https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/585174_1739978869_9e400a3e-93d6-44fa-b9fd-847a4ceea88d.jpeg",
      title: "Classic Burger",
      price: 180,
      discount: 12,
    },
  ];
return(
    
    <>
    <HomeBanner/>

    <section className="homeProducts">
               <div
        className="container">
            <div className="row">
                <div className="col-md-3">
                    <div className="banner">
                    <img src="https://s3.eu-west-1.amazonaws.com/cdn.getsolo.io/17833505436a4bc50f7f0b5_WhatsApp%20Image%202026-07-06%20at%205.43.19%20PM.jpeg" className="sideImg cursor w-100"/>
                    </div>
                </div>
                 <div className="col-md-9">
                    <div className="d-flex align-items-center">
                        <div className="info">
                            <h3>Best Sellers</h3>

                             </div>
                             <Button className="ml-auto  align-items-center viewAllBtn ">
                                View all<IoIosArrowRoundForward/>
                             </Button>
                    </div>
                   
                            <div className="productRow w-100 mt-3">
  <Slider {...productSliderOptions}>
    {products.map((product, index) => (
      <ProductItem
        key={index}
        image={product.image}
        title={product.title}
        price={product.price}
        discount={product.discount}
        className={
          index===0 ?"card-right" :index===products.length-1 ?"card-left" :"card-middle"
        }
      />
    ))}
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