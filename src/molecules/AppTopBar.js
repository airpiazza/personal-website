import { Link } from "react-router-dom";
import Icon from "../atoms/Icon";

const AppTopBar = props => {
    return (
        <div style={{
            display: 'block',
            height: '8vh',
            backgroundColor: props.backgroundColor,
        }}>
            <div style={{
                padding: '1.1vh 1vh 1vh 1vh'
            }}>
                <Link to='/home'>
                    <Icon iconName='FaChevronLeft' size='4.5vh' color={props.iconColor} marginBottom={0}/>
                </Link>
            </div>
        </div>
    );
}

export default AppTopBar;