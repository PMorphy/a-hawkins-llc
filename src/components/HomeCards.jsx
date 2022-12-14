import { useState, useEffect } from 'react';
import { firestore } from '../firebase/config';
import { collection, onSnapshot } from 'firebase/firestore';

import HomeCard from './HomeCard';

const HomeCards = () => {
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
    <div className='home-cards'>
      {homes && homes.map((home) => <HomeCard key={home.id} home={home} />)}
    </div>
  );
};

export default HomeCards;
