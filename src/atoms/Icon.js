import { TiWiFi } from "react-icons/ti";
import { CgBatteryFull } from "react-icons/cg";
import { FaChevronUp } from "react-icons/fa";

const getIconComponent = iconName => {
    switch(iconName) {
        case 'TiWiFi':
            return <TiWiFi />
        case 'CgBatteryFull':
            return <CgBatteryFull />
        case 'FaChevronUp':
            return <FaChevronUp />
        default:
            return <div></div>;
    }
}

const Icon = props => {
    return (
        <div style={{
            color: '#5D137C',
            fontSize: props.size
        }}>
            { getIconComponent(props.iconName) }
        </div>
    );
  }
  
  export default Icon;