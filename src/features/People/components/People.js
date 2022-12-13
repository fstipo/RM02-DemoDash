import React from 'react';
import Header from '../../../components/UI/Header';
import PeopleGrid from "./PeopleGrid"


const People = (props) => {
  const saveIdHandler = (id) => {
    props.onSelectId(id);
  };
  return (
    <>
      <Header name="People" icon="people" />
      <PeopleGrid onSaveId={saveIdHandler} />
    </>
  );
};


export default People;