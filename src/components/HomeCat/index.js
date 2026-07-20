import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeCat =({image,name,className}) =>{

    return(
        
    <div className={`catItem ${className} cursor`}>      
        <img src={image}/>
    </div>
    )
}


export default HomeCat;