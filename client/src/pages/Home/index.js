import HomeBanner from "../../components/HomeBanner";
import { useState , useEffect } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import React from "react";
import Slider from "react-slick";
import ProductItem from "../../components/ProductItem";
import HomeCat from "../../components/HomeCat";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import offersIMG from "../../assets/special-offer-star-7527442-removebg-preview.png";
import { GoMail } from "react-icons/go";
import { Link } from "react-router-dom";
import {getProducts} from "../../Services/productApi";
import { getCategories } from "../../Services/categoryApi";
import { subscribeNewsLetter } from "../../Services/newsLetterApi";
const Home = () =>{
     var productSliderOptions = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow:4 ,
    slidesToScroll: 1,
    arrows:false,

     responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
  };

  const catSliderOptions = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
      {
          breakpoint: 1200,
          settings: {
              slidesToShow: 5,
          },
      },
      {
          breakpoint: 992,
          settings: {
              slidesToShow: 4,
          },
      },
      {
          breakpoint: 768,
          settings: {
              slidesToShow: 3,
          },
      },
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 2,
          },
      },
  ],
};

const [products, setProducts] = useState([]);
const [categories, setCategories] = useState([]);
const [email , setEmail] = useState("");
const [subStatus , setSubStatus] = useState("");
const [subMessage , setSubMessage]= useState("");
useEffect(() => {
    getProducts()
        .then((res) => {
            const mapped = res.data.map((p) => ({
                _id: p._id,
                images: p.images,
                title: p.name,
                price: p.price,
                brand: p.brand,
                description: p.description,
                type:p.type,
                MFG:p.MFG,
                life:p.life,
                countInStock:p.countInStock,
                isFeatured:p.isFeatured,
                rating: p.rating,
                category: p.category?.map((c) => c.name )  || [],
            }));
            setProducts(mapped);
        })
        .catch((err) => console.log(err));
}, []);

useEffect(() => {
  const fetchCategories = async () => {
    try {
      const res = await getCategories();

      setCategories(res.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  fetchCategories();
}, []);

  const handleNewsLetterSubscribeSubmit = async (e) =>{
    e.preventDefault();
    if(!email){
      setSubStatus("error");
      setSubMessage("Please enter your email")
      return;
    }
    setSubStatus("loading");
     try{
      const res = await subscribeNewsLetter(email);
      setSubStatus("success");
      setSubMessage(res.data.message || "Subscribed successfully!");
      setEmail("")
     }catch (err){
      setSubStatus("error");
      setSubMessage(err.response?.data?.message || "Something went wrong!")
     }
  }
return(
    
    <>
    <HomeBanner/>
    <section className="feautredCat my-3">
    <div className="container px-3 px-md-2" >
      <h4 className="mb-3">Featured Categories</h4>
    
    <div className="mt-3 w-100"> 
    <Slider {...catSliderOptions}>
  {categories.map((item,index) => (
      <HomeCat
      key={item._id}
      id={item._id}
      image={item.image}
    />
  ))}
</Slider>
</div>
  </div>
</section>

    <section className="homeProducts">
          <div className="container">
            <div className="row g-4">
                <div className="col-12 col-md-3">
                    <div className="banner">
                    <img src="https://www.twffer.com/uploads/offers_attachments/1000/0b061b2a-d195-46b9-b699-13a39664b543.jpg" alt="" className="sideImg cursor w-100"/>
                    </div>

                     <div className="banner mt-4">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw1sOY2nPR5FnkMrzya1ECZ0vzBF7DzqkF3EJqx9bJw7EPUIYlU5GsLqJg&s=10" alt="" className="sideImg cursor w-100"/>
                    </div>
                </div>
                 <div className="col-12 col-md-9">
                    <div className="d-flex align-items-center justify-content-center mb-3">
                        <div className="info">
                            <h3 className="mb-0">BEST SELLERS</h3>

                             </div>
                             <Link to="/listing" className="viewAllBtn ml-3 btn d-flex align-items-center"  > View all<IoIosArrowRoundForward/></Link>
                    </div>
                            <div className="productRow w-100 mt-3">
  <Slider {...productSliderOptions}>
    {products.map((product, index) => (
      <ProductItem
        _id={product._id}
        key={product._id}
        isFeatured={product.isFeatured}
        images={product.images}
        title={product.title}
        price={product.price}
        discount={product.discount}
        brand={product.brand}
        description={product.description}
        countInStock={product.countInStock}
        type={product.type}
        MFG={product.MFG}
        rating={product.rating}
        life={product.life}
        className={
          index===0 ?"card-right" :index===products.length-1 ?"card-left" :"card-middle"
        }
      />
    ))}
  </Slider>
</div>
  
<div className="secHomeBanner flex-column flex-md-row d-flex align-items-center my-5 gap-3">
  <div>
      <img src="https://eg.arabiccoupon.com/sites/default/files/styles/article/public/field/image/70off-boots-summer-sale-with-boots-promo-code-en-arabiccoupon-articles-m08-c.jpg" alt=""/>
  </div>
  <div>
    <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW_kFLvo9XsKB3KEKhrFFXie4u-KbF0S2JXnBpj7TH77Z4bpvQMHLogLE&s=10" alt=""/>
  </div>
</div>



</div>
</div>
</div>
</section>

<section className="newsLetterSection bg-red my-3 align-items-center d-flex">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-12 mb-4 mb-md-0">
        <p className="text-white mb-2 fs-6">15% discount on your first order</p>
        <h4 className="text-white mb-2 fs-3 fw-bold">Join our newsletter and get...</h4>
        <p className="text-secondary text-white">Join our email subscription now to get updates on promotions and coupons.</p>
        {subStatus === "success" ?(
          <p className="text-white fw-bold">{subMessage}</p>
        ):(
        <form onSubmit={handleNewsLetterSubscribeSubmit}>
        <span><GoMail /></span>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="YOUR EMAIL ADDRESS" required/>
        <button disabled={subStatus === "loading"} className="btn ms-auto text-white bg-red fw-bold" style={{height:'52px'}}>
        {subStatus === "loading" ? "Sending" : "Subscribe"}
          </button>
        </form>
        )
      }
      {subStatus === "error" && (
        <p className="text-white fw-bold mt-2">{subMessage}</p>
      )}
       
      </div>
      <div className="col-md-6 col-12 text-center">
        <img className="offersIMG" src={offersIMG} alt=""/>
      </div>

    </div>
  </div>
</section>
</>
)
}

export default Home;