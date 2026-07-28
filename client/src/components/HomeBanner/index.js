import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const HomeBanner =()=>{

return(
    <div className='container mt-3'>
      <div className='HomeBanner col-log-9 col-md-12 p-3'>
<div id="carouselExampleDark" className="carousel carousel-dark slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src="https://aqarmap.com.eg/en/advice/wp-content/uploads/2020/01/Pharmacy-in-Gozo.jpg" className="img-slider" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="https://anwar.store/cdn/shop/files/5-3.png?v=1783939635&width=1370" className="img-slider" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://png.pngtree.com/template/20200503/ourlarge/pngtree-blue-theme-online-medicine-sale-banner-psd-image_368915.jpg" className="img-slider" alt="..."/>
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
    </div>
)}


    

export default HomeBanner;