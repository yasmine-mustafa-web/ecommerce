import HomeBanner from "../../components/HomeBanner";
import {Button} from '@mui/material';
import { IoIosArrowRoundForward } from "react-icons/io";
import React from "react";
import Slider from "react-slick";
import ProductItem from "../../components/ProductItem";
import AllMenu from "../../components/AllMenu";
import HomeCat from "../../components/HomeCat";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import offersIMG from "../../assets/special-offer-star-7527442-removebg-preview.png";
import { GoMail } from "react-icons/go";
import oralcare from "../../assets/oralhygiene.png" ;
import haircare from "../../assets/haircare.png";
import nailcare from "../../assets/nailcare.png";
import under200 from "../../assets/under200.png";
import skincare from "../../assets/skincare.png";
import korean from "../../assets/korean.png";
import sunscreen from "../../assets/sunscreen.jpeg";

const Home = () =>{
     var productSliderOptions = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow:4 ,
    slidesToScroll: 1,
    arrows:false,
  };

  const catSliderOptions = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows: true,
};

      const productsNew = [
    {
            images:[        "https://m.media-amazon.com/images/I/61dzGbM7EnL._AC_SX569_.jpg",
       "https://m.media-amazon.com/images/I/61eHITpNFtL._AC_SX569_.jpg",
,        "https://m.media-amazon.com/images/I/61SVz8DtYBL._AC_SX569_.jpg",
],
      title: "La Roche-Posay Effaclar Ultra Concentrated Serum 30ml (12)",
      price: '1,900',
      realprice:'1900',
      discountprice:'1600',
      discount: 28,
      description:'dark spots coeerction',
       brand:'La Roche-Posay'
    },
    {
            images:[        "https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/585174_1739978869_9e400a3e-93d6-44fa-b9fd-847a4ceea88d.jpeg",
        "https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/585174_1739978869_9e400a3e-93d6-44fa-b9fd-847a4ceea88d.jpeg",
      "https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/585174_1739978869_9e400a3e-93d6-44fa-b9fd-847a4ceea88d.jpeg"
],
      title: "Chicken Burger",
      price: 220,
      discount: 15,
         description:'dark spots coeerction',
          brand:'zara',
          state:'In Stock'
    },
    {
            images:[        "https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/585174_1739978869_9e400a3e-93d6-44fa-b9fd-847a4ceea88d.jpeg",
        "https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/585174_1739978869_9e400a3e-93d6-44fa-b9fd-847a4ceea88d.jpeg",
        "https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/585174_1739978869_9e400a3e-93d6-44fa-b9fd-847a4ceea88d.jpeg",
],
    title: "Double Burger",
      price: 250,
      discount: 10,
         description:'dark spots coeerction',
          brand:'zara',
          state:'out of stock'
    },
    {
      images:[        "https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/585174_1739978869_9e400a3e-93d6-44fa-b9fd-847a4ceea88d.jpeg",
     "https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/585174_1739978869_9e400a3e-93d6-44fa-b9fd-847a4ceea88d.jpeg",
        "https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/585174_1739978869_9e400a3e-93d6-44fa-b9fd-847a4ceea88d.jpeg",
],
      title: "Beef Burger",
      price: 210,
      discount: 20,
         description:'dark spots coeerction',
          brand:'zara'
    },
    {
            images:[        "https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/585174_1739978869_9e400a3e-93d6-44fa-b9fd-847a4ceea88d.jpeg",
        "https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/585174_1739978869_9e400a3e-93d6-44fa-b9fd-847a4ceea88d.jpeg",
        "https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/585174_1739978869_9e400a3e-93d6-44fa-b9fd-847a4ceea88d.jpeg",
],
      title: "Classic Burger",
      price: 180,
      discountprice:80,
      discount: 12,
         description:'dark spots coeerction',
          brand:'zara',
          state:'out of stock'
    }
  ];


      const products = [
    {
            images:[        "https://m.media-amazon.com/images/I/61dzGbM7EnL._AC_SX569_.jpg",
       "https://m.media-amazon.com/images/I/61eHITpNFtL._AC_SX569_.jpg",
,        "https://m.media-amazon.com/images/I/61SVz8DtYBL._AC_SX569_.jpg",
],
      title: "La Roche-Posay Effaclar Ultra Concentrated Serum 30ml (12)",
      price: '1,900',
      realprice:'1900',
      discountprice:'1600',
      discount: 28,
      description:'dark spots coeerction',
       brand:'La Roche-Posay',
          state:'out of stock'
    },
    {
            images:[        "https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/585174_1739978869_9e400a3e-93d6-44fa-b9fd-847a4ceea88d.jpeg",
        "https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/585174_1739978869_9e400a3e-93d6-44fa-b9fd-847a4ceea88d.jpeg",
      "https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/585174_1739978869_9e400a3e-93d6-44fa-b9fd-847a4ceea88d.jpeg"
],
      title: "Chicken Burger",
      price: 220,
      discount: 15,
         description:'dark spots coeerction',
          brand:'zara'
    },
    {
            images:[        "https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/585174_1739978869_9e400a3e-93d6-44fa-b9fd-847a4ceea88d.jpeg",
        "https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/585174_1739978869_9e400a3e-93d6-44fa-b9fd-847a4ceea88d.jpeg",
        "https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/585174_1739978869_9e400a3e-93d6-44fa-b9fd-847a4ceea88d.jpeg",
],
    title: "Double Burger",
      price: 250,
      discount: 10,
         description:'dark spots coeerction',
          brand:'zara'
    },
    {
      images:[        "https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/585174_1739978869_9e400a3e-93d6-44fa-b9fd-847a4ceea88d.jpeg",
     "https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/585174_1739978869_9e400a3e-93d6-44fa-b9fd-847a4ceea88d.jpeg",
        "https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/585174_1739978869_9e400a3e-93d6-44fa-b9fd-847a4ceea88d.jpeg",
],
      title: "Beef Burger",
      price: 210,
      discount: 20,
         description:'dark spots coeerction',
          brand:'zara'
    },
    {
            images:[        "https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/585174_1739978869_9e400a3e-93d6-44fa-b9fd-847a4ceea88d.jpeg",
        "https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/585174_1739978869_9e400a3e-93d6-44fa-b9fd-847a4ceea88d.jpeg",
        "https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/585174_1739978869_9e400a3e-93d6-44fa-b9fd-847a4ceea88d.jpeg",
],
      title: "Classic Burger",
      price: 180,
      discountprice:80,
      discount: 12,
         description:'dark spots coeerction',
          brand:'zara'
    }
  ];

const categories = [
    {
      image:skincare
    },
      {
          image:haircare
       
    },
      {
      
      image:oralcare
    },
      {
       image:nailcare
    },
      {
        image:korean
    },
      {
     image:under200
    },
      {
       image:sunscreen
    }
  ]

return(
    
    <>
    <HomeBanner/>
    <section className="feautredCat my-3">
    <div className="container">
      <h4>Feautred Categories</h4>
    
    <div className="mt-3 w-100"> 
    <Slider {...catSliderOptions}>
  {categories.map((item,index) => (
      <HomeCat
      key={index}
      image={item.image}
    />
  ))}
</Slider>
</div>
  </div>
</section>

    <section className="homeProducts">
               <div
        className="container">
            <div className="row">
                <div className="col-md-3">
                    <div className="banner">
                    <img src="https://www.twffer.com/uploads/offers_attachments/1000/0b061b2a-d195-46b9-b699-13a39664b543.jpg" className="sideImg cursor w-100"/>
                    </div>

                     <div className="banner mt-4">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw1sOY2nPR5FnkMrzya1ECZ0vzBF7DzqkF3EJqx9bJw7EPUIYlU5GsLqJg&s=10" className="sideImg cursor w-100"/>
                    </div>
                </div>
                 <div className="col-md-9">
                    <div className="d-flex align-items-center">
                        <div className="info">
                            <h3>BEST SELLERS</h3>

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
        images={product.images}
        title={product.title}
        price={product.price}
        discountprice={product.discountprice}
        realprice={product.realprice}
        discount={product.discount}
        brand={product.brand}
        description={product.description}
        state={product.state}
        className={
          index===0 ?"card-right" :index===products.length-1 ?"card-left" :"card-middle"
        }
      />
    ))}
  </Slider>
</div>



                   <div className="d-flex align-items-center mt-5">
                        <div className="info">
                            <h3>NEW PRODUCTS</h3>
                            <p className="text-secondary">New products with updated stocks</p>
                             </div>
                             <Button className="ml-auto  align-items-center viewAllBtn ">
                                View all<IoIosArrowRoundForward/>
                             </Button>
                    </div>
                   
                            <div className="productRow w-100 mt-3 d-flex productRow2">
    {productsNew.map((product, index) => (
      <ProductItem
        key={index}
        images  ={product.images}
        title={product.title}
        price={product.price}
        discountprice={product.discountprice}
        realprice={product.realprice}
        brand={product.brand}
        discount={product.discount}
        description={product.description}
        state={product.state}
        className={
          index===0 ?"card-right" :index===products.length-1 ?"card-left" :"card-middle"
        }
      />
    ))}
</div>


<div className="secHomeBanner col-md-9 d-flex align-items-center my-4">
  <div>
      <img src="https://eg.arabiccoupon.com/sites/default/files/styles/article/public/field/image/70off-boots-summer-sale-with-boots-promo-code-en-arabiccoupon-articles-m08-c.jpg"/>
  </div>
  <div>
    <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW_kFLvo9XsKB3KEKhrFFXie4u-KbF0S2JXnBpj7TH77Z4bpvQMHLogLE&s=10"/>
  </div>
</div>



</div>
</div>
</div>
</section>

<section className="newsLetterSection bg-red my-3 align-items-center d-flex">
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <p className="text-white mb-2 fs-6">20% discount on your first order</p>
        <h4 className="text-white mb-2 fs-3 fw-bold">Join our newsletter and get...</h4>
        <p className="text-secondary text-white">Join our email subscription now to get updates on promotions and coupons.</p>
        <form>
        <span><GoMail /></span>
        <input type="email" placeholder="YOUR EMAIL ADDRESS"/>
        <button className="btn ms-auto text-white bg-red fw-bold" style={{height:'52px'}}>Subscribe</button>
        </form>
      </div>
      <div className="col-md-6">
        <img className="offersIMG" src={offersIMG}/>
      </div>

    </div>
  </div>
</section>
</>
)
}

export default Home;