import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Toast } from 'react-bootstrap'
import { useFormik } from 'formik';
import Header from '../../../../UI/Header';

const PeopleCreateUser = () => {
  const [showCreateUserToast, setShowCreateUserToast] = useState(false);
  const showCreateUserToastHandler = () => setShowCreateUserToast(!showCreateUserToast);

  const formik = useFormik({
    initialValues: {
      id: '',
      name: '',
      sector: '',
    },

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
    // validateSchema,
    onSubmit: (values) => {
      let newUser = {
        "id": values.id.toString(),
        "name": values.name,
        "sector": values.sector,
      }
      console.log(`NEW USER: id=${values.id}, name=${values.name}, sector=${values.sector}`);
      let options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8"
        },
        body: JSON.stringify(newUser)
      }

      if (values.id !== "" && values.name !== "" && values.sector !== "") {
        setShowCreateUserToast(!showCreateUserToast)
        let response = fetch("https://es-demo.azurewebsites.net/v1/People", options);
        response.then(res => res.json()).then(d => console.log(d));
        console.log(newUser);
      }
    }
  });

  return (
    <>
      <Header name="Create User" icon="person-plus" />
      <div className="container card">
        <div className="row justify-content-center align-items-center">
          <div className="col-8  ">
            <div className='position-relative me-5'>
              <Toast show={showCreateUserToast} onClose={showCreateUserToastHandler} delay={3000} autohide bg="primary text-white" className='position-absolute'>
                <Toast.Header className='fs-6'>
                  <i className="bi bi-person-check-fill me-3"></i>
                  <strong className="me-auto">Create New User </strong>
                  <small className="text-muted">just now</small>
                </Toast.Header>
                <Toast.Body>User profile is successfully created!</Toast.Body>
              </Toast>
            </div>
            <form className="file-upload" onSubmit={formik.handleSubmit}>
              <div className="row my-2 gx-5">
                <div className="mb-2">
                  <div className="bg-secondary-soft px-4 py-3 rounded">
                    <div className="row g-4">
                      <h4 className="fw-bold">
                        User details
                      </h4>
                      <div >
                        <label htmlFor="id" className="form-label">ID *</label>
                        <input
                          id="id"
                          name="id"
                          type="number"
                          className="form-control"
                          placeholder=""
                          aria-label="ID"
                          {...formik.getFieldProps('id')}
                        />
                        {formik.touched.id && formik.errors.id ? (
                          <div className="error text-danger fw-bold">{formik.errors.id}</div>
                        ) : null}
                      </div>
                      <div>
                        <label htmlFor="name" className="form-label">Name *</label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          className="form-control"
                          aria-label="Name"
                          {...formik.getFieldProps('name')}
                        />
                        {formik.touched.name && formik.errors.name ? (
                          <div className="error text-danger fw-bold">{formik.errors.name}</div>
                        ) : null}
                      </div>

                      <div>
                        <label htmlFor="sector" className="form-label">Sector *</label>
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
                      <button type="submit" className="btn btn-primary btn-lg">
                        Create user
                      </button>
                      <Link type="button" className="btn btn-primary btn-lg" to={"/people"}>
                        Back
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PeopleCreateUser;
