import './App.css';
import Time from './molecules/Time'

const App = () => {
  return (
    <div className='App'>
      <Time 
        fontFamily='Pedestria-MVB' 
        WebkitTextStroke='1vw #5D137C' 
        fontSize='18vw' 
        color='#0087A2'
        fontWeight={700}
      />
    </div>
  );
}

export default App;