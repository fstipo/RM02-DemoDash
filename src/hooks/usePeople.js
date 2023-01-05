import axios from "axios";
import Moment from 'moment';
import { useQuery } from "react-query";

// *URL
const url = "https://es-demo.azurewebsites.net/v1"
const apiPeople = axios.create({ baseURL: url });
const source = "/People"
// const source = "/Assets"

// * GET People 
export const usePeopleData = () => {
    const getPeople = async () => {
        const response = await apiPeople.get(source);
        return response.data;
    }
    return useQuery("people", getPeople, {
        select: people => people.map(el => {
            return {
                ...el, changedAt: Moment(el.changedAt).format("lll"),
            }
        }),
    });
}

// * GET People by ID
export const useUserDetails = (userId) => {
    const getUser = async ({ queryKey }) => {
        const id = queryKey[1];
        const response = await apiPeople.get(`${source}/${id}`);
        return response.data;
    }
    return useQuery(["user-details", userId], getUser)
}

// TODO
// TODO Post
// TODO Delete
// TODO UPDATE
