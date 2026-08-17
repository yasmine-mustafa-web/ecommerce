import CategoryTable from "../../components/CategoryTable";
import { Link } from "react-router-dom";

const Categories = () =>{
    return(
        <div>
        <div className="d-flex justify-content-between align-items-center mb-3">
            <h4>Categories</h4>
            <Link to="/categories/add"className="btn bg-red text-white" >
             + Add Category
            </Link>
        </div>
        <CategoryTable />
        </div>
    )
}

export default Categories;