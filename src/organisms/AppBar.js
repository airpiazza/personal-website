import AppBarRow from '../molecules/AppBarRow';
import AppBarHolder from '../atoms/AppBarHolder';

const AppBar = () => {
    return (
        <div style={{ backgroundColor: '#EAEAEA' }}>
            <AppBarRow />
            <AppBarHolder />
        </div>
    );
}

export default AppBar;