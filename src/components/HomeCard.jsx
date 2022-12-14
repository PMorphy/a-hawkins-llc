function HomeCard({ home }) {
  const lastPaid = new Date(home.rentLastPaid.seconds * 1000);
  const nextPaid = new Date(home.rentNextPaid.seconds * 1000);

  // useEffect(() => {

  // }, []);
  return (
    <div className='home-card'>
      <h3 className='home-card--address'>{home.address}</h3>
      <p>
        last rent:
        <span>
          {lastPaid.getMonth()}, {lastPaid.getDate()}, {lastPaid.getFullYear()}
        </span>
      </p>

      <p>
        next rent:
        <span>
          {nextPaid.getMonth()}, {nextPaid.getDate()}, {nextPaid.getFullYear()}
        </span>
      </p>
    </div>
  );
}

export default HomeCard;
