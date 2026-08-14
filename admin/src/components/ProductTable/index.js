    import { Link } from "react-router-dom";
    import { FaEdit, FaTrash } from "react-icons/fa";
    import { useEffect,useState } from "react";
    import {
        getProducts,
        deleteProduct
    } from "../../Services/productApi";

    import toast from "react-hot-toast";

    const ProductTable=()=>{
    const [loading, setLoading] = useState(true);
    const [products,setProducts] = useState([]);

    useEffect(()=>{
     loadProducts();
    },[]);


      const loadProducts=async()=>{
        try{
        setLoading(true);
        const res=await getProducts();
        setProducts(Array.isArray(res.data) ? res.data : []);  
        } catch (err) {
         toast.error( err.response?.data?.message ||"Failed to load product");
        }finally {
        setLoading(false);
        }
    }
    const handleDelete = async (id) => {

        const confirmDelete = window.confirm(
            "Delete this product?"
        );

        if (!confirmDelete) return;

        try {
            await deleteProduct(id);
            toast.success("Product deleted successfully");
            loadProducts();
        } catch (err) {
            toast.error(
                err.response?.data?.message || "Failed to delete product"
            );
        }

    }; 

    const renderCategories = (category) => {
    if (!category) return "N/A";

    if (Array.isArray(category)) {
      if (category.length === 0) return "N/A";
      return category
        .map((cat) => (typeof cat === "object" ? cat.name : cat))
        .join(", ");
    }

    return typeof category === "object" ? category.name : category;
  };


    if (loading) {

            return (
                <div className="text-center py-5">
                    <h5>Loading products...</h5>
                </div>
            );

        }


    return(

    <div className="card shadow border-0">

    <div className="card-body">

    <table className="table table-hover align-middle">

    <thead>

    <tr>

    <th>Image</th>

    <th>Name</th>

    <th>Category</th>

    <th>Price</th>

    <th>Stock</th>

    <th>Actions</th>

    </tr>

    </thead>

    <tbody>
        {products.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center py-4">
                  No products found.
                </td>
              </tr>
            ) : (


    products.map((item)=>(

    <tr key={item._id || item.id}>

    <td>

    <img
        src={item.images?.[0]}
        width="60"
        alt={item.name}
    />

    </td>

    <td>{item.name}</td>

    <td>{renderCategories(item.category)}</td>

    <td><sup>EGP</sup>{item.price}</td>

    <td>{item.countInStock}</td>

    <td>

    <div className="d-flex gap-2">

  

    <button
    className="btn btn-danger btn-sm"
    onClick={()=>handleDelete(item._id || item.id)}
    >

    <FaTrash/>

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

    export default ProductTable;