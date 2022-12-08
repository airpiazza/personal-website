import appBar from '../assets/appBar.png'

const AppBarHolder = () => {
    return (
        <img 
            style={{
                display: 'block',
                maxWidth: 'calc((10vw + 25.7px) * 3)',
                height: 'auto',
                marginTop: '3vw',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginBottom: '1vw'
            }}
            alt='app bar'
            src={appBar}
        />
    );
}

export default AppBarHolder;