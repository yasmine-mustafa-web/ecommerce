import { useNavigate } from "react-router-dom";

const HomeCat =({image ,id ,className}) =>{
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/listing/${id}`)
    }
    return(
        
    <div className={`catItem ${className || ""} cursor`}
    onClick={handleClick}
    >      
        <img src={image}/>
    </div>
    )
}


export default HomeCat;