import './App.css';
import AppBody from './organisms/AppBody';
import text from './page-content/AboutMeContent'

const App = () => {
  return (
    <div className='App'>
      <AppBody imageName='memoji' alt='memoji of Nick' text={text} />
    </div>
  );
}

export default App;