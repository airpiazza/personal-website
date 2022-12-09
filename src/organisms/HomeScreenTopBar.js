import Time from "../molecules/Time";
import TopBarGroup from "../molecules/TopBarGroup";
import getBatteryTopBarGroup from "../resources/functions/BatteryHelper";

const HomeScreenTopBar = props => {

    return (
        <>
            <div style={{
                position: 'absolute',
                top: 10,
                left: 25
            }}>
                <TopBarGroup 
                    content='Nicholas Piazza'
                    iconColor='#5D137C'
                />
            </div>
            <div style={{
                position: 'absolute',
                top: 10,
                width: '100%',
                textAlign: 'center'
            }}>
                {
                    props.batteryState.isSupported
                    &&
                    props.batteryState.fetched
                    &&
                    <Time 
                        fontFamily='Pedestria-MVB'
                        WebkitTextStroke='0vw #5D137C'
                        fontSize='3vw'
                        color='#5D137C'
                        fontWeight={700}
                    />
                }
            </div>
            <div style={{
                position: 'absolute',
                top: 10,
                right: 25
            }}>
                {
                props.batteryState.isSupported ?
                    getBatteryTopBarGroup(props.batteryState) :
                    <Time 
                        fontFamily='Pedestria-MVB'
                        WebkitTextStroke='0vw #5D137C'
                        fontSize='3vw'
                        color='#5D137C'
                        fontWeight={700}
                    />
                }
            </div>
        </>
    );
}

export default HomeScreenTopBar;