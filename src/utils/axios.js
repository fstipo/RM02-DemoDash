import axios from "axios";

const url = "https://es-demo.azurewebsites.net/v1"
const client = axios.create({ baseURL: url });

export const request = ({ ...options }) => {
    const onSuccess = data => data;
    const onError = error => error;
    return client(options).then(onSuccess).catch(onError);
}