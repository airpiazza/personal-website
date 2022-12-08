import ProjectAppGroup from "../molecules/ProjectAppGroup";
import '../stylesheets/ProjectApps.css'

const projectAppNames = [
    'aboutMe',
    'resume',
    'allCaps',
    'kobe',
    'pizzaSurvey',
    'guitar',
    'kotlin',
    'quando'
];

const projectApps = projectAppNames.map((projectAppName) => {

    return (
        <ProjectAppGroup projectAppName={projectAppName} />
    );
})

const ProjectApps = () => {
    
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, calc(10vw + 25.7px*2))',
            justifyContent:'center',
            paddingTop: '8vw'
        }}
        >
            {projectApps}
        </div>
    );
}

export default ProjectApps;