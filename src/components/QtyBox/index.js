import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { Button } from '@mui/material';
import { useState } from "react";


const QtyBox=({state})=>{

const [inputVal , setInputVal] = useState(1);

const minus=()=>{
    if(inputVal!==1 && inputVal>0 ){
        setInputVal(inputVal -1)
    }else{
        setInputVal(1);
    }
}

const plus=()=>{
    setInputVal(inputVal +1)
}
    return(
        <div className='qtyDrop d-flex align-items-center'>
                                    <button disabled={state=== 'out of stock'} onClick={minus}><FaMinus/></button>
                                    <input type='text' value={inputVal} readOnly/>

                                    <button onClick={plus} disabled={state=== 'out of stock'}><FaPlus/></button>
                            </div>
    )
}

export default QtyBox;