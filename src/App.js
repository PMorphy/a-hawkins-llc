import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import FourZeroFourPage from './pages/FourZeroFourPage';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import HomeMaintenance from './pages/HomeMaintenance';
import LegalPage from './pages/LegalPage';
import RentPage from './pages/RentPage';
import HomeDetailsPage from './pages/HomeDetailsPage';

function App() {
  return (
    <div>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<HomePage />} />

          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/signin' element={<SignInPage />} />
          <Route path='/admin' element={<Dashboard />} />
          <Route path='/homes/:id' element={<HomeDetailsPage />} />
          <Route path='/maintenance/:id' element={<HomeMaintenance />} />
          <Route path='/legal/:id' element={<LegalPage />} />
          <Route path='/rent/:id' element={<RentPage />} />

          {/* <Route path='/urgent-papers/:id' element={<Dashboard />} />
          <Route path='/signature/:id' element={<Dashboard />} /> */}

          <Route path='*' element={<FourZeroFourPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
