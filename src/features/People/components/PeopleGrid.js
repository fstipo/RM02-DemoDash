import React, { useState, useRef, useCallback } from 'react';
import { AgGridReact } from 'ag-grid-react';
import NoPage from '../../NoPage';

import { usePeopleData } from '../../../hooks/usePeople';

// *Grid
import { gridColumnsTemplate } from "../data/gridColumnsTemplate"
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { ThreeDots } from "react-loader-spinner"
import { Circles } from "react-loader-spinner"

// * navigate
import { useNavigate } from "react-router-dom"
const gridColumns = gridColumnsTemplate;

const PeopleGrid = () => {
  const [columnDefs] = useState(gridColumns);
  const gridRef = useRef(null);
  const navigate = useNavigate();

  const onError = () => <div className='display-1'>Error</div>
  const {
    isLoading,
    data: people,
    error,
    isError,
  } = usePeopleData(onError);

  const onRowSelected = useCallback((event) => {
    const selectedUserId = event.node.data.id;
    navigate(`/people/details/${selectedUserId}`);
  }, []);

  // * GRID TEMPLATE
  const gridOptions = {
    pagination: true,
    paginationAutoPageSize: true,
  };

  const htmlTemplate = <div className="container d-flex flex-column card">
    <div>
      <div className="d-flex">
        <a
          className="btn btn-primary d-block align-items-start mb-2"
          role="button"
          type="button"
          onClick={() => {
            navigate("/people/create-user");
          }}
        >
          Create User
        </a>
        {isLoading && <span className='mx-5'><ThreeDots height={30}
          color="#ccc"
          ariaLabel="three-dots-loading" /></span>}
        {isError && <span className="ms-5 fw-bold">{error.message}</span>}
      </div>
      <div
        className="ag-theme-alpine"
        style={{ height: "700px", width: '100%' }}
      >

        <AgGridReact
          ref={gridRef}
          rowData={people}
          columnDefs={columnDefs}
          gridOptions={gridOptions}
          rowSelection="single"
          animateRows="true"
          onRowSelected={onRowSelected}
        ></AgGridReact>
      </div>
    </div>
  </div>;

  // * RENDER
  return (
    <>

      {htmlTemplate}
      {/* {htmlTemplate}
      {isError && <NoPage error={error.message} />} */}
    </>
  );
};

export default PeopleGrid;




