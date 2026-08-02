import { IoSearchSharp } from "react-icons/io5";

const SearchBox=()=>{
    return(
        <div className="searchBox position-relative d-flex align-items-center">
            <IoSearchSharp className="ms-2"/>
            <input  type="text" placeholder="Search here..." />
        </div>
    )
}

export default SearchBox;