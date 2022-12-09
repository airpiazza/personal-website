import Text from '../atoms/Text';

const AppSpiel = props => {
    return (
        <div>
            <Text 
                color={props.titleColor}
                fontFamily='pedestria-mvb' 
                fontWeight={400}
                fontSize='calc(4vw + 48px)' 
                content={props.title}
                marginBottom='1rem'
                textAlign='center'
            />
            <Text 
                color='#000000' 
                fontFamily='pedestria-mvb' 
                fontWeight={400}
                fontSize='calc(2vw + 16px)' 
                content={props.text}
                textAlign="center"
                marginBottom='10vh'
            />
        </div>
    );
}

export default AppSpiel;