import Icon from "../atoms/Icon";

const AppTopBar = props => {
    return (
        <div style={{
            display: 'block',
            height: '8vh',
            width: '100vw',
            backgroundColor: props.backgroundColor,
        }}>
            <div style={{
                padding: '1.1vh 1vh 1vh 1vh'
            }}>
                <Icon iconName='FaChevronLeft' size='4.5vh' color={props.iconColor} marginBottom={0}/>
            </div>
        </div>
    );
}

export default AppTopBar;