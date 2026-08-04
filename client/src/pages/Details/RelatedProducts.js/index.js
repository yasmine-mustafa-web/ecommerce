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
        discount={product.discount}
        brand={product.brand}
        description={product.description}
        countInStock={product.countInStock}
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