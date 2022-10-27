import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import "./DatePicker.css"

const DatePickerTest = () => {
    const [date, setDate] = useState(new Date());
    const handleCalendarClose = () => console.log("Calendar closed");
    const handleCalendarOpen = () => console.log("Calendar opened");
    return (
        <DatePicker
            className='date-picker'
            selected={date}
            onChange={(date) => setDate(date)}
            onCalendarClose={handleCalendarClose}
            onCalendarOpen={handleCalendarOpen}
            // isClearable
            showTimeSelect
            dateFormat="d.MM.yyyy H:mm"
        // placeholderText="I have been cleared!"
        // withPortal
        />
    )
}

export default DatePickerTest




