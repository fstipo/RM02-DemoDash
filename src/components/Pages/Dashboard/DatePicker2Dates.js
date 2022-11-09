import React, { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { getSelectDatesData } from '../../../utils/utils'

const DatePicker2Dates = ({ id, onSave }) => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [selectDatesData, setSelectDatesData] = useState("");

    const getSelectDatesHandler = () => {
        setSelectDatesData(getSelectDatesData(id, startDate.toISOString(), endDate.toISOString(), setSelectDatesData))
    }

    useEffect(() => {
        onSave(selectDatesData)
        console.log(selectDatesData);
    }, [selectDatesData])


    return (
        <div className='d-flex justify-content-end align-items-center'>
            <div className='d-flex'>
                <label className='me-2'>Start:</label>
                <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    isClearable
                    showTimeSelect
                    dateFormat="d.MM.yyyy H:mm"
                    placeholderText="I have been cleared!"
                />
            </div>
            <div className='d-flex'>
                <label className='ms-3 me-2'>End:</label>
                <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    isClearable
                    showTimeSelect
                    dateFormat="d.MM.yyyy H:mm"
                    placeholderText="I have been cleared!"
                    onCalendarClose={getSelectDatesHandler}
                />
            </div>
        </div>
    );
}

export default DatePicker2Dates




// "changedAt": "2022-09-01T10:30:05.644Z",
// 'https://es-demo.azurewebsites.net/v1/People/41/history?from=2022-09-01T10%3A30%3A05.644Z&until=2022-12-05T10%3A30%3A05.644Z' \


// xhr.js:213          GET https://es-demo.azurewebsites.net/v1/People/47854/history?from=Wed%20Aug%2031%202022%2007:00:00%20GMT+0200%20(Central%20European%20Summer%20Time)&until=Sun%20Sep%2004%202022%2007:00:00%20GMT+0200%20(Central%20European%20Summer%20Time) 400 (Bad Request)