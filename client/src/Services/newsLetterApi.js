import api from "./api";

export const subscribeNewsLetter = (email) =>{
    return api.post("/newsLetter" , {email});
}

