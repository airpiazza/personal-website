import ProjectAppGroup from "../molecules/ProjectAppGroup";

const projectAppNames = [
    'aboutMe',
    'resume'
];

const projectApps = projectAppNames.map((projectAppName, index) => {

    return (
        <ProjectAppGroup key={index} projectAppName={projectAppName} />
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