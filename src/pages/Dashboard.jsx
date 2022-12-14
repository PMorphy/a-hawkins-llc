import React from 'react';
import HomeCards from '../components/HomeCards';

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <HomeCards />

      <section className='news'>News</section>
      <section className='maintenance'>Maintenance</section>
      <section className='past-due-rents'>Past Due Rents</section>
    </div>
  );
};

export default Dashboard;
