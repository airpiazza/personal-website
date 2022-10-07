import { TiWiFi } from "react-icons/ti";
import { CgBatteryFull } from "react-icons/cg";
import { FaChevronUp } from "react-icons/fa";

const getIconComponent = iconName => {
    if (iconName === 'TiWiFi') {
        return <TiWiFi />;
    } else if (iconName === 'CgBatteryFull') {
        return <CgBatteryFull />;
    } else if (iconName === 'FaChevronUp') {
        return <FaChevronUp />;
    } else {
        return <div></div>;
    }
}

const Icon = props => {
    return (
        <div style={{
            color: props.color,
            fontSize: props.size,
            marginBottom: props.marginBottom
        }}>
            { getIconComponent(props.iconName) }
        </div>
    );
  }
  
  export default Icon;