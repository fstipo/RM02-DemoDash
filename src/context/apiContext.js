import React, { createContext } from "react";
import axios from "axios";

// Axios
const url = "https://es-demo.azurewebsites.net/v1q"
const myApi = axios.create({ baseURL: url });


// Context
export const ApiContext = createContext(null)

export const ApiContextProvider = (props) => {
    const getPeople = async (url2) => {
        const response = await myApi.get(url2);
        return response.data;
    }

    const getId = data => data.id;
    const contextValue = {
        getPeople,
        getId
    }

    return (
        <ApiContext.Provider value={contextValue}>
            {props.children}
        </ApiContext.Provider>)

}










