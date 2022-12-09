import TopBarGroup from "../../molecules/TopBarGroup"

const getBatteryTopBarGroup = (batteryState) => {
    if(batteryState.fetched) {
        const batteryLevel = Math.round(batteryState.level * 100)

        if(batteryState.charging) {
            return <TopBarGroup 
                content={`${batteryLevel}%`}
                iconName='TbBatteryCharging'
                iconColor='#5D137C'
            />
        } 
        else {
            if(batteryState.level < .5) {
                return <TopBarGroup 
                    content={`${batteryLevel}%`}
                    iconName='TbBattery1'
                    iconColor='#5D137C'
                />
            } else if(batteryState.level < .75) {
                return <TopBarGroup 
                    content={`${batteryLevel}%`}
                    iconName='TbBattery2'
                    iconColor='#5D137C'
                />
            } else if(batteryState.level < 1) {
                return <TopBarGroup 
                    content={`${batteryLevel}%`}
                    iconName='TbBattery3'
                    iconColor='#5D137C'
                />
            } else if(batteryState.level === 1) {
                return <TopBarGroup 
                    content={`${batteryLevel}%`}
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

export default getBatteryTopBarGroup;