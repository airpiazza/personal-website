import ProjectAppGroup from "../molecules/ProjectAppGroup";

const projectAppNames = [
    'aboutMe',
    'resume',
    'pizze',
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
            gridTemplateColumns: 'repeat(auto-fill, 21vw)',
            justifyContent:'center'
        }}>
            {projectApps}
        </div>
    );
}

export default ProjectApps;