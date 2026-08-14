import ProductForm from "../../components/ProductForm";

const AddProduct = () => {

    return (

        <div className="container-fluid">

            <div className="d-flex justify-content-between align-items-center mb-4">

                <h3>Add New Product</h3>

            </div>

            <ProductForm />

        </div>

    );

};

export default AddProduct;