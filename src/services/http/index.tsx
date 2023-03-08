import axios from "axios";
import { useToken } from "../token";
//============================ 
const token=useToken().getTokenValue()
const Http=axios.create({
    baseURL:'http://127.0.0.1:8000/api/v1/',
    // withCredentials: true,
    headers:{
        'Content-type': 'application/json;multipart/form-data; boundary=<calculated when request is sent>',
        Accept: 'application/json',
        'Authorization':`Bearer ${ token }`        
    }
})
export {
    Http
}