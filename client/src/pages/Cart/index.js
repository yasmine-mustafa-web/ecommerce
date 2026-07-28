import { Link } from "react-router-dom";
import { RatingGroup } from "@chakra-ui/react";
import QtyBox from "../../components/QtyBox";
import { IoIosClose } from "react-icons/io";


const Cart = ()=>{
    return(
        <>
        <section className="section cartPage  my-4" style={{ fontFamily: "'Dosis' , sans-serif"}}>
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                      <h2>Your Cart</h2>
                <p>There are <b>3</b> products in your cart</p>

                <div className="table-responsive"> 
                    <table className="table text-secondary">
                        <thead>
                        <tr className="tableRow text-secondary" >

                            <th width="45%">Product</th>
                            <th width="15%" style={{flexWrap:'nowrap' , whiteSpace:'nowrap'}}>Price</th>
                            <th width="20%">Quantity</th>
                            <th width="10%">Subtotal</th>
                            <th width="10%">Remove</th>
                        </tr>
                        </thead>
                        <tbody className="align-items-center">
                             <tr>
                            <td width="45%">
                                <Link to='/product/1'>
                                <div style={{width:'50% !important'}} className="cartItemImgWrapper d-flex align-items-center gap-5">
                                    <div className="imgWrapper">
                                        <img src="https://m.media-amazon.com/images/I/61dzGbM7EnL._AC_SX569_.jpg" className="w-100"/>
                                    </div>
                                <div className="infoTable px-3">
                                    <h6 className="mb-2">item item item item item item item item </h6>
                                     <li className="list-group-item">
                                              <RatingGroup.Root
                                                count={5}
                                                defaultValue={3}
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
                                </Link>
                            </td>
                            <td width="10%" className="text-secondary">
                                <div className="py-3">
                                <p><sup>EGP</sup>590</p> 
                                </div>
                            </td>
                            <td width="20%">
                                <div className="qtybox py-3"> 
                                    <QtyBox/> 
                                </div>
                               
                            </td>
                            <td width="10%">
                                <div className="py-3">
                                    love
                                    </div>
                            </td>
                          <td width="10%">
                            <div className="py-3">
                            <span className="remove text-secondary cursor"><IoIosClose/></span>
                            </div>
                          </td>
                        </tr>
                        
                        </tbody>
                       
                    </table>
                </div>
                </div>
                <div className="col-md-4">
                    <div className="card p-3 cartDetails">
                   <h5>Cart totals</h5> 
                   <hr/>
                   <div className="d-flex">
                    <h6>Subtotal</h6>
                    <p className="ms-auto"><sup>EGP</sup>1900</p>
                   </div>
                   <hr/>
                   <div className="d-flex align-items-center">
                        <h6>Shipment</h6>
                        <div className="d-flex flex-column ms-auto">
                            <div className="form-check">
  <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault1"/>
  <label className="form-check-label" htmlForor="radioDefault1">
    Arrive in 10 minutes:<sup>EGP</sup>30
  </label>
</div>
                            <div className="form-check">
  <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault1"/>
  <label className="form-check-label" htmlForor="radioDefault1">
    Arrive normally
  </label>
</div>
                        </div>
                       
                   </div>
                    <hr/>
                    <div className="d-flex">
                        <h6>Total</h6>
                        <h5 className="ms-auto"><sup>EGP</sup>1900</h5>
                    </div>
                    <hr/>
                    <button className="btn btn-danger w-100 rounded-1 text-white py-3 fw-bold">Proceed to checkout</button>
                    </div>
                </div>
              </div>
            </div>
        </section>
        </>
    )
}

export default Cart;