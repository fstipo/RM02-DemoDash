import axios from "axios";
import { useQuery } from "react-query";

const url = "https://es-demo.azurewebsites.net/v1"

// const url = "https://jsonplaceholder.typicode.com"
const apiPeople = axios.create({ baseURL: url });

// export const getPeople = async () => {
//     const response = await apiPeople.get("/People");
//     return response.data;
// }

// export default apiPeople;




export const useUserDetails = (userId) => {
    const getUser = async ({ queryKey }) => {
        const id = queryKey[1];
        const response = await apiPeople.get(`/People/${id}`);
        return response.data;
    }
    return useQuery(["user-details", userId], getUser)

}