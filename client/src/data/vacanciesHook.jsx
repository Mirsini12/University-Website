import { useMutation, useQuery, QueryClient} from "react-query";
import axios from "axios";

export const queryClient = new QueryClient()

//vacancies
export function useFetchVacancies(){
   return useQuery({
     queryKey:['vacancies'], 
    queryFn:()=> axios.get(`https://university-website.onrender.com/vacancies`)
    .then(res=>res.data)
   })
}

export function useCreateVacancy(){   
    return useMutation({
       mutationFn:(request)=>axios.post("https://university-website.onrender.com/vacancies",request),    
       onSuccess:()=> queryClient.invalidateQueries({queryKey:['vacancies']})
    })
}

export function useDeleteVacancy(){
   return useMutation({
      mutationFn:(id)=>axios.delete(`https://university-website.onrender.com/vacancies/${id}`),
      // onSuccess:()=> queryClient.invalidateQueries({queryKey:['vacancies']})
   })
}

export function useUpdateVacancy(){
   return useMutation({
      mutationFn:(vacancy)=>axios.put(`https://university-website.onrender.com/vacancies/${vacancy._id}`,vacancy),
      // onSuccess:()=>queryClient.invalidateQueries({queryKey:['vacancies']})      
   })
}