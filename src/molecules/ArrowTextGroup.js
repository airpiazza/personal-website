import Icon from '../atoms/Icon';
import Text from '../atoms/Text'

const ArrowTextGroup = () => {
    return (
        <div style={{
            textAlign: 'center'
        }}>
            <Icon iconName='FaChevronUp' size='5vw' color='#0087A2' marginBottom='-15px'/>
            <Text 
                content={'Click here to unlock'}
                color='#5D137C'
                fontFamily='pedestria-mvb'
                fontWeight={700}
                fontSize='3vw'
                marginRight={0}
            />
        </div>
    );
}

export default ArrowTextGroup;