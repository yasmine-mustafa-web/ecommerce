import { Slider, Stack, Text } from "@chakra-ui/react"
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
        

        return(
            <div className="sidebar" style={{fontFamily:"'Dosis' , sans-serif"}}>
            <div className="filteredBox">
                <h6 className="fw-bold text-uppercase" style={{fontFamily:"'Dosis' , sans-serif"}}>product categories</h6>
                <div className="scroll" >
                    <ul>
                       {categoriesList.map(({ name, count }) => (
  <li key={name}>
    <div className="form-check form-switch d-flex justify-content-between">
      <div>
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id={`cat-${name}`}
          checked={selectedCategories.includes(name)}
          onChange={() => toggleCategory(name)}
        />
        <label className="form-check-label text-capitalize" htmlFor={`cat-${name}`}>
          {name}
        </label>
      </div>
      <span className="text-secondary">({count})</span>
    </div>
  </li>
))}
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
       max={3000}
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
                <img className="m-0 p-0" src="https://cdn.wowdeals.me/uploads/catalogues/issues/160/83124/cover/551x752/1714757737.jpg"/>
         
            </div>
            </div>
        )
    }

export default SideBar;