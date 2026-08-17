import { FaTrash } from "react-icons/fa";
import { useEffect, useState } from "react";
import { getCategories, deleteCategory } from "../../Services/categoryApi";
import toast from "react-hot-toast";

const CategoryTable =() =>{
    const [loading , setLoading] = useState(true);
    const [categories , setCategories ]= useState([]);
    useEffect(()=>{
        loadCategories();
    },[])

    const loadCategories = async()=>{
        try{
            setLoading(true);
            const res = await getCategories();
            setCategories(Array.isArray(res.data) ? res.data : []);
        }catch(err){
            toast.error(err.response?.data?.message || "Failed to load categories")
        }finally{
            setLoading(false);
        }
    }

    const handleDelete =async(id) => {
        const confirmDelete = window.confirm("Delete this category?")
        if(!confirmDelete) {
            return;
        }
        try{
            await deleteCategory(id);
            toast.success("Category deleted successfully");
            loadCategories();
        }catch(err){
            toast.error(err.response?.data?.message || "Failed to delete category")
        }
    }
    if (loading){
        return(
            <div className="text-center py-5">
                <h5>Loading Categories....</h5>
            </div>
        )
    }
    return(
        <div className="card shadow border-0">
            <div className="card-body">
                <table className="table table-hover align-middle">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.length === 0 ? (
                            <tr>
                                <td colSpan="3" className="text-center py-4">
                                    No categories found
                                </td>
                            </tr>
                        ):(
                            categories.map((item) =>(
                                <tr key={item.id || item._id}>
                                    <td>
                                        <img src={item.image} alt={item.name} width="60"/>
                                    </td>
                                    <td>{item.name}</td>
                                    <td>
                                        <div className="d-flex gap-2">
                                            <button className="btn btn-danger btn-sm"   onClick={() => handleDelete(item._id || item.id)}>
                                                <FaTrash />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default CategoryTable;