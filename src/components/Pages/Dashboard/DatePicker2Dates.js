import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const DatePicker2Dates = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
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
                />
            </div>
        </div>
    );
}

export default DatePicker2Dates