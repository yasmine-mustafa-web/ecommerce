import { FaMinus , FaPlus } from "react-icons/fa6";

const QtyBox=({value =1 , onChange , max = Infinity})=>{
 const set = n => {
    const next = Math.max(1 , Math.min(Number(max) || Infinity , Number(n) || 1));
    onChange?.(next);
 };

    return(
        <div className='qtyDrop d-flex align-items-center'>
            <button type='button' onClick={() => set(value-1)}><FaMinus/></button>
            <input type='text' value={value} readOnly/>
            <button onClick={() => set(value + 1)}><FaPlus/></button>
    </div>
    )
}

export default QtyBox;