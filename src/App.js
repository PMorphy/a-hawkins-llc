import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import FourZeroFourPage from './pages/FourZeroFourPage';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';

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

          <Route path='*' element={<FourZeroFourPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
