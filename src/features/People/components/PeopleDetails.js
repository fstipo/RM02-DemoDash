import React, { useState } from 'react'
import { useParams, useNavigate } from "react-router-dom"
import { useFormik } from 'formik';
import Moment from "moment"
import DetailsHistory from './History/DetailsHistory';
import Header from '../../../components/UI/Header';
import { toast } from 'react-toastify';
import { toastInitialOptions as toastOptions } from '../data/toastOptions';
import { useUserDetails } from '../../../hooks/usePeople';
import { useHistoryUserDetails } from '../../../hooks/usePeople';
import { useRemoveUser } from '../../../hooks/usePeople';
import { useUpdateUser } from '../../../hooks/usePeople';


const PeopleDetails = () => {
  const [showHistory, setShowHistory] = useState(false);
  // const [userHistory, setUserHistory] = useState("");

  // *Navigate
  const { id } = useParams();
  const navigate = useNavigate()

  const onError = (err) => toast.error(err?.message, toastOptions);
  const deleteUser = () => toast.success("User profile is successfully deleted!", toastOptions);
  const toastUpdate = () => toast.info("User profile is updated!", toastOptions);
  const historyToast = () => toast.success("HISTORY!!!", toastOptions);

  // *React Query
  const { data: people } = useUserDetails(id, onError);
  const { data: historyDetails, refetch } = useHistoryUserDetails(id, historyToast, onError);
  const { mutateAsync: updateUser } = useUpdateUser(id, toastUpdate, onError);
  const { mutateAsync: removeUser } = useRemoveUser(id, deleteUser, onError);

  const deleteHandler = () => {
    setTimeout(() => {
      navigate("/people");
    }, 6000);
    removeUser({ deleteUser, onError })
  }

  const historyHandler = () => {
    setShowHistory(!showHistory);
    if (!showHistory) {
      refetch();
    }
  };
  const formik = useFormik({
    initialValues: {
      name: people?.name || "",
      id: people?.id || "",
      sector: people?.sector || "",
      changedAt: Moment(people?.changedAt).format('DD.MM.YYYY, h:mm:ss A') || "",
      originalRevision: people?.originalRevision || ""
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
    onSubmit: () => {
      const newData = {
        ...people,
        "name": people.name ? formik.values.name : people.name,
        "sector": people.sector ? formik.values.sector : people.sector
      };
      updateUser(newData, { toastUpdate, onError })
    }
  }
  )

  return (
    <div>
      <Header name="People" icon="people" />

      <div className="container card">
        <div className="row ms-5">
          <div className="col-12">

            <form className="file-upload" onSubmit={formik.handleSubmit}>
              <div className="row mb-1 gx-5">
                <div className="col-xl-12">
                  <h4 className="fw-bold">
                    <i className={`me-2 bi bi-cloud-download`}></i>
                    <span>User Details</span>
                  </h4>
                  <div className="bg-secondary-soft px-4 py-3 rounded">

                    <div className="row g-3">
                      <div className="h-col col-xl-3">
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
                      <div className="h-col col-xl-3">
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
                      <div className="h-col col-xl-3">
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
                      <div className="h-col col-xl-6">
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
                      <div className="h-col col-xl-4">
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
                  <div className="gap-lg-5 d-flex justify-content-center text-center gap-md-3" >
                    <button type="button" className="btn btn-outline-danger" onClick={deleteHandler} >
                      Delete
                    </button>
                    <button type="submit" className="btn btn-outline-secondary">
                      Update
                    </button>
                    <button type="button" className="btn btn-outline-secondary" onClick={historyHandler} history={historyDetails}>
                      History
                    </button>
                    <button type="button" className="btn btn-outline-secondary" onClick={
                      () => navigate("/people")}>
                      Back
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div>
          {showHistory && <DetailsHistory history={historyDetails} id={id} />}
        </div>
      </div >
    </div>
  )
}

export default PeopleDetails