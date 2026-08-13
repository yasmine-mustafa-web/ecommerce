import { useState , useEffect } from "react";
import { createProduct ,  getProduct, updateProduct } from "../../Services/productApi";
import toast from "react-hot-toast";
import { useNavigate , useParams  } from "react-router-dom";
import { getCategories } from "../../Services/categoryApi";
import {
    Input,
    Textarea,
    Select,
    Button
} from "@chakra-ui/react";

import ProductImageUpload from "../ProductImageUpload";


const ProductForm=()=>{
    const [categories, setCategories] = useState([]);
    const [images, setImages] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();


    const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: [],
    brand: "",
    price: "",
    countInStock: "",
    isFeatured: false
});

    useEffect(() => {
        loadCategories();
    }, []);

const loadCategories = async () => {
    try {
        const res = await getCategories();
        setCategories(res.data);
    } catch (err) {
        toast.error("Failed to load categories");
    }
};


useEffect(() => {
    if (id) loadProduct();
}, [id]);

const loadProduct = async () => {
    try {
        const res = await getProduct(id);
        setFormData(res.data);
        if (res.data.images) setImages(res.data.images);
    } catch (err) {
        toast.error("Failed to load product");
    }
};
   const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setFormData((prev) => ({ ...prev, [name]: checked }));
    };

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const payload = new FormData();
        payload.append("name", formData.name);
        payload.append("description", formData.description);
        formData.category.forEach((catId) => {
            payload.append("category", catId);
        });
        payload.append("brand", formData.brand);
        payload.append("price", formData.price);
        payload.append("countInStock", formData.countInStock);
        payload.append("isFeatured", formData.isFeatured);

        images.forEach((item) => {
            if (item instanceof File) {
            payload.append("images", item);
            }else if (typeof item === "string"){
                payload.append("existingImages" , item)
            }
        });

        if (id) {
            await updateProduct(id, payload);
            toast.success("Product Updated Successfully");
        } else {
            await createProduct(payload);
            toast.success("Product Added Successfully");
        }
        navigate("/products");
    } catch (err) {
        toast.error(err.response?.data?.message || "Something went wrong");
        console.log(err);
    }
};
    const handleChange = (e) => {   
     const {name , value} = e.target;

    setFormData((prev) => ({...prev , [name]:value}))
};
return (

<div className="card shadow border-0">

<form className="card-body"     onSubmit={handleSubmit}>

<div className="row">

<div className="col-md-6 mb-4">

<label>Product Name</label>

<Input
name="name"
value={formData.name}
onChange={handleChange}
/>

</div>


<div className="col-md-6 mb-4">

<label>Category</label>

<select
className="form-select"
name="category"
multiple
value={formData.category}
onChange={(e) => {
    const selected = Array.from(e.target.selectedOptions , (opt) => opt.value);
    setFormData((prev) => ({...prev , category:selected}))
}}
>
{categories.map((cat) => (
    <option key={cat._id || cat.id} value={cat._id || cat.id}>
        {cat.name}
    </option>
))}

</select>

</div>

<div className="col-md-6 mb-4">

<label>Brand</label>

<Input
name="brand"
value={formData.brand}
onChange={handleChange}
/>

</div>

<div className="col-md-4 mb-4">

<label>Price</label>

<Input
type="number"
name="price"
value={formData.price}
onChange={handleChange}
/>

</div>


<div className="col-md-4 mb-4">

<label>Stock</label>

<Input
type="number"
name="countInStock"
value={formData.countInStock}
onChange={handleChange}
/>

</div>

<div className="col-12 mb-4">

<label>Description</label>

<Textarea
name="description"
value={formData.description}
onChange={handleChange}
/>

</div>

<div className="col-12 mb-4">

<ProductImageUpload onImagesChange={setImages} />

</div>

<div className="col-12">

<Button
colorPalette="blue"
size="lg"
type="submit"
>
  {id ? "Update Product" : "Save Product"}
</Button>

</div>

</div>

</form>

</div>

);
}

export default ProductForm;