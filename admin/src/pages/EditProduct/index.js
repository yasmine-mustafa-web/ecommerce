import ProductForm from "../../components/ProductForm";

const EditProduct = () => {
    return (
        <div className="container-fluid">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h3>Edit Product</h3>
            </div>
            <ProductForm />
        </div>
    );
};

export default EditProduct;