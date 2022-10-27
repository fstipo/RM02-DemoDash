import Moment from "moment";

export const dateFormat = (date) => Moment(date).format('DD.MM.YYYY, h:mm:ss A');


// IN moment
// https://es-demo.azurewebsites.net/v1/People/47854/history?inMoment=2022-09-07