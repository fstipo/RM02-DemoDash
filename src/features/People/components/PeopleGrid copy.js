import React, { useState, useRef, useEffect, useContext } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import NoPage from '../../NoPage';
import Moment from 'moment';
import axios from 'axios';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import { gridColumnsTemplate } from "../data/gridColumnsTemplate"
const gridColumns = gridColumnsTemplate;

const PeopleGrid = (props) => {
  const [userId, setUserId] = useState("");
  const [userData, setUserData] = useState("");
  const [error, setError] = useState(false);
  const [errorObj, setErrorObj] = useState({});
  const [columnDefs] = useState(gridColumns);
  const gridRef = useRef(null);

  const navigate = useNavigate();
  useEffect(() => {
    axios.get('https://es-demo.azurewebsites.net/v1/People'
    ).then(res => {
      res.data.map(item => item.changedAt = Moment(item.changedAt).format('DD.MM.YYYY, h:mm:ss A'))
      setUserData(res.data);
      userDetailsHandler();
    })
      .catch(err => {
        setError(true);
        setErrorObj(err.response);
      });
  }, [userData, error])

  const userDetailsHandler = () => {
    const selectedNode = gridRef.current.api.getSelectedNodes();

    if (selectedNode.length) {
      const selectedData = selectedNode.map((node) => node.data);
      props.onSaveId(selectedData[0].id);
      window.localStorage.setItem("MY_TABLE_ID", JSON.stringify(selectedData[0].id))
      navigate(`/people/details/${selectedData[0].id}`, { replace: true });
      setUserId(() => selectedData[0].id)
    }
  };

  const gridOptions = {
    pagination: true,
    paginationAutoPageSize: true,
  };

  const htmlTemplate = <div className="container d-flex flex-column card">
    <div>
      <div className="d-flex">
        <Link
          to="/people/create-user"
          className="btn btn-primary d-block align-items-start mb-2"
          role="button"
          type="button"
        >
          Create User
        </Link>
      </div>
      <div
        className="bg-info ag-theme-alpine"
        style={{ height: 700, width: '100%' }}
      >
        <AgGridReact
          ref={gridRef}
          rowData={userData}
          columnDefs={columnDefs}
          gridOptions={gridOptions}
          rowSelection="single"
          animateRows="true"
          id={userId}
        ></AgGridReact>
      </div>
    </div>
  </div>

  return (
    <>
      {error ? <NoPage error={errorObj.status} /> : htmlTemplate}
    </>
  );
};

export default PeopleGrid;
