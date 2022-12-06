import Time from "../molecules/Time";
import TopBarGroup from "../molecules/TopBarGroup";

const HomeScreenTopBar = () => {
    return (
        <>
            <div style={{
                position: 'absolute',
                top: 10,
                left: 25
            }}>
                <TopBarGroup 
                    content='Nicholas Piazza'
                    iconName='TiWiFi'
                    iconColor='#5D137C'
                />
            </div>
            <div style={{
                position: 'absolute',
                top: 10,
                width: '100%',
                textAlign: 'center'
            }}>
                <Time 
                    fontFamily='Pedestria-MVB'
                    WebkitTextStroke='0vw #5D137C'
                    fontSize='3vw'
                    color='#5D137C'
                    fontWeight={700}
                />
            </div>
            <div style={{
                position: 'absolute',
                top: 10,
                right: 25
            }}>
                <TopBarGroup 
                    content='100%'
                    iconName='CgBatteryFull'
                    iconColor='#5D137C'
                />
            </div>
        </>
    );
}

export default HomeScreenTopBar;