import Text from '../atoms/Text';

const AppSpiel = props => {
    return (
        <div>
            <Text 
                color={props.titleColor}
                fontFamily='pedestria-mvb' 
                fontWeight={400}
                fontSize='5vw' 
                content={props.title}
                marginBottom='0.5rem'
                textAlign='center'
            />
            <Text 
                color='#000000' 
                fontFamily='pedestria-mvb' 
                fontWeight={400}
                fontSize='2vw' 
                content={props.text}
                textAlign="center"
            />
        </div>
    );
}

export default AppSpiel;