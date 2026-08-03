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
    const [products,setProducts]=useState([]);
    useEffect(()=>{

    loadProducts();

    },[]);
    const loadProducts=async()=>{

    try{
    setLoading(true);

    const res=await getProducts();

    setProducts(res.data);

    }

    catch(err){

    console.log(err);

    }
    finally {

            setLoading(false);

        }
    }
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

    {

    products.map(item=>(

    <tr key={item._id}>

    <td>

    <img
        src={item.images?.[0]}
        width="60"
        alt={item.name}
    />

    </td>

    <td>{item.name}</td>

    <td>{item.category?.name}</td>

    <td>${item.price}</td>

    <td>{item.countInStock}</td>

    <td>

    <div className="d-flex gap-2">

    <Link
    to={`/products/edit/${item._id}`}
    className="btn btn-primary btn-sm"
    >

    <FaEdit/>

    </Link>

    <button
    className="btn btn-danger btn-sm"
    onClick={()=>handleDelete(item._id)}
    >

    <FaTrash/>

    </button>

    </div>

    </td>

    </tr>

    ))

    }

    </tbody>

    </table>

    </div>

    </div>

    )

    }

    export default ProductTable;