import getBatteryTopBarGroup from '../resources/functions/BatteryHelper';
import Time from '../molecules/Time';
import TopBarGroup from '../molecules/TopBarGroup'

const LockScreenTopBar = props => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '10px 25px 0px 25px'
        }}>
            <TopBarGroup 
                content='Nicholas Piazza'
                iconColor='#5D137C'
            />
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
    );
}

export default LockScreenTopBar;