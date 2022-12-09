import memoji from "../resources/assets/memoji.PNG"

const Image = props => {
    const images = {
        memoji: memoji
    }

    return (
        <img 
            style={{
                display: 'block',
                maxWidth: '420px',
                height: 'auto',
            }}
            src={images[props.imageName]} 
            alt={props.alt} 
        />
    );
}

export default Image;