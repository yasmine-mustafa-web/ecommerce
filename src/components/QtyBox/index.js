import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { Button } from '@mui/material';


const QtyBox=()=>{
    return(
        <div className='qtyDrop d-flex align-items-center'>
                                    <button><FaMinus/></button>
                                    <input type='text'/>
                                    <button><FaPlus/></button>
                            </div>
    )
}

export default QtyBox;