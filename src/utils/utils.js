import Moment from "moment";
import axios from "axios";


// * DATE FORMAT
export const dateFormat = (date) => Moment(date).format('DD.MM.YYYY, h:mm:ss A');

// * IN moment with id
export const getData = (id, date, fn) => {
    const url = `https://es-demo.azurewebsites.net/v1/People/${id}/history?inMoment=${date}`
    axios(url)
        .then(res => {
            res.data.map(el => el.changedAt = dateFormat(el.changedAt))
            fn(res.data);
        })
        .catch(err => console.error(err))
}

// * SELECT DATES
export const getSelectDatesData = (id, startDate, endDate, fn) => {
    const url = `https://es-demo.azurewebsites.net/v1/People/${id}/history?from=${startDate}&until=${endDate}`
    axios(url)
        .then(res => {
            res.data.map(el => el.changedAt = dateFormat(el.changedAt))
            fn(res.data);
        })
        .catch(err => console.error(err))
}

// * IN moment without id
export const getDataHistory = (date, fn) => {
    const url = `https://es-demo.azurewebsites.net/v1/People/history?inMoment=${date}`
    axios(url)
        .then(res => {
            res.data.map(el => el.changedAt = dateFormat(el.changedAt))
            fn(res.data);
        })
        .catch(err => console.error(err))
}

// https://es-demo.azurewebsites.net/v1/People/history?inMoment=2023-01-23T09%3A07%3A38.597Z
