import Slider from "react-slick";


const HomeCat =() =>{
const catSliderOptions = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 9,
  slidesToScroll: 1,
  arrows: true,
};
const categories = [
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
        
    <section className="homeCat">
      <div className="container">
        <Slider {...catSliderOptions}>
  {categories.map((item) => (
    <div className="catItem">
      <img src={item.image} alt={item.name} />
      <h6>{item.name}</h6>
    </div>
  ))}
</Slider>
      </div>
    </section>
    )
}


export default HomeCat;