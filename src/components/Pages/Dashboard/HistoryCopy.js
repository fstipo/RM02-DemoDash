import React, { useState } from 'react'
import TableSelectDatesRow from './TableSelectDatesRow'
import "../../main.css"

import { gridColumnsTemplate } from './MyGRID/gridColumns';

// NEW TABLE
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const gridColumns = gridColumnsTemplate;


const History = ({ history, id }) => {
    const [saveOption, setSaveOption] = useState("all")
    const [momentData, setMomentData] = useState("");
    const [selectDatesData, setSelectDatesData] = useState("");
    const [columnDefs] = useState(gridColumns);

    const getOptionHandler = (data) => setSaveOption(data);
    const getMomentDataHandler = data => setMomentData(data);
    const getSelectDatesDataHandler = data => setSelectDatesData(data);

    let tableTemplate;
    if (saveOption === "all") {
        tableTemplate = <div
            className="bg-info ag-theme-alpine"
            style={{ height: 350, width: '100%' }}
        >
            <AgGridReact
                rowData={history}
                columnDefs={columnDefs}
                animateRows="true"
            ></AgGridReact>
        </div>
    }
    if (saveOption === "in-moment") {
        tableTemplate = momentData ? <div
            className="bg-info ag-theme-alpine"
            style={{ height: 350, width: '100%' }}
        >
            <AgGridReact
                rowData={momentData}
                columnDefs={columnDefs}
                animateRows="true"
            ></AgGridReact>
        </div> : null;
    }

    if (saveOption === "select-dates") {
        tableTemplate = selectDatesData ? <div
            className="bg-info ag-theme-alpine"
            style={{ height: 350, width: '100%' }}
        >
            <AgGridReact
                rowData={selectDatesData}
                columnDefs={columnDefs}
                animateRows="true"
            ></AgGridReact>
        </div> : null;
    }

    return (
        <>
            {/* <div className='display-4 text-danger text-center'>HISTORY COPY</div> */}
            <div className='border p-3 mt-2'>
                <TableSelectDatesRow onSave={getOptionHandler} id={id} onGetData={getMomentDataHandler} onSelectDatesData={getSelectDatesDataHandler} />
            </div>
            <div className='table-responsive pt-1'>
                {tableTemplate}
            </div >
        </>
    );
}

export default History;


