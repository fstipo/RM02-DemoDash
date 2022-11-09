import Moment from "moment";
import axios from "axios";

// DATE FORMAT
export const dateFormat = (date) => Moment(date).format('DD.MM.YYYY, h:mm:ss A');


// IN moment
// https://es-demo.azurewebsites.net/v1/People/47854/history?inMoment=2022-09-07

export const getData = (id, date, fn) => {
    const url = `https://es-demo.azurewebsites.net/v1/People/${id}/history?inMoment=${date}`
    axios(url)
        .then(res => {
            res.data.map(el => el.changedAt = dateFormat(el.changedAt))
            fn(res.data);
        })
        .catch(err => console.error(err))
}

// SELECT DATES
// 'https://es-demo.azurewebsites.net/v1/People/41/history?from=2022-09-01T10%3A30%3A05.644Z&until=2022-12-05T10%3A30%3A05.644Z' \

export const getSelectDatesData = (id, startDate, endDate, fn) => {
    const url = `https://es-demo.azurewebsites.net/v1/People/${id}/history?from=${startDate}&until=${endDate}`
    axios(url)
        .then(res => {
            res.data.map(el => el.changedAt = dateFormat(el.changedAt))
            fn(res.data);
        })
        .catch(err => console.error(err))
}