  import { Button } from '@mui/material';
  import Dialog from '@mui/material/Dialog'
  import { RatingGroup } from "@chakra-ui/react";
  import { MdClose } from "react-icons/md";
  import { useState} from 'react';
  import React, { useEffect , useContext } from 'react';
  import Slide from '@mui/material/Slide';
  import { Carousel, IconButton, Image } from "@chakra-ui/react"
  import { LuChevronLeft, LuChevronRight } from "react-icons/lu"
  import QtyBox from '../../components/QtyBox';
  import { FaRegHeart } from "react-icons/fa";
  import { MdOutlineCompareArrows } from "react-icons/md";
  import { TiTick } from "react-icons/ti";
  import ZoomImage from '../../components/ZoomImg';
  import { useLocation, useParams , useNavigate } from "react-router-dom";

  const Transition = React.forwardRef(function Transition(props, ref) {
      return <Slide direction='up' ref={ref} {...props} />;
  })

  const Details =()=>{
    const {id} = useParams();
    const {state} = useLocation();
    const navigate = useNavigate();
    const context = useContext(MyContext);
    const [product, setProduct] = useState(state || null);
    const [quantity, setQuantity] = useState(1);
    const [loading, setLoading] = useState(!state);

    useEffect(() => {
    if (!id) return;
    setLoading(true);
    getProduct(id).then(res => {
      const p = res.data;
      setProduct({
        _id:p._id, name:p.name, images:p.images || [], description:p.description,
        brand:p.brand, price:p.price, type:p.type, MFG:p.MFG, life:p.life,
        rating:p.rating, isFeatured:p.isFeatured, countInStock:p.countInStock
        });
      }).catch(() => setProduct(null)).finally(() => setLoading(false));
    }, [id]);

    if (loading){
    return <div className="container py-5">Loading product...</div>;
    } 

    if(!state){
      return <h2>Product not found</h2>
    }


    const add = () => {
    if (product.countInStock > 0) {
      context.addToCart(product, quantity);
      navigate("/cart");
    }

     };

      return(
            <div className='p-5'>
              <div className='container'>
              <div className='row'>
                  <div className='col-12' style={{borderBottom:'1px solid rgba(0,0,0,0.1)' , padding:'10px 20px' , marginBottom:'20px'}}>
            
              
              <h4 className='fw-bold' >{product.name}</h4>
                </div>
              </div>
              <div className='row'>
                  <div className='col-12 col-md-4'>
              <div className='d-flex col-md-4 justify-content-between align-items-center' >
                  {product.brand &&(
                                  <p className='mt-2 pe-2 me-2 text-secondary' style={{borderRight:'1px solid rgba(0,0,0,0.1)', flexWrap:'nowrap' , whiteSpace:'nowrap'}}>Brand : <b>{product.brand}</b></p>

                  )}
              <li className="list-group-item">
            <RatingGroup.Root
              count={5}
              defaultValue={Number(rating) || 0}
              size="sm"
              colorPalette="yellow"
              readOnly
            >
              <RatingGroup.HiddenInput />
              <RatingGroup.Control />
            </RatingGroup.Root>
          </li>
          </div>
              </div>
              </div>
              <div className='row'>
                  <div className='col-12 col-md-6'>
              <Carousel.Root slideCount={product.images.length} maxW="2xl" gap="4">
        <Carousel.Control justifyContent="center" gap="4" width="full">
          <Carousel.PrevTrigger asChild>
            <IconButton size="xs" variant="outline">
              <LuChevronLeft />
            </IconButton>
          </Carousel.PrevTrigger>

          <Carousel.ItemGroup width="full">
            {product.images.map((item, index) => (
              <Carousel.Item key={index} index={index}>
                <ZoomImage src={item} />
              </Carousel.Item>
            ))}
          </Carousel.ItemGroup>

          <Carousel.NextTrigger asChild>
            <IconButton size="xs" variant="outline">
              <LuChevronRight />
            </IconButton>
          </Carousel.NextTrigger>
        </Carousel.Control>

        <Carousel.IndicatorGroup>
          {product.images.map((item, index) => (
            <Carousel.Indicator
              key={index}
              index={index}
              unstyled
              _current={{
                outline: "2px solid currentColor",
                outlineOffset: "2px",
              }}
            >
              <Image
                w="20"
                aspectRatio="16/9"
                src={item}
                objectFit="contain"
              />
            </Carousel.Indicator>
          ))}
        </Carousel.IndicatorGroup>
      </Carousel.Root>
                    </div>
                      <div className='col-12 col-md-6'>
                        <h4><sup>EGP</sup>{product.price}</h4>
                        <li className={`list-group-item ${
      product.countInStock > 0 ? 'instock' : 'outofstock'
        }`}>
          {product.countInStock > 0
      ? `In Stock: ${product.countInStock}`
      : "Out of Stock"}
        </li>
                    
<p>{product.description}</p>
<div className='d-flex align-items-center gap-3'>
      <QtyBox value={quantity} onChange={setQuantity}  max={product.countInStock}/>
      <Button  onClick={add} disabled={product.countInStock===0}
      style={{ textTransform:'none',zIndex:'3' , fontFamily:'"Inter", sans-serif' ,width:'125px' , maxWidth: '220px', fontSize:'.9rem' , height: '2.75rem' , borderRadius: '1.875rem', fontWeight:'500' }} disabled={countInStock === 0} className={`align items-center text-align-center btn bg-red text-white `}>Add to cart</Button>
</div>
<div className='my-5 d-flex align-items-center gap-2'>
  <button  type="button" className=" text-uppercase btn rounded-pill d-flex align-items-center py-2 px-2" style={{height: '2.0625rem' , border:'1px solid rgba(0,0,0,0.3)',    fontFamily: '"Dosis", sans-serif'
, fontSize:'14px'}}><FaRegHeart className='fs-6' /> &nbsp; add to wishlist</button>
    <button  type="button" className=" text-uppercase btn  d-flex align-items-center py-2 px-2" style={{height: '2.0625rem'   , fontFamily: '"Dosis", sans-serif'
    , fontSize:'14px'}}><MdOutlineCompareArrows /> &nbsp; add to compare</button>
</div>
      <div style={{borderBottom:'1px solid rgba(0,0,0,0.1)' , color:'#3e445a'}} className='align-items-center'>
      <div  >
      <p className='d-flex align-items-center mb-1'><TiTick className='fs-6 text-green' /> Type : {product.type}</p>
      </div>
      <div >
      <p className='d-flex align-items-center mb-1'><TiTick className='fs-6 text-green' /> MFG : {product.MFG}</p>   
      </div>
      <div >
      <p className='d-flex align-items-center'><TiTick className='fs-6 text-green' /> LIFE : {product.life}</p>    
      </div>
  </div>

</div>
</div>
</div>
          </div>
      )
  }

  export default Details;