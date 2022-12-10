import { Route, Routes, useLocation } from 'react-router-dom';
import { useBattery, useWindowSize } from 'react-use';
import './App.css';
import LockScreenPage from './pages/LockScreenPage';
import HomeScreenPage from './pages/HomeScreenPage';
import AppPage from './pages/AppPage';
import { AnimatePresence } from 'framer-motion';
import AnimatedCursor from 'react-animated-cursor';
import { useEffect } from 'react';
import { useState } from 'react';

const App = () => {
  const batteryState = useBattery();
  const location = useLocation();
  const windowSize = useWindowSize()
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    setHeight(window.innerHeight);
  }, [windowSize]);

  return (
    <div className='App'>
      <AnimatedCursor 
        innerSize={32}
        outerSize={32}
        innerScale={0.7}
        outerScale={2}
        color='93, 19, 124'
      />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path='/' element={<LockScreenPage height={height} batteryState={batteryState} />} />
            <Route path='/home' element={<HomeScreenPage height={height} batteryState={batteryState} />} />
            <Route path='/about-me' element={<AppPage />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;