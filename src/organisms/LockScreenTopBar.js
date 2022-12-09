import TopBarGroup from '../molecules/TopBarGroup'

const LockScreenTopBar = () => {
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
            <TopBarGroup 
                content='100%'
                iconName=''
                iconColor='#5D137C'
            />
        </div>
    );
}

export default LockScreenTopBar;