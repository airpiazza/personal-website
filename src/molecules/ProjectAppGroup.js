import ProjectAppIcon from "../atoms/ProjectAppIcon";
import Text from "../atoms/Text";
import '../resources/stylesheets/ProjectAppGroup.css';

const projectAppNames = {
    aboutMe: 'About Me',
    resume: 'Resume'
}

const ProjectAppGroup = props => {
    return (
        <div 
            className="project-app-group"
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                margin: '1.5vw 25.7px'
            }}
        >
            <ProjectAppIcon projectAppIcon={props.projectAppName} />
            <Text 
                content={projectAppNames[props.projectAppName]}
                color='#5D137C' 
                fontFamily='pedestria-mvb'
                fontWeight={700}
                fontSize='2vw'
                marginRight='0vw'
                WebkitTextStroke={0}
                marginTop='1vw'
            />
        </div>
    );
}

export default ProjectAppGroup;