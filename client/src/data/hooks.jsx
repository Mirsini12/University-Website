import { useMutation, useQuery, QueryClient} from "react-query";
import axios from "axios";

export const queryClient = new QueryClient()

//journals
export function useFetchJournals(filter){
   return useQuery({
     queryKey:['journals',filter], 
    queryFn:()=> axios.get(`https://university-website.onrender.com/journals`,{params:{filter}})
    .then(res=>res.data)
   })
}

export function useCreateJournal(){
   
    return useMutation({
       mutationFn:(request)=>axios.post("https://university-website.onrender.com/journals",request),    
       onSuccess:()=> queryClient.invalidateQueries({queryKey:['journals']})
    })
}

export function useDeleteJournal(){
   return useMutation({
      mutationFn:(id)=>axios.delete(`https://university-website.onrender.com/journals/${id}`),
      onSuccess:()=> queryClient.invalidateQueries({queryKey:['journals']})
   })
}

export function useUpdateJournal(){
   return useMutation({
      mutationFn:(journal)=>axios.put(`https://university-website.onrender.com/journals/${journal._id}`,journal),
      onSuccess:()=>queryClient.invalidateQueries({queryKey:['journals']})      
   })
}