import AppBar from '../organisms/AppBar';
import HomeScreenTopBar from '../organisms/HomeScreenTopBar';
import ProjectApps from '../organisms/ProjectApps';

const HomeScreenPage = () => {
    return (
        <div>
            <HomeScreenTopBar />
            <div 
                style={{
                    height: '100vh',
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