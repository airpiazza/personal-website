import AppTopBar from '../molecules/AppTopBar';
import AppBody from "../organisms/AppBody";
import text from '../resources/content/AboutMeContent';

const AppPage = props => {
    return (
        <div style={{
            height: props.height
        }}>
            <AppTopBar backgroundColor='#0087A2' iconColor='#FFFFFF' />
            <AppBody imageName='memoji' alt='memoji of Nick' text={text} />
        </div>
    );
}

export default AppPage;