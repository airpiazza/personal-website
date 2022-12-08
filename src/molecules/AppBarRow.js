import ProjectAppIcon from "../atoms/ProjectAppIcon";

const AppBarRow = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 25.7*1.5
        }}>
            <ProjectAppIcon projectAppIcon='github' />
            <ProjectAppIcon projectAppIcon='linkedIn' />
            <ProjectAppIcon projectAppIcon='codepen' />
        </div>
    );
}

export default AppBarRow;