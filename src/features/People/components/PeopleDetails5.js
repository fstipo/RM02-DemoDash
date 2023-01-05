import React, { useEffect, useState } from 'react';
import Header from '../../../components/UI/Header';
import Moment from "moment"
import { Link } from 'react-router-dom';
import { Toast } from 'react-bootstrap'
import { useFormik } from 'formik';
import { dateFormat } from '../../../utils/utils';

import PeopleHistory from './History/DetailsHistory';


const PeopleDetails = ({ userId }) => {
  const [userData, setUserData] = useState("");
  const [showHistory, setShowHistory] = useState(false);
  const [userHistory, setUserHistory] = useState("");
  const [showDeleteToast, setShowDeleteToast] = useState(false);
  const [showUpdateToast, setShowUpdateToast] = useState(false);
  const showDeleteToastHandler = () => setShowDeleteToast(!showDeleteToast);
  const showUpdateToastHandler = () => setShowUpdateToast(!showUpdateToast);

  useEffect(() => {
    const data = window.localStorage.getItem("MY_TABLE_ID");
    if (data === null) setUserData(JSON.parse(data));
  }, [])

  useEffect(() => {
    const url = `https://es-demo.azurewebsites.net/v1/People`;
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();

        const user = json.filter((data) => userId === data.id);
        if (user) {
          setUserData((prevUser) => (prevUser = user[0]));
          window.localStorage.setItem("MY_TABLE_ID", JSON.stringify(userData))
        }
      } catch (error) {
        console.log('error:', error);
      }
    };

    fetchData();
  }, [userData]);


  const formik = useFormik({
    initialValues: {
      name: userData.name || "",
      id: userData.id || "",
      sector: userData.sector || "",
      changedAt: Moment(userData.changedAt).format('DD.MM.YYYY, h:mm:ss A') || "",
      originalRevision: userData.originalRevision || ""
    },

    enableReinitialize: true,


    validate: (values) => {
      let errors = {};

      if (!values.id) {
        errors.id = 'Required';
      }

      if (!values.name) {
        errors.name = 'Required';
      }

      if (!values.sector) {
        errors.sector = 'Required';
      }
      return errors;
    },
    onSubmit: (values) => {

      const newData = { ...userData, "name": userData.name ? formik.values.name : userData.name, "sector": userData.sector ? formik.values.sector : userData.sector };

      let options = {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newData)
      }
      setShowUpdateToast(!showUpdateToast)

      const response = fetch(`https://es-demo.azurewebsites.net/v1/People/${userData.id}`, options);
      response.then(res => res.json()).catch(err => console.log(err.message));

    }
  })

  const deleteHandler = () => {
    setShowDeleteToast(!showDeleteToast);
    const response = fetch(`https://es-demo.azurewebsites.net/v1/People/${userData.id}`, { method: "DELETE" });
    response.then(res => res.json()).then(data => console.log(data)).catch(err => console.log(err.message));
  }

  const historyHandler = () => {
    setShowHistory(!showHistory);
    fetch(`https://es-demo.azurewebsites.net/v1/People/${userData.id}/history?from=1.1.1990`, { method: "GET" })
      .then(res =>
        res.json())
      .then((data) => {
        data.map(el => el.changedAt = dateFormat(el.changedAt));
        return setUserHistory(data)
      })
      .catch(err => console.log(err.message));
  }

  return (
    <>
      <Header name="People" icon="people" />
      <div className="container card">
        <div className="row ms-5">
          <div className="col-12">
            <div className='position-relative me-5'>
              <Toast show={showDeleteToast} onClose={showDeleteToastHandler} delay={3000} autohide bg="danger text-white" className='position-absolute'>
                <Toast.Header className='fs-6'>
                  <i className="bi bi-trash me-3"></i>
                  <strong className="me-auto">Delete User Profile </strong>
                  <small className="text-muted">just now</small>
                </Toast.Header>
                <Toast.Body>User profile is successfully deleted!</Toast.Body>
              </Toast>
            </div>
            <div className='position-relative me-5'>
              <Toast show={showUpdateToast} onClose={showUpdateToastHandler} delay={3000} autohide bg="primary text-white" className='position-absolute'>
                <Toast.Header className='fs-6'>
                  <i className="bi bi-arrow-up-circle-fill me-3"></i>
                  <strong className="me-auto">Update User Profile </strong>
                  <small className="text-muted">just now</small>
                </Toast.Header>
                <Toast.Body>User profile is successfully updated!</Toast.Body>
              </Toast>
            </div>
            <form className="file-upload" onSubmit={formik.handleSubmit}>
              <div className="row mb-1 gx-5">
                <div className="col-xl-12 mb-1">

                  <div className="bg-secondary-soft px-4 py-3 rounded">
                    <div className="row g-3">

                      <div className="h-col col-md-3">
                        <label htmlFor='id' className="form-label">ID</label>
                        <input
                          id="id"
                          name="id"
                          type="text"
                          className="form-control"
                          aria-label="ID"
                          {...formik.getFieldProps('id')}
                          readOnly="readonly"
                        />
                      </div>
                      <div className="h-col col-md-3">
                        <label htmlFor='name' className="form-label">Name *</label>
                        <input
                          id="name"
                          name='name'
                          type="text"
                          className="form-control"
                          aria-label="Name"

                          {...formik.getFieldProps('name')}
                        />
                        {formik.touched.name && formik.errors.name ? (
                          <div className="error text-danger fw-bold">{formik.errors.name}</div>
                        ) : null}
                      </div>
                      <div className="h-col col-md-3">
                        <label htmlFor='sector' className="form-label">Sector *</label>
                        <input
                          id='sector'
                          name='sector'
                          type="text"
                          className="form-control"
                          aria-label="Sector"

                          {...formik.getFieldProps('sector')}
                        />
                        {formik.touched.sector && formik.errors.sector ? (
                          <div className="error text-danger fw-bold">{formik.errors.sector}</div>
                        ) : null}
                      </div>
                      <div className="h-col col-md-6">
                        {/* <div className="h-col col-md-12 col-sm-6"> */}
                        <label htmlFor='changed-at' className="form-label">Changed At</label>
                        <input
                          id='changed-at'
                          name='changed-at'
                          type="text"
                          className="form-control"
                          {...formik.getFieldProps('changedAt')}
                          readOnly="readonly"
                        />
                      </div>
                      <div className="h-col col-md-5">
                        {/* <div className="h-col col-md-12 col-sm-5"> */}
                        <label htmlFor="original-revision" className="form-label">Original Revision</label>
                        <input
                          id="original-revision"
                          name="original-revision"
                          type="text"
                          className="form-control"
                          {...formik.getFieldProps('originalRevision')}
                          readOnly="readonly"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="gap-5 d-flex justify-content-center text-center" >
                    <button type="button" className="btn btn-outline-danger" onClick={deleteHandler} >
                      Delete
                    </button>
                    <button type="submit" className="btn btn-outline-secondary">
                      Update
                    </button>
                    <button type="button" className="btn btn-outline-secondary" onClick={historyHandler} history={userHistory}>
                      History
                    </button>
                    <Link type="button" className="btn btn-outline-secondary" to={"/people"}>
                      Back
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div>
          {showHistory && <PeopleHistory history={userHistory} id={userId} />}
        </div>
      </div >
    </>
  );
};

export default PeopleDetails;
