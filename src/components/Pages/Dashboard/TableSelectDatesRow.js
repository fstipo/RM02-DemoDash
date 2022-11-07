import React, { useState } from 'react'
import DatePickerTest from './DatePickerTest';
import DatePicker2Dates from './DatePicker2Dates';

const TableSelectDatesRow = ({ userId }) => {
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [inputLabel, setInputLabel] = useState("all");

    const selectInMomentHandler = (e) => {
        // setShowDatePicker(true)
        console.log(e.target.id);
        setInputLabel(e.target.id);
        setShowDatePicker(true)
    }

    const selectAllHandler = (e) => {
        // setShowDatePicker(false)
        console.log(e.target.id);
        setInputLabel(e.target.id);
        setShowDatePicker(false)
    }

    const selectDatesHandler = e => {
        console.log(e.target.id);
        setInputLabel(e.target.id);
        setShowDatePicker(true)
    }

    const choseDatePicker = inputLabel === "in-moment" ? <DatePickerTest id={userId} /> : <DatePicker2Dates />

    return (
        <>
            <tr className='btn-dates text-center'>
                <th colSpan="7" >
                    <div className='d-flex justify-content-center align-items-center position-relative'>
                        <input id="all" className='btn fw-bold me-1' type='radio' name="date" onChange={selectAllHandler} label={inputLabel} defaultChecked />
                        <label className='me-5' htmlFor='all'>All</label>
                        <input id="in-moment" className='btn fw-bold me-1' type='radio' name="date" onChange={selectInMomentHandler} label={inputLabel} />
                        <label className='me-5 ' htmlFor='in-moment'>In moment</label>
                        <input id="select-dates" className='btn fw-bold me-1' type='radio' name="date" onChange={selectDatesHandler} label={inputLabel} />
                        <label htmlFor='select-dates'>Select Dates</label>
                    </div>
                </th>
            </tr>
            <tr>
                <th colSpan="7" className='text-center'>
                    {showDatePicker && choseDatePicker}
                </th>
            </tr>
        </>
    )
}

export default TableSelectDatesRow