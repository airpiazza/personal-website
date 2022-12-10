import aboutMe from '../resources/assets/aboutMe.png';
import resume from '../resources/assets/resume.png';
import allCaps from '../resources/assets/allCaps.png';
import kobe from '../resources/assets/kobe.png';
import pizzaSurvey from '../resources/assets/pizzaSurvey.png';
import guitar from '../resources/assets/guitar.png';
import kotlin from '../resources/assets/kotlin.png';
import quando from '../resources/assets/quando.png';
import github from '../resources/assets/github.png';
import linkedIn from '../resources/assets/linkedIn.png';
import codepen from '../resources/assets/codepen.png';
import '../resources/stylesheets/ProjectAppIcon.css';
import { Link } from 'react-router-dom';

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
        props.projectAppIcon === 'aboutMe' ?
            <Link to='/about-me'>
                <img 
                    className='project-app-icon'
                    src={projectAppIcons[props.projectAppIcon]} 
                    alt='Resume app icon'
                />
            </Link> :
            <img 
                className='project-app-icon'
                src={projectAppIcons[props.projectAppIcon]} 
                alt='Resume app icon'
            />
    );
}

export default ProjectAppIcon;