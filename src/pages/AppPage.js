import AppTopBar from '../molecules/AppTopBar';
import AppBody from "../organisms/AppBody";
import text from '../page-content/AboutMeContent';

const AppPage = () => {
    return (
        <div>
            <AppTopBar backgroundColor='#0087A2' iconColor='#FFFFFF' />
            <AppBody imageName='memoji' alt='memoji of Nick' text={text} />
        </div>
    );
}

export default AppPage;