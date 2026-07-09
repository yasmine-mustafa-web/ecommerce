import {Button} from '@mui/material';
import { IoIosSearch } from "react-icons/io";


const SerachBox= () =>{
    return(
           <div className='headerSearchBar mx-3'>
                            <input type='text' placeholder='Search for products...' />
                          <Button><IoIosSearch /></Button>  
                         </div>
    )
}

export default SerachBox;