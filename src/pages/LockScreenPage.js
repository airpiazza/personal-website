import Time from "../molecules/Time";
import LockScreenTopBar from "../organisms/LockScreenTopBar";
import ArrowTextGroup from "../molecules/ArrowTextGroup";

const LockScreenPage = props => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100vh'
        }}>
            <LockScreenTopBar batteryState={props.batteryState} />
            <Time 
                fontFamily='Pedestria-MVB' 
                WebkitTextStroke='1vw #5D137C' 
                fontSize='18vw' 
                color='#0087A2'
                fontWeight={700}
            />
            <ArrowTextGroup />
        </div>
    );
}

export default LockScreenPage;