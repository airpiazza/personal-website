import { useEffect } from 'react';
import { useBattery } from 'react-use';
import './App.css';
import LockScreenPage from './pages/LockScreenPage';

const App = () => {
  const batteryState = useBattery();

  useEffect(() => {
      console.log(batteryState);
  }, [batteryState]);

  return (
    <div className='App'>
      <LockScreenPage batteryState={batteryState} />
    </div>
  );
}

export default App;