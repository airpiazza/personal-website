import { Route, Routes, useLocation } from 'react-router-dom';
import { useBattery, useWindowSize } from 'react-use';
import './App.css';
import LockScreenPage from './pages/LockScreenPage';
import HomeScreenPage from './pages/HomeScreenPage';
import AppPage from './pages/AppPage';
import { AnimatePresence } from 'framer-motion';
import AnimatedCursor from 'react-animated-cursor';

const App = () => {
  const batteryState = useBattery();
  const location = useLocation();
  const windowSize = useWindowSize()

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
            <Route path='/' element={<LockScreenPage height={windowSize.height} batteryState={batteryState} />} />
            <Route path='/home' element={<HomeScreenPage height={windowSize.height} batteryState={batteryState} />} />
            <Route path='/about-me' element={<AppPage  height={windowSize.height} />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;