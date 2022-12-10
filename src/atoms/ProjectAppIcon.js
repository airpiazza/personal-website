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

const projectAppLinks = {
    resume: 'https://www.dropbox.com/s/ve4ctu6kg4dll8i/Nicholas_Piazza_resume.pdf?dl=0',
    allCaps: 'https://play.google.com/store/apps/details?id=com.nicholaspiazza.allcaps&hl=en_US&gl=US',
    kobe: 'https://codepen.io/airpiazza/full/JjRELmz',
    pizzaSurvey: 'https://codepen.io/airpiazza/full/WNGRyjq',
    guitar: 'https://codepen.io/airpiazza/full/QWKpKdQ',
    kotlin: 'https://codepen.io/airpiazza/full/eYdWRBB',
    quando: 'https://play.google.com/store/apps/details?id=com.nicholaspiazza.quando&hl=en_US&gl=US',
    github: 'https://github.com/airpiazza',
    linkedIn: 'https://www.linkedin.com/in/nicholas-b-piazza/',
    codepen: 'https://codepen.io/airpiazza/'
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
            <a href={projectAppLinks[props.projectAppIcon]} rel='noreferrer' target='_blank'>
                <img 
                    className='project-app-icon'
                    src={projectAppIcons[props.projectAppIcon]} 
                    alt='Resume app icon'
                />
            </a>
    );
}

export default ProjectAppIcon;