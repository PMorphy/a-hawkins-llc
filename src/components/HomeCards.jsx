import HomeCard from './HomeCard';

const HomeCards = ({ homes }) => {
  return (
    <div className='home-cards'>
      {homes && homes.map((home) => <HomeCard key={home.id} home={home} />)}
    </div>
  );
};

export default HomeCards;
