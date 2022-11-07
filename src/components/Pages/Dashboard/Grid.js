import React, { useState, useRef, useEffect, useContext } from 'react';
import Moment from 'moment';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import axios from 'axios';
import Modal from '../../UI/Modal';
import { Link } from 'react-router-dom';
import NoPage from '../NoPage';
import { useNavigate } from "react-router-dom";


const Grid = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState('');
  const [userId, setUserId] = useState("");
  const [userData, setUserData] = useState("");
  const [error, setError] = useState(false);
  const [errorObj, setErrorObj] = useState({});

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
      navigate(`/details/id/${selectedData[0].id}`, { replace: true });
      setUserId(() => selectedData[0].id)
    }
  };

  const gridRef = useRef(null);


  const gridColumns = [
    {
      field: 'id',
      sortable: 'true',
      filter: 'true',
      headerTooltip: 'User id',
      resizable: true,
      width: 90,
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
  const [columnDefs] = useState(gridColumns);



  const gridOptions = {
    pagination: true,
    paginationAutoPageSize: true,
  };

  const modalHandler = () => {
    const selectedNode = gridRef.current.api.getSelectedNodes();

    if (selectedNode.length) {
      const selectedData = selectedNode.map((node) => node.data);
      setSelectedUser(selectedData[0]);
      setSelectedUser((state) => {
        setShowModal(true);
        return state;
      });
    }
  };

  const htmlTemplate = <div className="container d-flex flex-column">
    <div>
      <div className="d-flex">

        <Link
          to="/create-user"
          className="d-block align-items-start p-2 mx-4"
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
      <Modal
        data={selectedUser}
        show={showModal}
        onHide={() => setShowModal(false)}
      />
      {error ? <NoPage error={errorObj.status} /> : htmlTemplate}

    </>
  );
};

export default Grid;
