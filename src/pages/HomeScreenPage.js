import AppBarHolder from '../atoms/AppBarHolder';
import AppBarRow from '../molecules/AppBarRow';
import HomeScreenTopBar from '../organisms/HomeScreenTopBar';
import ProjectApps from '../organisms/ProjectApps';

const HomeScreenPage = () => {
    return (
        <>
            <HomeScreenTopBar />
            <ProjectApps />
            <AppBarRow />
            <AppBarHolder />
        </>
    );
}

export default HomeScreenPage;