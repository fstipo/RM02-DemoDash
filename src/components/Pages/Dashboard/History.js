import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import TableMainRow from './TableMainRow'
import TableSelectDatesRow from './TableSelectDatesRow'
import "../../main.css"

const History = ({ history, id }) => {
    const [saveOption, setSaveOption] = useState("all")
    const [momentData, setMomentData] = useState("");
    const [selectDatesData, setSelectDatesData] = useState("");

    const getOptionHandler = (data) => setSaveOption(data);
    const getMomentDataHandler = data => setMomentData(data);
    const getSelectDatesDataHandler = data => setSelectDatesData(data);

    return (
        <>
            <TableSelectDatesRow onSave={getOptionHandler} id={id} onGetData={getMomentDataHandler} onSelectDatesData={getSelectDatesDataHandler} />
            <div className='table-responsive'>
                <Table striped bordered hover className='p-4' >
                    <thead>
                        <TableMainRow data={history} />
                    </thead>
                    <TableBody data={history} option={saveOption} inMomentData={momentData} selectDatesData={selectDatesData} />
                </Table>
            </div >
        </>
    );
}

export default History;

export const TableBody = ({ data, option, inMomentData, selectDatesData }) => {
    let bodyTemplate;
    if (option === "all") {
        bodyTemplate = <tbody>
            {data ? data.map((el, index) => <tr key={index + 1}>
                {Object.entries(el).map(([key, value], index) => <td key={index + 1}>{value}</td>)}
            </tr>) : null}
        </tbody>
    }

    if (option === "in-moment") {
        bodyTemplate = <tbody>
            {inMomentData ? inMomentData.map((el, index) => <tr key={index + 1}>
                {Object.entries(el).map(([key, value], index) => <td key={index + 1}>{value}</td>)}
            </tr>) : null}
        </tbody>
    }

    if (option === "select-dates") {
        bodyTemplate =

            <tbody>
                {selectDatesData ? selectDatesData.map((el, index) => <tr key={index + 1}>
                    {Object.entries(el).map(([key, value], index) => <td key={index + 1}>{value}</td>)}
                </tr>) : null}
            </tbody>
    }

    return (
        bodyTemplate
    )
}