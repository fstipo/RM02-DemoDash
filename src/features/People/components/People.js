import React from 'react';

import Header from '../../../components/UI/Header';
import PeopleGrid from "./PeopleGrid"

const People = () => {
  return (
    <>
      <Header name="People" icon="people" />
      <PeopleGrid />
    </>
  );
};

export default People;
