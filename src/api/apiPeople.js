import axios from "axios";

const url = "https://es-demo.azurewebsites.net/v1"
const apiPeople = axios.create({ baseURL: url });

export const getPeople = async () => {
    const response = await apiPeople.get("/People");
    return response.data;
}

export default apiPeople;

