import React, { useState, useEffect } from 'react';
import Header from '../UI/Header';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';


import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

// import { getData } from '../../../utils/utils';

const gridColumns = [
  {
    field: 'id',
    sortable: 'true',
    filter: 'true',
    headerTooltip: 'User id',
    resizable: true,
    // width: 90,
  },
  {
    headerName: 'Full Name',
    field: 'name',
    sortable: 'true',
    filter: 'true',
    headerTooltip: 'Name',
    resizable: true,
  },
  {
    field: 'sector',
    sortable: 'true',
    filter: 'true',
    headerTooltip: 'Sector',
    resizable: true,
  },
  {
    field: 'changedAt',
    sortable: 'true',
    filter: 'true',
    headerTooltip: 'Changed at',
    resizable: true,
  },
  {
    field: 'originalRevision',
    sortable: 'true',
    filter: 'true',
    headerTooltip: 'Original Revision',
    resizable: true,
  },

];


const Customers = ({ onSave, id = 41 }) => {
  const [columnDefs] = useState(gridColumns);
  const [date, setDate] = useState(new Date());
  return <> <Header name="Customers" icon="person-circle" />
    <div className='container card '>
      <div><DatePicker
        className='date-picker'
        selected={date}
        onChange={(date) => {
          setDate(date)
        }}
        // onCalendarClose={
        //   getDataHandler
        // }
        isClearable
        showTimeSelect
        dateFormat="d.MM.yyyy H:mm"
        placeholderText="I have been cleared!"

      /></div>
      <AgGridReact columnDefs={columnDefs} />
    </div>
  </>;
};

export default Customers;




// export const DatePickerTest = ({ id, onSave }) => {
//   const [date, setDate] = useState(new Date());
//   const [newData, setNewData] = useState("");

//   const getDataHandler = () => {
//     setNewData(getData(id, date.toISOString(), setNewData))
//   };

//   useEffect(() => {
//     onSave(newData)
//   }, [newData])

//   return (
//     <>
//       <div className='text-end' >
//         <DatePicker
//           className='date-picker'
//           selected={date}
//           onChange={(date) => {
//             setDate(date)
//           }}
//           onCalendarClose={
//             getDataHandler
//           }
//           isClearable
//           showTimeSelect
//           dateFormat="d.MM.yyyy H:mm"
//           placeholderText="I have been cleared!"
//         />
//       </div>
//     </>
//   )
// }