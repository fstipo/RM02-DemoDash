import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { useAddUser } from '../../../../hooks/usePeople';
import { useNavigate } from "react-router-dom"
import Header from '../../../../components/UI/Header';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { toastInitialOptions as toastOptions } from "../../../../data/data"
import { toastInitialOptions as toastOptions } from '../../data/toastOptions';

const PeopleCreateUser = () => {
  const navigate = useNavigate();
  const onError = (err) => {
    if (err.response.status === 400) {
      toast.error("Network error " + err.response.status, toastOptions);
    } else if (err.response.status === 500) {
      toast.error("Duplicate ID. Try another ID " + err.response.status, toastOptions);
    } else {
      toast.error(err.message + err.response.status, toastOptions);
    }
  }

  const onSuccess = () => {
    setTimeout(() => {
      navigate("/people");
    }, 6000);
    return toast.success("User profile is successfully created!", toastOptions);

  };

  const { mutate: addUser
  } = useAddUser();

  useEffect(() => {
    if (addUser.isSuccess) {
      setTimeout(() => {
        navigate("/people");
      }, 2000);
    }
  }, [addUser.isSuccess, navigate]);

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

      if (values.id !== "" && values.name !== "" && values.sector !== "") {
        addUser(newUser, { onError, onSuccess });
      }
    }
  });

  return (
    <>
      <Header name="People" icon="people" />
      <div className="container card">
        <div className="row justify-content-center align-items-center">
          {/* <ToastContainer /> */}
          <div className="col-sm-9  col-10">
            <form className="file-upload" onSubmit={formik.handleSubmit}>
              <div className="row my-2 gx-5">
                <div className="mb-2">
                  <div className="bg-secondary-soft px-4 py-3 rounded">
                    <div className="row g-4">
                      <h4 className="fw-bold">
                        <i className={`me-2 bi bi-person-plus`}></i>
                        <span>Create User</span>
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
                      <a type="button" className="btn btn-primary btn-lg" onClick={() => navigate("/people")}>
                        Back
                      </a>
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











