import { FormControlLabel } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import { useState } from "react";
const SideBar=({
  brandsList,
  selectedBrands,
  toggleBrand,
  selectedState,
  toggleState,
  priceRange=[0,3000],
  setPriceRange,
   categoriesList = [],         
  selectedCategories = [],  
  toggleCategory,
})=>{
        

const [value,setValue]=useState([100,60000]);

        return(
              <div className="sidebar sticky-top" style={{fontFamily:"'Dosis' , sans-serif"}}>
              <div className="filteredBox">
                  <h6 className="fw-bold text-uppercase" style={{fontFamily:"'Dosis' , sans-serif"}}>product categories</h6>
                  <div className="scroll" >
                
                      <ul>
                        {categoriesList.map(({ name, count }) => (
                        <li key={name} className="mb-0 mt-0">
                        <div className="d-flex align-items-center">
                          <FormControlLabel
                          control={<Checkbox/>} 
                          label={name}
                          checked={selectedCategories.includes(name)}
                          onChange={() => toggleCategory(name)}
                            />
                          {/* <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            id={`cat-${name}`}
                            checked={selectedCategories.includes(name)}
                            onChange={() => toggleCategory(name)}
                          />
                          <label className="form-check-label text-capitalize" htmlFor={`cat-${name}`}>
                            {name}
                          </label> */}
                        
                        <span className="text-secondary ms-auto me-1">({count})</span>
                        </div>
                    </li>
                  ))}
                      </ul>
                    
                  </div>
              </div><br/><br/>
              <div className="filteredBox">
                <h6 className="text-uppercase fw-bold">filter by price</h6>
                <RangeSlider value={value} onInput={setValue} min={100} max={6000} step={100}/>
                <div className="d-flex py-2 priceRange">
                  <span>Price:<strong className="text-success"><sup>EGP</sup>{value[0]}</strong></span>
                  <span><span className="mx-1 fw-5"> — </span><strong className="text-success"><sup>EGP</sup>{value[1]}</strong></span>

                </div>
              </div><br/><br/>
               <div className="filteredBox ">
                <h6 className="fw-bold text-uppercase" style={{fontFamily:"'Dosis' , sans-serif"}}>product state</h6>
                <div className="scroll" >
                    <ul>
                        {["in stock " , 'out of stock ' , "on sale"].map((state) =>(
                            <li key={state}>
                             <div className="form-check">
                                <input className="form-check-input"
                                 type="checkbox" 
                                 role="switch"
                                 id={state}
                                 checked={selectedState.includes(state)}
                                 onChange={() => toggleState(state)}/>
                                <label className="form-check-label text-capitalize" htmlFor={state}>{state}</label>
                              </div>
                            </li>
                        ))}
                        </ul>
                        </div>
                        </div> <br/><br/>
                         <div className="filteredBox">
                <h6 className="fw-bold text-uppercase" style={{fontFamily:"'Dosis' , sans-serif"}}>brands</h6>
                <div className="scroll" >
                    <ul>
                        {brandsList.map(({name,count}) =>(
                            <li key={name}>
                                <div className="form-check">
                                <input className="form-check-input"
                                 type="checkbox"
                                role="switch"
                                id={name}
                                checked={selectedBrands.includes(name)}
                                onChange={() => toggleBrand(name)}
                                />
                                <label className="form-check-label text-capitalize" htmlFor={name}>{name}</label>
                              </div>
                               <span className="text-secondary">({count})</span>
                            </li>
                        ))}
                        </ul>
                              
        
                        </div>
                          </div><br/><br/>
                        <div className="w-100">
                <img className="m-0 p-0" src="https://cdn.wowdeals.me/uploads/catalogues/issues/160/83124/cover/551x752/1714757737.jpg" alt=""/>
         
            </div>
            </div>
        )
    }

export default SideBar;