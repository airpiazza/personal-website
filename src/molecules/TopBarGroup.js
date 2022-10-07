import Icon from '../atoms/Icon';
import Text from '../atoms/Text';

const TopBarGroup = (props) => {
    return (
      <div style={{
        display: 'flex'
      }}>
        <Text 
            content={props.content}
            color='#5D137C'
            fontFamily='pedestria-mvb'
            fontWeight={700}
            fontSize='2.5vw'
            marginRight={7}
        />
        <Icon color={props.iconColor} iconName={props.iconName} size='3vw'/>
      </div>
    );
  }
  
  export default TopBarGroup;