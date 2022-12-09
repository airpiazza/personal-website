import ProjectAppIcon from "../atoms/ProjectAppIcon";
import '../stylesheets/ProjectAppIcon.css';

const AppBarRow = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 25.7*1.6
        }}>
            <div className="app-bar-icon">
                <ProjectAppIcon projectAppIcon='github' />
            </div>
            <div className="app-bar-icon">
                <ProjectAppIcon projectAppIcon='linkedIn' />
            </div>
            <div className="app-bar-icon">
                <ProjectAppIcon projectAppIcon='codepen' />
            </div>
        </div>
    );
}

export default AppBarRow;