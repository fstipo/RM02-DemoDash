import React, { useState, useRef, useCallback } from 'react';
import { AgGridReact } from 'ag-grid-react';
import NoPage from '../../NoPage';
import Moment from 'moment';

// *Grid
import { gridColumnsTemplate } from "../data/gridColumnsTemplate"
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

// * useQuery
import { useQuery } from 'react-query';
import { getPeople } from '../../../api/apiPeople';

// * navigate
import { useNavigate } from "react-router-dom"
const gridColumns = gridColumnsTemplate;

const PeopleGrid = () => {
  const [columnDefs] = useState(gridColumns);
  const gridRef = useRef(null);
  const navigate = useNavigate();


  const {
    isLoading,
    data: people,
    error,
    isError,
  } = useQuery("people", getPeople, {
    select: people => people.map(el => {
      return {
        ...el, changedAt: Moment(el.changedAt).format("lll"),
      }
    }),
  });

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
      </div>
      <div
        className="bg-info ag-theme-alpine"
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
  </div >;

  // * RENDER
  return (
    <>
      {isLoading && <h1 className="text-center display-4">Loading...</h1>}
      {htmlTemplate}
      {isError && <NoPage error={error.message} />}
    </>
  );
};

export default PeopleGrid;




