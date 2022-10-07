import TopBarGroup from '../molecules/TopBarGroup'

const TopBar = () => {
    return(
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '10px 25px 0px 25px'
        }}>
            <TopBarGroup 
                content='Nicholas Piazza'
                iconName='TiWiFi'
                iconColor='#5D137C'
            />
            <TopBarGroup 
                content='100%'
                iconName='CgBatteryFull'
                iconColor='#5D137C'
            />
        </div>
    );
}

export default TopBar;