import memoji from "../assets/memoji.PNG"

const Image = props => {
    const images = {
        memoji: memoji
    }

    return (
        <img 
            style={{
                display: 'block',
                maxWidth: '30vw',
                height: 'auto',
            }}
            src={images[props.imageName]} 
            alt={props.alt} 
        />
    );
}

export default Image;