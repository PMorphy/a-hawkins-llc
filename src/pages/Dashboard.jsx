import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { firestore } from '../firebase/config';
import { collection, onSnapshot } from 'firebase/firestore';
import HomeCards from '../components/HomeCards';

const Dashboard = () => {
  const [homes, setHomes] = useState([]);
  useEffect(() => {
    const coll = collection(firestore, 'homes');

    const unsubscribe = onSnapshot(coll, (snap) => {
      const allHomes = [];
      snap.forEach((home) => allHomes.push({ id: home.id, ...home.data() }));
      setHomes(allHomes);
    });

    return () => unsubscribe();
  }, []);
  return (
    <div className='dashboard'>
      <section className='homes-list'>
        <div className='home-list-top'>
          <h4 className='homes-list-title'>Homes</h4>
          <Link to='/homes/new'>+ New</Link>
        </div>

        <HomeCards homes={homes} />
      </section>

      <section className='news'>News</section>
      <section className='maintenance'>Maintenance</section>
      <section className='past-due-rents' homes={homes}>
        Past Due Rents
      </section>
    </div>
  );
};

export default Dashboard;
