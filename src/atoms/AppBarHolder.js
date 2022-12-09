import appBar from '../assets/appBar.png'
import '../stylesheets/AppBarHolder.css';

const AppBarHolder = () => {
    return (
        <img 
            className='app-bar-holder'
            style={{
                display: 'block',
                maxWidth: 'calc((10vw + 25.7px) * 3)',
                height: 'auto',
                marginTop: '3vw',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginBottom: '1vw'
            }}
            alt='app bar'
            src={appBar}
        />
    );
}

export default AppBarHolder;