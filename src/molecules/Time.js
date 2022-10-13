import React from 'react';
import Text from "../atoms/Text";

const Time = (props) => {
    const [currentTime, setCurrentTime ] = React.useState();

    React.useEffect(() => {
        setInterval(() => {
            let localeTimeString = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

            if(localeTimeString[0] === '0') {
                setCurrentTime(localeTimeString.slice(1));
            } else {
                setCurrentTime(localeTimeString);
            }
        }, 1000)
    }, [])

    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center'
      }}>
        <Text 
            content={currentTime}
            color={props.color}
            fontFamily={props.fontFamily}
            fontWeight={props.fontWeight}
            fontSize={props.fontSize}
            marginRight={0}
            WebkitTextStroke={props.WebkitTextStroke}
        />
      </div>
    );
  }
  
  export default Time;