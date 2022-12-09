import Image from '../atoms/Image';
import AppSpiel from '../molecules/AppSpiel';

const AppBody = props => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            padding: '0vw 15vw'
        }}>
            <Image imageName={props.imageName} alt={props.alt} />
            <AppSpiel 
                titleColor='#0087A2'  
                title='About me' 
                text={props.text}
            />
        </div>
    );
}

export default AppBody;