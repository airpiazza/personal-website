import aboutMe from '../assets/aboutMe.png';
import resume from '../assets/resume.png';
import allCaps from '../assets/allCaps.png';
import kobe from '../assets/kobe.png';
import pizzaSurvey from '../assets/pizzaSurvey.png';
import guitar from '../assets/guitar.png';
import kotlin from '../assets/kotlin.png';
import quando from '../assets/quando.png';
import github from '../assets/github.png';
import linkedIn from '../assets/linkedIn.png';
import codepen from '../assets/codepen.png';

const projectAppIcons = {
    aboutMe: aboutMe,
    resume: resume,
    allCaps: allCaps,
    kobe: kobe,
    pizzaSurvey: pizzaSurvey,
    guitar: guitar,
    kotlin: kotlin,
    quando: quando,
    github: github,
    linkedIn: linkedIn,
    codepen: codepen
}
const ProjectAppIcon = props => {
    return (
        <>
            <img 
                style={{
                    maxWidth: '10vw',
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

export default ProjectAppIcon;