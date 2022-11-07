import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import "./DatePicker.css"
import { getData } from '../../../utils/utils';

const DatePickerTest = ({ id }) => {
    const [date, setDate] = useState(new Date());
    const [newData, setNewData] = useState("");

    const onCalendarClose = () => {
        setNewData(getData(id, date.toISOString(), setNewData))
        console.log(id);
        console.log(newData);
    };

    const handleCalendarOpen = () => console.log(newData);
    return (
        <DatePicker
            className='date-picker'
            selected={date}
            onChange={(date) => setDate(date)}
            onCalendarClose={onCalendarClose}
            // onCalendarOpen={handleCalendarOpen}
            isClearable
            showTimeSelect
            dateFormat="d.MM.yyyy H:mm"
            placeholderText="I have been cleared!"
        // withPortal
        />

    )
}

export default DatePickerTest




// https://es-demo.azurewebsites.net/v1/People/41/history?inMoment=2022-10-01
// 2022-08-02T09:30:02.595Z
//



{/* 
<tbody>
                {newData ? newData.map((el, index) => <tr key={index + 1}>
                    {Object.entries(el).map(([key, value], index) => <td key={index + 1}>{value}</td>)}
                </tr>) : null}
            </tbody> */}
