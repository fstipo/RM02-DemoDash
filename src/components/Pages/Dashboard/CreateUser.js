import React, { useState } from 'react';
import Header from '../../UI/Header';
import { Link } from 'react-router-dom';
import { Toast } from 'react-bootstrap'
import { useFormik } from 'formik';



// const onSubmit = (values) => console.log('Form data:', values);
const CreateUser = () => {
  // const [userName, setUserName] = useState("");
  // const [userID, setUserID] = useState("");
  // const [userSector, setUserSector] = useState("");
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

      // if (!values.email) {
      //   errors.email = 'Required';
      // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      //   errors.email = 'Invalid email format';
      // }

      if (!values.sector) {
        errors.sector = 'Required';
      }

      return errors;
    },
    // validateSchema,
    onSubmit: (values) => {
      // const userID = Math.floor(Math.random() * 1000000).toString();

      let newUser = {
        "id": values.id.toString(),
        // "id": "string",
        "name": values.name,
        "sector": values.sector,
        // "originalRevision": "string"
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

      <div className="container">
        <div className="row ms-5">
          <div className="col-12">
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
              <div className="row mb-5 gx-5">
                <div className="col-xl-8 mb-5 mb-xxl-10">
                  <div className="bg-secondary-soft px-4 py-3 rounded">
                    <div className="row g-3">
                      <h4 className="mb-4 mt-0">
                        User details
                      </h4>
                      <div className="col-md-12">
                        <label htmlFor="id" className="form-label">ID *</label>
                        <input
                          id="id"
                          name="id"
                          type="number"
                          className="form-control"
                          placeholder=""
                          aria-label="ID"
                          // readOnly="readonly"
                          // onChange={userIDHandler}
                          // onChange={formik.handleChange}
                          // value={formik.values.name}
                          // onBlur={formik.handleBlur}
                          {...formik.getFieldProps('id')}
                        />
                        {formik.touched.id && formik.errors.id ? (
                          <div className="error text-danger fw-bold">{formik.errors.id}</div>
                        ) : null}
                      </div>

                      <div className="col-md-12">
                        <label htmlFor="name" className="form-label">Name *</label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          className="form-control mb-3"
                          aria-label="Name"
                          // onChange={userNameHandler}
                          {...formik.getFieldProps('name')}
                        />
                        {formik.touched.name && formik.errors.name ? (
                          <div className="error text-danger fw-bold">{formik.errors.name}</div>
                        ) : null}
                      </div>

                      <div className="col-md-12">
                        <label htmlFor="sector" className="form-label">Sector *</label>
                        <input
                          id='sector'
                          name='sector'
                          type="text"
                          className="form-control"
                          aria-label="Sector"
                          // onChange={userSectorHandler}
                          {...formik.getFieldProps('sector')}
                        />
                        {formik.touched.sector && formik.errors.sector ? (
                          <div className="error text-danger fw-bold">{formik.errors.sector}</div>
                        ) : null}
                      </div>
                      <div className="col-md-12">
                        <label className="form-label">Changed At</label>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Date and time"
                          readOnly="readonly"
                        />
                      </div>
                      <div className="col-md-12">
                        <label className="form-label">Original Revision</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder=""
                          aria-label="Original Revision"
                          readOnly="readonly"
                        />
                      </div>
                      {/* <button type="button" className="btn btn-primary btn-lg" onClick={createUserHandler} > */}
                      {/* <button type="submit" className="btn btn-primary btn-lg" onClick={createUserHandler} > */}
                      <button type="submit" className="btn btn-primary btn-lg">
                        Create user
                      </button>
                      <Link type="button" className="btn btn-primary btn-lg" to={"/dashboard"}>
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

export default CreateUser;
