import Time from "../molecules/Time";
import LockScreenTopBar from "../organisms/LockScreenTopBar";
import ArrowTextGroup from "../molecules/ArrowTextGroup";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

const LockScreenPage = props => {
    return (
        <motion.div 
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: props.height,
                width: '100vw',
                position: 'absolute'
            }}
            exit={{ y: -window.innerHeight, transition: {duration: 1} }}
        >
            <LockScreenTopBar batteryState={props.batteryState} />
            <Time 
                fontFamily='Pedestria-MVB' 
                WebkitTextStroke='1vw #5D137C' 
                fontSize='18vw' 
                color='#0087A2'
                fontWeight={700}
            />
            <Link to='/home'>
                <ArrowTextGroup />
            </Link>
        </motion.div>
    );
}

export default LockScreenPage;