import { useMutation, useQuery, QueryClient } from "react-query";
import axios from "axios";

export const queryClient = new QueryClient()


const unauthorizedRequests=[{method : "post", url:"https://university-website.onrender.com/users/login"},{method : "get",url:`https://university-website.onrender.com/journals`},{method : "get",url:`https://university-website.onrender.com/vacancies`}]
axios.interceptors.request.use((config)=>{
 const unauthorizedRequest= unauthorizedRequests.find((item)=>item.method===config.method && item.url===config.url)
   if (unauthorizedRequest){
      return config 
   }
   config.headers={'Authorization': `Bearer ${localStorage.getItem('token')}`}
   return config;
}, (error)=>{})
 axios.interceptors.response.use((response)=>{return response},(error)=>{
   console.log(error);
   if(error.response.status===401){
      localStorage.removeItem('token')
      localStorage.removeItem('type')
      window.location='/admin/login'
      console.log("401");
   }
   return Promise.reject(error)
   // if (error.status===401){
   //  console.log(error);
   // }else {
   //    return error
   // }
 })

//users
export function useFetchAdmins() {
   return useQuery({
      queryKey:['users'],
      queryFn: () => axios.get(`https://university-website.onrender.com/users`)
         .then(res => res.data)
   })
}

export function useCreateAdmin() {  

   return useMutation({
      mutationFn: (request) => axios.post("https://university-website.onrender.com/users", request),
      onSuccess: () => queryClient.invalidateQueries({ queryKey: ['users'] })     
   })
}

export function useLogInAdmin() {
   return useMutation({
   
      mutationFn: (request) => axios.post("https://university-website.onrender.com/users/login", request),
      // onSuccess: () => queryClient.invalidateQueries({ queryKey: ['users'] })
   })
}

export function useDeleteAdmin() {
   return useMutation({
      mutationFn: (id) => axios.delete(`https://university-website.onrender.com/users/${id}`),
      // onSuccess:()=> queryClient.invalidateQueries({queryKey:['users']})
   })
}

export function useUpdateAdmin() {
   return useMutation({
      mutationFn: (admin) => axios.put(`https://university-website.onrender.com/users/${admin._id}`, admin),
   })
}