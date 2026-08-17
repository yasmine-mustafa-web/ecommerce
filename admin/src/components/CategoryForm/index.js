import { useState , useContext } from "react";
import {createCategory} from "../../Services/categoryApi";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../App";
import toast from "react-hot-toast";
import { Input, Button } from "@chakra-ui/react";


const CategoryForm = () =>{
    const context = useContext(MyContext);
    const navigate = useNavigate();

    const [formData , setFormData ] = useState({
        name:"",
        image:""
    });
    const [preview , setPreview] =useState(null);
    const [submitting , setSubmitting] = useState(false);
    
    const handleChange =(e) => {
        const {name , value} = e.target;
        setFormData((pev) => ({...prev , [name]:value}))
    };

    const handleImageChange = (e) =>{
        const file = e.target.files[0];
        if(!file){
            return;
        }
        const reader = newFileReader();
        reader.onloadend = () =>{
            setFormData((prev) => ({...prev , image:reader.result}))
        };
        reader.readAsDataURL(false);
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();

        if(!formData.name.trim()){
            toast.error("Category name is required");
            return;
        }
        if (!formData.image){
            toast.error("Please select an image");
            return;
        }
        try{
            setSubmitting(true);
            await createCategory(formData);
            toast.success("Category Added Successfully");
            context.setAlertBox({
                open: true,
                error: false,
                msg: "category added successfully!"
            })
            navigate("/categories")
        }catch(err){
            toast.error(err.ressponse?.data?.message || "Something went wrong");
            context.setAlertBox({
                open:true,
                error:true,
                msg:"Category isn't added"
            })
        }finally{
            setSubmitting(false)
        }
    }
    return(
        <div className="card shadow border-0">
            <form className="card-body" onSubmit={handleSubmit}>
                <div className="row">
                    
                </div>
            </form> 
        </div>
    )
}