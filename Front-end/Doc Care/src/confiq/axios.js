import axios from "axios";

export const customAxios=axios.create({
    // baseURL:"http://localhost:9876",
    baseURL:"https://doc-care-back-end.onrender.com"
})