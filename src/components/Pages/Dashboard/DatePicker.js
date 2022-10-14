import React, { useState, forwardRef } from 'react'
import Moment from "moment"
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const DatePickerComponent = ({ history }) => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [filterHistory, setFilterHistory] = useState("");
    const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
        <button className="btn btn-light" onClick={onClick} ref={ref}>
            {value}
        </button>
    ));

    const filteredHistory = () => {
        const filterD = history
            .map(data => Date.parse(data.changedAt))
            .filter(date => date >= startDate && date <= endDate)
            .map(num => new Date(num)).map(date => date.toISOString());
        console.log(filterD);

        const filterData = history.filter((data, index) => data.changedAt === filterD[index])
        console.log(filterData);
        setFilterHistory(filterData);
    }


    return (
        <>
            <tr>
                <td>Select dates:</td>
                <td colSpan="5" >
                    <span className='d-flex justify-content-center align-items-center'>
                        <label className='me-2'>Start:</label>
                        <DatePicker
                            className='mx-2'
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            selectsStart
                            startDate={startDate}
                            endDate={endDate}
                            customInput={<ExampleCustomInput />}
                            showTimeSelect
                            dateFormat="MMMM d, yyyy h:mm aa"
                        />
                        <label className='mx-2'>End:</label>
                        <DatePicker
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                            selectsEnd
                            startDate={startDate}
                            endDate={endDate}
                            minDate={startDate}
                            customInput={<ExampleCustomInput />}
                            showTimeSelect
                            dateFormat="MMMM d, yyyy h:mm aa"
                        />
                        <button className='btn' onClick={filteredHistory}>Select</button>
                    </span>
                </td>

            </tr >
            {filterHistory ? filterHistory.map((item, i) =>
                <tr key={i + 1}><td>{item.id}</td><td>{Moment(item.changedAt).format('DD.MM.YYYY, h:mm:ss A')}</td><td>{item.name}</td><td>{item.sector}</td><td>{item.deletedAt === item.changedAt ? "Yes" : "No"}</td></tr>) : null}


        </>

    )
}

export default DatePickerComponent;