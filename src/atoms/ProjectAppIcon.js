import aboutMe from '../assets/aboutMe.png'

const ProjectAppIcon = props => {
    return (
        <>
            <img 
                style={{
                    maxWidth: '11vw',
                    height: 'auto',
                    borderRadius: '2vw',
                    borderStyle: 'solid',
                    borderWidth: 3,
                    boxShadow: '1vw 1vw 0px black'
                }}
                src={projectAppIcons[props.projectAppIcon]} 
                alt='Resume app icon'
            />
        </>
    );
}

const projectAppIcons = {
    aboutMe: aboutMe
}

export default ProjectAppIcon;