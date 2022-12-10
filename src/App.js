import { Route, Routes, useLocation } from 'react-router-dom';
import { useBattery } from 'react-use';
import './App.css';
import LockScreenPage from './pages/LockScreenPage';
import HomeScreenPage from './pages/HomeScreenPage';
import AppPage from './pages/AppPage';
import { AnimatePresence } from 'framer-motion';

const App = () => {
  const batteryState = useBattery();
  const location = useLocation();

  return (
    <div className='App'>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path='/' element={<LockScreenPage batteryState={batteryState} />} />
            <Route path='/home' element={<HomeScreenPage batteryState={batteryState} />} />
            <Route path='/about-me' element={<AppPage />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;