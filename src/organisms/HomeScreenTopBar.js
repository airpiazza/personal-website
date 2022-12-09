import { useEffect } from "react";
import { useBattery } from "react-use";
import Time from "../molecules/Time";
import TopBarGroup from "../molecules/TopBarGroup";

const batteryTopBarGroup = (batteryState) => {
    if(batteryState.fetched) {
        if(batteryState.charging) {
            return <TopBarGroup 
                content={`${batteryState.level * 100}%`}
                iconName='TbBatteryCharging'
                iconColor='#5D137C'
            />
        } 
        else {
            if(batteryState.level < .5) {
                return <TopBarGroup 
                    content={`${batteryState.level * 100}%`}
                    iconName='TbBattery1'
                    iconColor='#5D137C'
                />
            } else if(batteryState.level < .75) {
                return <TopBarGroup 
                    content={`${batteryState.level * 100}%`}
                    iconName='TbBattery2'
                    iconColor='#5D137C'
                />
            } else if(batteryState.level < 1) {
                return <TopBarGroup 
                    content={`${batteryState.level * 100}%`}
                    iconName='TbBattery3'
                    iconColor='#5D137C'
                />
            } else if(batteryState.level === 1) {
                return <TopBarGroup 
                    content={`${batteryState.level * 100}%`}
                    iconName='TbBattery4'
                    iconColor='#5D137C'
                />
            } else {
                return <TopBarGroup 
                    iconName='TbBattery'
                    iconColor='#5D137C'
                />
            }
        }
    } else {
        return <TopBarGroup 
            iconName='TbBattery'
            iconColor='#5D137C'
        />
    }
}

const HomeScreenTopBar = () => {
    const batteryState = useBattery();

    useEffect(() => {
        console.log(batteryState);
    }, [batteryState]);

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
                    batteryState.isSupported
                    &&
                    batteryState.fetched
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
                batteryState.isSupported ?
                    batteryTopBarGroup(batteryState) :
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