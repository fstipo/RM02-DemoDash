import axios from "axios";

const url = "https://es-demo.azurewebsites.net/v1"

//  JSON PLACEHOLDER
// const url = "https://jsonplaceholder.typicode.com"
const apiPeople = axios.create({ baseURL: url });

export const getPeople = async () => {
    const response = await apiPeople.get("/People");
    // const response = await apiPeople.get("/Assets");
    // const response = await apiPeople.get("/People/history");

    //  JSON PLACEHOLDER
    // const response = await apiPeople.get("/users");
    // const response = await apiPeople.get("/photos");
    return response.data;
}

export default apiPeople;

