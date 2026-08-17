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
        setFormData((prev) => ({...prev , [name]:value}))
    };

    const handleImageChange = (e) =>{
        const file = e.target.files[0];
        if(!file){
            return;
        }
        const reader = new FileReader();
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
            toast.error(err.response?.data?.message || "Something went wrong");
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
                    <div className="col-md-6 mb-4">
                        <label>Category Name</label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                    </div>
                         <div className="col-md-6 mb-4">
                        <label>Image</label>
                        <Input
                          accept="image/*"
                          type="file"
                          onChange={handleImageChange}
                        />
                    </div>
                    {preview && (
                        <div className="col-12 mb-4">
                            <img 
                            alt="preview"
                            src={preview}
                            className="rounded"
                            width="120"
                            />
                        </div>
                    )}
                    <div className="col-12">
                     <Button size="lg" type="submit" isLoading={submitting}
                      className="btn bg-red rounded-4 text-white">
                        Save Category
                     </Button>
                    </div>
                </div>
            </form> 
        </div>
    )
}

export default CategoryForm;