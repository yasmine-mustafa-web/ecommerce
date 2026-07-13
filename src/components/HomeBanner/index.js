import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const HomeBanner =()=>{

return(
    <div className='HomeBanner col-log-9 col-md-12 p-3'>
<div id="carouselExampleDark" className="carousel carousel-dark slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHX4GSvPk9QYAK1nxqfvzfClPDhIYlzHnQLA6m9xkKkwlIPFAoRMweWKY&s=10" className="img-slider" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/5f/45/a0/caption.jpg?w=700&h=700&s=1" className="img-slider" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://packagingoftheworld.com/wp-content/uploads/2022/11/Holmes-per-22222-final-1-1024x651.jpg" className="img-slider" alt="..."/>
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