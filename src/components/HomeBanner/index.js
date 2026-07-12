import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const HomeBanner =()=>{

return(
    <div className='HomeBanner col-sm-9 p-3'>
<div id="carouselExampleDark" className="carousel carousel-dark slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqlWhfW7kSn6Oj5zhZkKiEf4d9tuZPUFhm3u5o6Sl2Su64JgoCagknEOs&s=10" className="img-slider img-slider" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="https://d28f3w0x9i80nq.cloudfront.net/restaurantImages/6575fdbe-1c21-4285-aac8-87ef38e520d2/banner_1596632384.jpg" className="img-slider" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://harveyslkn.com/pluto-images/a7173544-a5a8-426e-aa1f-1e982cd26115.jpg?w=1920&quality=60&fit=cover" className="img-slider" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
)}


    

export default HomeBanner;