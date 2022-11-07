import React from 'react';

import Header from '../../UI/Header';
import Grid from './Grid';

const Dashboard = (props) => {
  const saveIdHandler = (id) => {
    props.onSelectId(id);
  };
  return (
    <>
      <Header name="People" icon="people" />
      <Grid onSaveId={saveIdHandler} />
    </>
  );
};


export default Dashboard;
