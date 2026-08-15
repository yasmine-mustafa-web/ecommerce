import { useNavigate } from "react-router-dom";

const HomeCat =({image ,id ,className , name}) =>{
    const navigate = useNavigate();

    return(
        
    <div className={`catItem ${className || ""} cursor`}
    onClick={() => navigate(`/listing/${id}`)} role="button" 
    tabIndex={0} onKeyDown={ e => e.key === "Enter" && navigate(`/listing/${id}`)}
    >      
        <img src={image} alt=""/>
    </div>
    )
}


export default HomeCat;