import Moment from "moment";
import axios from "axios";


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