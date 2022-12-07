import aboutMe from '../assets/aboutMe.png';
import resume from '../assets/resume.png';
import pizze from '../assets/pizze.png';
import allCaps from '../assets/allCaps.png';
import kobe from '../assets/kobe.png';
import pizzaSurvey from '../assets/pizzaSurvey.png';
import guitar from '../assets/guitar.png';
import kotlin from '../assets/kotlin.png';
import quando from '../quando.png';

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
    aboutMe: aboutMe,
    resume: resume,
    pizze: pizze,
    allCaps: allCaps,
    kobe: kobe,
    pizzaSurvey: pizzaSurvey,
    guitar: guitar,
    kotlin: kotlin,
    quando: quando
}

export default ProjectAppIcon;