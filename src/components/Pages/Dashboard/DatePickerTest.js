import React, { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import "./DatePicker.css"
import { getData } from '../../../utils/utils';

const DatePickerTest = ({ id, onSave }) => {
    const [date, setDate] = useState(new Date());
    const [newData, setNewData] = useState("");

    const getDataHandler = () => {
        setNewData(getData(id, date.toISOString(), setNewData))
        console.log("Spremla ja");
    };

    useEffect(() => {
        onSave(newData)
    }, [newData])



    return (
        <>
            <div className='text-end' >
                <DatePicker
                    className='date-picker'
                    selected={date}
                    onChange={(date) => {
                        setDate(date)
                    }}
                    onCalendarClose={
                        getDataHandler
                    }

                    isClearable
                    showTimeSelect
                    dateFormat="d.MM.yyyy H:mm"
                    placeholderText="I have been cleared!"
                />
            </div>

        </>
    )
}

export default DatePickerTest




// https://es-demo.azurewebsites.net/v1/People/41/history?inMoment=2022-10-01
// 2022-08-02T09:30:02.595Z
//





{/* <tbody>
{newData ? newData.map((el, index) => <tr key={index + 1}>
    {Object.entries(el).map(([key, value], index) => <td key={index + 1}>{value}</td>)}
</tr>) : null}
</tbody> */}