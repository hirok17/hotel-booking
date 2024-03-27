import axios from "axios";
import { clearToken } from "./auth";

const axiosSecure =axios.create({
    baseURL: "http://localhost:5000",
    withCredentials:true
})

axiosSecure.interceptors.response.use(
    response=>response, 
    async error=>{
        if(
            error.response && 
            (error.response.status === 401 || error.response.status ===403)
        ){
            await clearToken();
            window.location.replace('/login');
        }
        return Promise.reject(error);
    }
    )
export default axiosSecure;