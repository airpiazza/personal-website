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
            fontSize='3vw'
            marginRight='1vw'
            WebkitTextStroke={0}
            marginTop={0}
        />
        <Icon color={props.iconColor} iconName={props.iconName} size='3.5vw'/>
      </div>
    );
  }
  
  export default TopBarGroup;