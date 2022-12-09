import { FaChevronUp, FaChevronLeft } from "react-icons/fa";
import { 
    TbBatteryCharging,
    TbBattery,
    TbBattery1,
    TbBattery2,
    TbBattery3,
    TbBattery4
 } from 'react-icons/tb'

const getIconComponent = iconName => {
    if (iconName === 'FaChevronUp') {
        return <FaChevronUp />;
    } else if (iconName === 'FaChevronLeft') {
        return <FaChevronLeft />;
    } else if (iconName === 'TbBattery') {
        return <TbBattery />;
    } else if (iconName === 'TbBattery1') {
        return <TbBattery1 />;
    } else if (iconName === 'TbBattery2') {
        return <TbBattery2 />;
    } else if (iconName === 'TbBattery3') {
        return <TbBattery3 />;
    } else if (iconName === 'TbBattery4') {
        return <TbBattery4 />;
    } else if (iconName === 'TbBatteryCharging') {
        return <TbBatteryCharging />;
    } else {
        return <div></div>;
    }
}

const Icon = props => {
    return (
        <div 
            className={props.className}
            style={{
                color: props.color,
                fontSize: props.size,
                marginBottom: props.marginBottom
            }}
        >
            { getIconComponent(props.iconName) }
        </div>
    );
  }
  
  export default Icon;