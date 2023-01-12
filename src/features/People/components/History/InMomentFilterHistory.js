import React, { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { getData } from '../../../../utils/utils';
import { useParams } from 'react-router-dom';

const InMomentFilterHistory = ({ onSave }) => {
    const [date, setDate] = useState(new Date());
    const [newData, setNewData] = useState("");
    const { id } = useParams();

    const getDataHandler = () => {
        setNewData(getData(id, date.toISOString(), setNewData))
    };

    useEffect(() => {
        onSave(newData)
    }, [newData])

    return (

        <div className='d-flex text-start justify-content-start align-items-center' >
            <div className='d-flex'>
                <DatePicker
                    selected={date}
                    onChange={(date) => {
                        setDate(date)
                    }}
                    onCalendarClose={
                        getDataHandler
                    }
                    showTimeSelect
                    dateFormat="d.MM.yyyy H:mm"
                    placeholderText=" Select date"
                    isClearable
                />
            </div>
        </div>

    )
}

export default InMomentFilterHistory








