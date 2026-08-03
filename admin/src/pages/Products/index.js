import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";

import ProductTable from "../../components/ProductTable";

const Products = () => {

    return(

        <div className="container-fluid">

            <div className="d-flex align-items-center justify-content-between mb-4">

                <h3>Products</h3>

                <Link to="/products/add">

                    <Button colorPalette="blue">

                        <FaPlus />

                        Add Product

                    </Button>

                </Link>

            </div>

            <ProductTable/>

        </div>

    )

}

export default Products;