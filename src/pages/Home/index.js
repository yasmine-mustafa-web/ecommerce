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
import oralCare from "../../assets/Health+Problems+That+Poor+Oral+Hygiene+Cause-removebg-preview.png"
import hairCare from "../../assets/Category_-_Hair_Care-removebg-preview.png"

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
  slidesToShow: 8,
  slidesToScroll: 1,
  arrows: true,
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

const categories = [
    {
        image:"https://static.vecteezy.com/system/resources/thumbnails/007/266/639/small/cosmetics-skincare-facial-wash-woman-logo-vector.jpg",
        name:'Skin Care'
    },
      {image:oralCare,
        name:'Oral Hygiene'
    },
      {
        image:hairCare,
        name:'Hair Care'
    },
      {
        image:"https://static.vecteezy.com/system/resources/thumbnails/007/266/639/small/cosmetics-skincare-facial-wash-woman-logo-vector.jpg",
        name:'Korean Products'
    },
      {
        image:"https://static.vecteezy.com/system/resources/thumbnails/007/266/639/small/cosmetics-skincare-facial-wash-woman-logo-vector.jpg",
        name:'Nail Care'
    },
      {
        image:"https://static.vecteezy.com/system/resources/thumbnails/007/266/639/small/cosmetics-skincare-facial-wash-woman-logo-vector.jpg",
        name:'Skin Care'
    },
      {
        image:"https://static.vecteezy.com/system/resources/thumbnails/007/266/639/small/cosmetics-skincare-facial-wash-woman-logo-vector.jpg",
        name:'Skin Care'
    },
      {
        image:"https://static.vecteezy.com/system/resources/thumbnails/007/266/639/small/cosmetics-skincare-facial-wash-woman-logo-vector.jpg",
        name:'Skin Care'
    },
      {
        image:"https://static.vecteezy.com/system/resources/thumbnails/007/266/639/small/cosmetics-skincare-facial-wash-woman-logo-vector.jpg",
        name:'Skin Care'
    },
      {
        image:"https://static.vecteezy.com/system/resources/thumbnails/007/266/639/small/cosmetics-skincare-facial-wash-woman-logo-vector.jpg",
        name:'Skin Care'
    },
      {
        image:"https://static.vecteezy.com/system/resources/thumbnails/007/266/639/small/cosmetics-skincare-facial-wash-woman-logo-vector.jpg",
        name:'Skin Care'
    },
      {
        image:"https://static.vecteezy.com/system/resources/thumbnails/007/266/639/small/cosmetics-skincare-facial-wash-woman-logo-vector.jpg",
        name:'Skin Care'
    },
      {
        image:"https://static.vecteezy.com/system/resources/thumbnails/007/266/639/small/cosmetics-skincare-facial-wash-woman-logo-vector.jpg",
        name:'Skin Care'
    },
      {
        image:"https://static.vecteezy.com/system/resources/thumbnails/007/266/639/small/cosmetics-skincare-facial-wash-woman-logo-vector.jpg",
        name:'Skin Care'
    },
      {
        image:"https://static.vecteezy.com/system/resources/thumbnails/007/266/639/small/cosmetics-skincare-facial-wash-woman-logo-vector.jpg",
        name:'Skin Care'
    },
      {
        image:"https://static.vecteezy.com/system/resources/thumbnails/007/266/639/small/cosmetics-skincare-facial-wash-woman-logo-vector.jpg",
        name:'Skin Care'
    },
      {
        image:"https://static.vecteezy.com/system/resources/thumbnails/007/266/639/small/cosmetics-skincare-facial-wash-woman-logo-vector.jpg",
        name:'Skin Care'
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
      name={item.name}
      className={
        index===0 ?'firstBack' : index===1 ?'secBack' : index===2 ? 'thirdBack' : 'allBack'
      }
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