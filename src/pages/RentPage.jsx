import React from 'react';
import { useParams } from 'react-router-dom';

const RentPage = () => {
  const { id } = useParams();
  console.log(id);
  return <div>RentPage</div>;
};

export default RentPage;
