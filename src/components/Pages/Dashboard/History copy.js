import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import TableMainRow from './TableMainRow';
import TableSelectDatesRow from './TableSelectDatesRow';
import "../../main.css"

const History = ({ history, id }) => {
    const [showRow, setShowRow] = useState(false);
    const [inputLabel, setInputLabel] = useState("all");

    // const datePickerHandler = () => {
    //     setShowDatePicker(true)
    // }

    // const selectAllHandler = () => {
    //     setShowDatePicker(false)
    // }

    return (
        <div className='mt-1 p-3 table-responsive'>
            <Table striped bordered hover className='p-4' >
                <thead>
                    <TableMainRow data={history} />
                    {/* <tr key="0">
                        {history ? Object.keys(history[0]).map((el, index) => <th className='text-center' key={index + 1}>{el}</th>) : null}
                    </tr> */}
                    {/* <tr className='btn-dates text-center'>
                        <th colSpan="7" >
                            <div className='d-flex justify-content-center align-items-center position-relative'>
                                <input id="all" className='btn fw-bold me-1' type='radio' name="date" onChange={selectAllHandler} defaultChecked />
                                <label className='me-5' htmlFor='all'>All</label>
                                <input id="in-moment" className='btn fw-bold me-1' type='radio' name="date" onChange={datePickerHandler} />
                                <label className='me-5 ' htmlFor='in-moment'>In moment</label>
                                <input id="select-dates" className='btn fw-bold me-1' type='radio' name="date" />
                                <label htmlFor='select-dates'>Select Dates</label>
                            </div>
                        </th>
                    </tr> */}
                    < TableSelectDatesRow />

                    {/* {showRow && <DatePickerTest userId={id} />} */}
                    {/* <DatePickerTest userId={id} /> */}
                </thead>
                <tbody>
                    {!showRow && history ? history.map((el, index) => <tr key={index + 1}>
                        {Object.entries(el).map(([key, value], index) => <td key={index + 1}>{value}</td>)}
                    </tr>) : null}
                </tbody>
            </Table>
        </div >
    );
}


export default History;





