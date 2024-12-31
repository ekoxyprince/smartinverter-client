import axios from 'axios';
import Swal from 'sweetalert2';

const request = axios.create({
    baseURL:"https://smartinverter-server.onrender.com/api/v1"
})
request.interceptors.request.use((config)=>{
const token = localStorage.getItem("token")
 if(token){
     config.headers.Authorization = `Bearer ${token}`
 }
 return config
},
(error)=>{
    throw new Error(error)
})

class ApiService{
    constructor(){
        this.request = request
    }
   get=(url)=>{
    return this.request.get(url).then(resp=>resp.data).catch(error=>{
        console.log(error)
    })
}
   post=(url,data)=>{
    return this.request.post(url,data).then(resp=>resp.data).catch(error=>{
        console.log()
        Swal.fire({
            title:"Error",
            text:error.response?.data.message??error.message,
            toast:true,
            position:"top-end",
            icon:"error"
        })
        throw new Error(error)
    }) 
}
   patch = (url,data)=>{
    return this.request.patch(url,data).then(resp=>resp.data).catch(error=>{
        console.log(error)
    })
   }
}
export default new ApiService()