import { Slider, Stack, Text } from "@chakra-ui/react"
    const SideBar=({
  brandsList,
  selectedBrands,
  toggleBrand,
  selectedStatus,
  toggleStatus,
  priceRange=[0,1500],
  setPriceRange,
})=>{
        

        return(
            <div className="sidebar" style={{fontFamily:"'Dosis' , sans-serif"}}>
            <div className="filteredBox">
                <h6 className="fw-bold text-uppercase" style={{fontFamily:"'Dosis' , sans-serif"}}>product categories</h6>
                <div className="scroll" >
                    <ul>
                        <li>
                              <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" role="switch" id="switchCheckDefault"/>
                                <label class="form-check-label" htmlFor="switchCheckDefault">Hair</label>
                              </div>
                        </li>
                          <li>
                              <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" role="switch" id="switchCheckDefault"/>
                                <label class="form-check-label" htmlFor="switchCheckDefault">Hair</label>
                              </div>
                        </li>  <li>
                              <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" role="switch" id="switchCheckDefault"/>
                                <label class="form-check-label" htmlFor="switchCheckDefault">Hair</label>
                              </div>
                        </li>  <li>
                              <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" role="switch" id="switchCheckDefault"/>
                                <label class="form-check-label" htmlFor="switchCheckDefault">Hair</label>
                              </div>
                        </li>  <li>
                              <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" role="switch" id="switchCheckDefault"/>
                                <label class="form-check-label" htmlFor="switchCheckDefault">Hair</label>
                              </div>
                        </li>  <li>
                              <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" role="switch" id="switchCheckDefault"/>
                                <label class="form-check-label" htmlFor="switchCheckDefault">Hair</label>
                              </div>
                        </li>  <li>
                              <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" role="switch" id="switchCheckDefault"/>
                                <label class="form-check-label" htmlFor="switchCheckDefault">Hair</label>
                              </div>
                        </li>  <li>
                              <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" role="switch" id="switchCheckDefault"/>
                                <label class="form-check-label" htmlFor="switchCheckDefault">Hair</label>
                              </div>
                        </li>  <li>
                              <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" role="switch" id="switchCheckDefault"/>
                                <label class="form-check-label" htmlFor="switchCheckDefault">Hair</label>
                              </div>
                        </li>  <li>
                              <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" role="switch" id="switchCheckDefault"/>
                                <label class="form-check-label" htmlFor="switchCheckDefault">Hair</label>
                              </div>
                        </li>
                    </ul>
                  
                </div>
            </div><br/><br/>
              <div className="filteredBox">
                <h6 className="text-uppercase fw-bold">filter by price</h6>
                  <Stack gap="4" width="300px">
      <Slider.Root
       className="range"
       value={priceRange}
       min={0}
       max={1500}
     thumbCollisionBehavior="push"
      onValueChange={(details) => setPriceRange(details.value)}
      >
        <Slider.Label>Price Range</Slider.Label>
        <Slider.Control>
          <Slider.Track>
            <Slider.Range />
          </Slider.Track>
          <Slider.Thumbs />
        </Slider.Control>
      </Slider.Root>
      <p>Price : EGP {priceRange[0]} - EGP {priceRange[1]} </p>
    </Stack>
              </div><br/><br/>
               <div className="filteredBox ">
                <h6 className="fw-bold text-uppercase" style={{fontFamily:"'Dosis' , sans-serif"}}>product status</h6>
                <div className="scroll" >
                    <ul>
                        {["in stock " , 'out of stock ' , "on sale"].map((status) =>(
                            <li key={status}>
                             <div className="form-check">
                                <input className="form-check-input"
                                 type="checkbox" 
                                 role="switch"
                                 id={status}
                                 checked={selectedStatus.includes(status)}
                                 onChange={() => toggleStatus(status)}/>
                                <label className="form-check-label text-capitalize" htmlFor={status}>{status}</label>
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
                <img className="m-0 p-0" src="https://cdn.wowdeals.me/uploads/catalogues/issues/160/83124/cover/551x752/1714757737.jpg"/>
         
            </div>
            </div>
        )
    }

export default SideBar;