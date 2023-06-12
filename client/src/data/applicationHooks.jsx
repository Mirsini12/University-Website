import { useMutation, useQuery, QueryClient} from "react-query";
import axios from "axios";

export const queryClient = new QueryClient()

//applications
export function useFetchApplications(){
   return useQuery({
     queryKey:['applications'], 
    queryFn:()=> axios.get(`https://university-website.onrender.com/applications`)
    .then(res=>res.data)
   })
}

export function useCreateApplication(){   
    return useMutation({
       mutationFn:(request)=>axios.post("https://university-website.onrender.com/applications",request),    
       onSuccess:()=> queryClient.invalidateQueries({queryKey:['applications']})
    })
}