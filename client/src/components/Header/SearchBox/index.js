import {Button} from '@mui/material';
import { IoIosSearch } from "react-icons/io";
import {useState} from "react";
import { useNavigate } from 'react-router-dom';

const SearchBox= () =>{
    const [value , setValue] = useState("");
    const navigate = useNavigate();
    const submit = e => {
    e.preventDefault();
    const q = value.trim();
    navigate(`/listing/all${q ? `?search=${encodeURIComponent(q)}` : ""}`);
}
    return(
        <form className='headerSearchBar mx-3' onSubmit={submit}>
        <input type='search' placeholder='Search for products...' 
        aria-label="Search products"
        value={value}
        onChange={e => setValue(e.target.value)}
        />
        <Button><IoIosSearch /></Button>  
        </form>
)
}

export default SearchBox;