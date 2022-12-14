import AppBar from '../organisms/AppBar';
import HomeScreenTopBar from '../organisms/HomeScreenTopBar';
import ProjectApps from '../organisms/ProjectApps';

const HomeScreenPage = props => {
    return (
        <div>
            <HomeScreenTopBar batteryState={props.batteryState} />
            <div 
                style={{
                    height: props.height,
                    display: 'flex',
                    flexDirection:'column',
                    justifyContent: 'space-between',
                }}
            >
                <ProjectApps />
                <AppBar />
            </div>
        </div>
    );
}

export default HomeScreenPage;