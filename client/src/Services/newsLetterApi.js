import axios from "axios";
const API_URL = "https://ecommerce-atgp.vercel.app/api/newsLetter";
export const subscribeNewsLetter = (email) =>{
    return axios.post(API_URL , {email});
}