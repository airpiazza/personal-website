import ProjectAppIcon from "../atoms/ProjectAppIcon";
import Text from "../atoms/Text";

const projectAppNames = {
    aboutMe: 'About Me',
    resume: 'Resume',
    pizze: 'Pizze',
    allCaps: 'All Caps',
    kobe: 'Kobe Page',
    pizzaSurvey: 'Pizza Survey',
    guitar: 'Guitar Page',
    kotlin: 'Kotlin Docs',
    quando: 'Quando'
}

const ProjectAppGroup = props => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '1.5vw 0vw'
        }}>
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