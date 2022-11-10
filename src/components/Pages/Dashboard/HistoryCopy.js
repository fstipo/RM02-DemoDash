import React, { useState } from 'react'
// import Table from 'react-bootstrap/Table';
// import TableMainRow from './TableMainRow'
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

    const getOptionHandler = (data) => setSaveOption(data);
    const getMomentDataHandler = data => setMomentData(data);
    const getSelectDatesDataHandler = data => setSelectDatesData(data);

    const [columnDefs] = useState(gridColumns);

    console.log(history);
    return (
        <>
            <div className='display-4 text-danger text-center'>HISTORY COPY</div>
            <TableSelectDatesRow onSave={getOptionHandler} id={id} onGetData={getMomentDataHandler} onSelectDatesData={getSelectDatesDataHandler} />
            <div className='table-responsive'>
                <div
                    className="bg-info ag-theme-alpine"
                    style={{ height: 350, width: '100%' }}
                >

                    <AgGridReact
                        // ref={gridRef}
                        rowData={history}
                        columnDefs={columnDefs}
                        // gridOptions={gridOptions}
                        // rowSelection="single"
                        animateRows="true"
                    // id={userId}
                    ></AgGridReact>


                </div>
                {/* <TableBody data={history} option={saveOption} inMomentData={momentData} selectDatesData={selectDatesData} /> */}
            </div >
        </>
    );
}

export default History;


// Table
{/* <Table striped bordered hover className='p-4' >
    <thead>
        <TableMainRow data={history} />
    </thead>
    <TableBody data={history} option={saveOption} inMomentData={momentData} selectDatesData={selectDatesData} />
</Table> */}

// // Table Body
// export const TableBody = ({ data, option, inMomentData, selectDatesData }) => {
//     let bodyTemplate;
//     if (option === "all") {
//         bodyTemplate =
//             <div
//                 className="bg-info ag-theme-alpine"
//                 style={{ height: '30%', width: '100%' }}
//             >

//                 <AgGridReact
//                     // ref={gridRef}
//                     rowData={history}
//                     columnDefs={columnDefs}
//                     // gridOptions={gridOptions}
//                     // rowSelection="single"
//                     animateRows="true"
//                 // id={userId}
//                 ></AgGridReact>

//             </div>


//         // <tbody>
//         //     {data ? data.map((el, index) => <tr key={index + 1}>
//         //         {Object.entries(el).map(([key, value], index) => <td key={index + 1}>{value}</td>)}
//         //     </tr>) : null}
//         // </tbody>
//     }

//     if (option === "in-moment") {
//         bodyTemplate = <tbody>
//             {inMomentData ? inMomentData.map((el, index) => <tr key={index + 1}>
//                 {Object.entries(el).map(([key, value], index) => <td key={index + 1}>{value}</td>)}
//             </tr>) : null}
//         </tbody>
//     }

//     if (option === "select-dates") {
//         bodyTemplate = <div
//             className="bg-info ag-theme-alpine"
//             style={{ height: '30%', width: '100%' }}
//         >

//             <AgGridReact
//                 // ref={gridRef}
//                 rowData={selectDatesData}
//                 columnDefs={columnDefs}
//                 // gridOptions={gridOptions}
//                 // rowSelection="single"
//                 animateRows="true"
//             // id={userId}
//             ></AgGridReact>

//         </div>


//     }

//     return (
//         bodyTemplate
//     )
// }