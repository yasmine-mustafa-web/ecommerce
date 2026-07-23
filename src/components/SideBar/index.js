import { Slider, Stack, Text } from "@chakra-ui/react"
    const SideBar=()=>{
        

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
      <Slider.Root defaultValue={[30, 70]} thumbCollisionBehavior="push">
        <Slider.Label>Price Range</Slider.Label>
        <Slider.Control>
          <Slider.Track>
            <Slider.Range />
          </Slider.Track>
          <Slider.Thumbs />
        </Slider.Control>
      </Slider.Root>
      <Text color="fg.muted" textStyle="sm">
        Try dragging the thumbs together to see them push each other
      </Text>
    </Stack>
              </div><br/><br/>
               <div className="filteredBox ">
                <h6 className="fw-bold text-uppercase" style={{fontFamily:"'Dosis' , sans-serif"}}>product status</h6>
                <div className="scroll" >
                    <ul>
                        <li>
                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" role="switch" id="check"/>
                                <label className="form-check-label text-capitalize" htmlFor="check">in stock</label>
                              </div>
                        </li>
                          <li>
                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" role="switch" id="check"/>
                                <label className="form-check-label text-capitalize" htmlFor="check">on sale</label>
                              </div>
                        </li> 
                        </ul>
                        </div>
                        </div> <br/><br/>
                         <div className="filteredBox">
                <h6 className="fw-bold text-uppercase" style={{fontFamily:"'Dosis' , sans-serif"}}>brands</h6>
                <div className="scroll" >
                    <ul>
                        <li>
                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" role="switch" id="check"/>
                                <label className="form-check-label text-capitalize" htmlFor="check">in stock</label>
                              </div>
                        </li>
                          <li>
                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" role="switch" id="check"/>
                                <label className="form-check-label text-capitalize" htmlFor="check">on sale</label>
                              </div>
                        </li> 
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