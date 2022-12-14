import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

const HomeDetailsPage = ({ details }) => {
  const { id } = useParams();

  const titleRef = useRef();
  const addressRef = useRef();
  const cityRef = useRef();
  const stateRef = useRef();
  const zipRef = useRef();
  const totalCost = useRef();
  const purchasedOn = useRef();
  const soldOn = useRef();
  const imageUrl = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(addressRef.current.value);
  };

  useEffect(() => {
    if (details) console.log(details);
  }, [details]);

  return (
    <div className='details'>
      <h2 className='home-details--title'>
        {details ? "Update Home's Details" : 'Add New Home'}
      </h2>
      <form className='form' onSubmit={onSubmit}>
        <div className='title-address'>
          <div className='form-control'>
            <label htmlFor='title'>Title</label>
            <input type='text' ref={titleRef} id='title' />
          </div>
          <div className='form-control'>
            <label htmlFor='address'>Address</label>
            <input type='text' ref={addressRef} id='address' />
          </div>
        </div>
        <div className='city-state-zip'>
          <div className='form-control'>
            <label htmlFor='address'>City</label>
            <input type='text' ref={cityRef} id='city' />
          </div>
          <div className='form-control'>
            <label htmlFor='address'>State</label>
            <input type='text' ref={stateRef} id='state' />
          </div>
          <div className='form-control'>
            <label htmlFor='address'>Zip</label>
            <input type='text' ref={zipRef} id='zip' />
          </div>
        </div>
        <div className='details-button-control'>
          <button type='submit'>Add</button>
        </div>
      </form>
    </div>
  );
};

export default HomeDetailsPage;
