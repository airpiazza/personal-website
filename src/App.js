import './App.css';
import sunsetBackground from './assets/sunset.jpg';

function App() {
  return (
    <div style={{
      backgroundImage: `url(${sunsetBackground})`,
      backgroundColor: 'black',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
    </div>
  );
}

export default App;