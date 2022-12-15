import moment from 'moment';
import { Link } from 'react-router-dom';

function HomeCard({ home }) {
  // useEffect(() => {

  // }, []);
  return (
    <div className='home-card'>
      <h2 className='home-card--title'>{home.title}</h2>
      <h3 className='home-card--address'>{home.address}</h3>
      <p>
        last rent:{' '}
        <span>
          {moment(new Date(home.rentLastPaid.seconds * 1000)).format(
            'ddd, Do MMMM YYYY'
          )}
        </span>
      </p>

      <p>
        next rent:{' '}
        <span>
          {moment(new Date(home.rentNextPaid.seconds * 1000)).format(
            'ddd, Do MMMM YYYY'
          )}
        </span>
      </p>
      <div className='home-card--icons'>
        <Link to={`/maintenance/${home.id}`}>
          <i className='fa-solid fa-person-digging'></i>
        </Link>
        <Link to={`/rent/${home.id}`}>
          <i className='fa-solid fa-dollar-sign'></i>
        </Link>
        <Link to={`/legal/${home.id}`}>
          <i className='fa-solid fa-scale-balanced'></i>
        </Link>
        <Link to={`/urgent-papers/${home.id}`}>
          <i className='fa-solid fa-file-circle-exclamation'></i>
        </Link>
        <Link to='/signature/:id'>
          <i className='fa-solid fa-signature'></i>
        </Link>
        <Link to='/email/:id'>
          <i className='fa-solid fa-envelope'></i>
        </Link>
        <Link to='/phone'>
          <i className='fa-solid fa-phone'></i>
        </Link>
        <button>
          <i className='fa-solid fa-xmark'></i>
        </button>
        <Link to={`/homes/${home.id}`}>
          <i className='fa-solid fa-pencil'></i>
        </Link>
      </div>
    </div>
  );
}

export default HomeCard;
