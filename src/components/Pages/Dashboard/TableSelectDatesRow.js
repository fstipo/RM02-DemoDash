import React, { useState } from 'react'
import DatePickerTest from './DatePickerTest';
import DatePicker2Dates from './DatePicker2Dates';

const TableSelectDatesRow = ({ id, onSave, onGetData }) => {
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [inputLabel, setInputLabel] = useState("all");


    const selectInMomentHandler = (e) => {
        setInputLabel(e.target.id);
        setShowDatePicker(true)
    }

    const selectAllHandler = (e) => {
        setInputLabel(e.target.id);
        setShowDatePicker(false)
    }

    const selectDatesHandler = e => {
        setInputLabel(e.target.id);
        setShowDatePicker(true)
    }

    const saveOptionHandler = () => {
        onSave(inputLabel)
    }

    const getMomentDataHandler = (data) => onGetData(data)

    const choseDatePicker = inputLabel === "in-moment" ? <DatePickerTest id={id} onSave={getMomentDataHandler} /> : <DatePicker2Dates />

    return (

        <div className='btn-dates text-center mb-3'>
            <div className='d-flex justify-content-end align-items-center position-relative'>
                <input id="all" className='btn fw-bold me-1' type='radio' name="date" onChange={selectAllHandler} defaultChecked onInput={saveOptionHandler} />
                <label className='me-5' htmlFor='all'>All</label>
                <input id="in-moment" className='btn fw-bold me-1' type='radio' name="date" onChange={selectInMomentHandler} onInput={saveOptionHandler} />
                <label className='me-5 ' htmlFor='in-moment'>In moment</label>
                <input id="select-dates" className='btn fw-bold me-1' type='radio' name="date" onChange={selectDatesHandler} onInput={saveOptionHandler} />
                <label htmlFor='select-dates'>Select Dates</label>
            </div>
            {showDatePicker && choseDatePicker}

        </div>

    )
}

export default TableSelectDatesRow