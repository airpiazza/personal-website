import Icon from '../atoms/Icon';
import Text from '../atoms/Text'
import '../resources/stylesheets/ArrowTextGroup.css';

const ArrowTextGroup = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            marginBottom: 50
        }}>
            <Icon className='icon' iconName='FaChevronUp' size='4.5vw' color='#0087A2' marginBottom='-2vw'/>
            <Text 
                content={'Click here to unlock'}
                color='#5D137C'
                fontFamily='pedestria-mvb'
                fontWeight={700}
                fontSize='5vw'
                marginRight={0}
                WebkitTextStroke={0}
                marginTop={0}
            />
        </div>
    );
}

export default ArrowTextGroup;