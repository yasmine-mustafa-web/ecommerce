import api from "./api";

export const getProducts = () => {

    return api.get("/products");

};

export const getProduct = (id) => {

    return api.get(`/products/${id}`);

};

export const createProduct = (data) => {

    return api.post("/products", data ,  {
    headers: { "Content-Type": "multipart/form-data" }});

};

export const updateProduct = (id,data) => {

    return api.put(`/products/${id}`,data , {
    headers: { "Content-Type": "multipart/form-data" }
});

};

export const deleteProduct = (id) => {

    return api.delete(`/products/${id}`);

};