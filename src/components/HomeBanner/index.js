import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeBanner=()=>{

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

return(
    <div className="homeBanner">
          <Slider {...settings}>
            <div className="item">
                            <img src="https://www.fooodlove.com/images/jcogs_img/cache/012-close-up-view-of-freshly-baked-bakery_-_28de80_-_8782e36ca3e8764a9e4719edc333d3a48e3f4ae7.webp" className="w-100"/>

            </div>
          <div className="item">
            <img src="https://d1w7312wesee68.cloudfront.net/dudDTeuG9SCYSWgYmbOylq_K7Sqo0YPWrB6DqUX3yfY/ext:webp/quality:85/c:4960:4969:ce:-438:325/plain/s3://toast-sites-resources-prod/restaurantImages/f793eb64-e46b-498b-a84c-64cd84ba5acd/CREMA1131.jpg" className="w-100"/>
          </div>
          </Slider>
    </div>
)
}


export default HomeBanner;