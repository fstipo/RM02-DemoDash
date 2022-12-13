import { useQuery } from "react-query";
import { request } from "../utils/axios";
import Moment from 'moment';
import axios from 'axios';

const fetchData = () => request({ url: "/Peoples" })

export const useFetchData = () => useQuery("people", fetchData)



//res =>  res.data.map(item => item.changedAt = Moment(item.changedAt).format('DD.MM.YYYY, h:mm:ss A'))




// res.data.map(item => item.changedAt = Moment(item.changedAt).format('DD.MM.YYYY, h:mm:ss A'))