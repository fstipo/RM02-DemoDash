import React, { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { getSelectDatesData } from '../../../../../../utils/utils'

const SelectDatesFilterHistory = ({ id, onSave }) => {
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
        <div className='d-flex justify-content-start align-items-center'>
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
                    placeholderText=" Select start date"
                    onCalendarClose={getSelectDatesHandler}
                />
            </div>
            <div className='d-flex justify-content-start align-items-center'>
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
                    placeholderText=" Select end date"
                    onCalendarClose={getSelectDatesHandler}
                />
            </div>
        </div>
    );
}

export default SelectDatesFilterHistory



