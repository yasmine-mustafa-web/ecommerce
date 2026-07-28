import Slider from "react-slick";
import ProductItem from "../../../components/ProductItem";
import {Button} from '@mui/material';


const RelatedProducts=(props)=>{
    var productSliderOptions = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow:4 ,
    slidesToScroll: 1,
    arrows:false,
  };

     const products = [
    {
            images:[        "https://m.media-amazon.com/images/I/61dzGbM7EnL._AC_SX569_.jpg",
       "https://m.media-amazon.com/images/I/61eHITpNFtL._AC_SX569_.jpg",
        "https://m.media-amazon.com/images/I/61SVz8DtYBL._AC_SX569_.jpg",
],
      title: "La Roche-Posay Effaclar Ultra Concentrated Serum 30ml (12)",
      price: '1,900',
      realprice:'1900',
      discountprice:'1600',
      discount: 28,
      description:'dark spots coeerction',
       brand:'La Roche-Posay',
          state:'out of stock',
          type:'Serum',
          MFG:'21-jul-26',
          life:'2 years'
    },
        {
            images: [
                'https://m.media-amazon.com/images/I/61+dkbadKNL._AC_SY879_.jpg'
            ],
            title: 'Beauty of Korean Revive Eye Serum with Ginseng & Retinal (30m) | Anti-Aging, Wrinkle Care, Korean Eye Cream for Dark Circles & Fine Lines',
            brand: 'ELLENTRACY',
            category:
                'korean products'
            ,
            price: "",
            realprice: 1400,
            discountprice: 830,
            discount: '41%',
            type: 'serum',
            life: '1 year',
            MFG: '8 june 2026',
            state: 'in stock',
            description: 'Ginseng and Retinol serum for improving eye care, measures 30ml and is suitable for all ages. Contains high-quality ingredients to ensure the highest quality and durability. Comes in a single size.Includes one serum for endless eye care possibilities. Perfect for reducing dark circles and encouraging anti-aging development. Suitable for all skin types and ages.Features a unique blend of ginseng and retinol to improve skin texture and elasticity. Ideal for anti-aging and improving overall eye health.Made with high-quality ingredients to provide intense hydration and nourishment. Suitable for all skin conditions, perfect for dry and sensitive skin. Offers anti-aging benefits to all skin types.to solve common eye concerns. Perfect for daily use and travel.Reduces the appearance of fine lines, wrinkles, and dark circles. Offers hydration, nourishment, and protection to the delicate skin around the eyes.'
        }]
        return(
 <div className="productRow w-100 mt-3">
    <h3>{props.title}</h3>
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
         type={product.type}
        MFG={product.MFG}
        life={product.life}
        className={
          index===0 ?"card-right" :index===products.length-1 ?"card-left" :"card-middle"
        }
      />
    ))}
  </Slider>
</div>
  
)
}


export default RelatedProducts;