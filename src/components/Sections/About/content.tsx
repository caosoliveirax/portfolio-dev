import {
  FaHtml5,
  FaJs,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaSass
} from 'react-icons/fa'
import { SiTypescript, SiStyledcomponents, SiRedux, SiCypress } from 'react-icons/si'
import {
  PiBooksThin,
  PiBrainThin,
  PiBroomThin,
  PiCactusThin,
  PiEyeThin,
  PiHandshakeThin
} from 'react-icons/pi'

export const skills = [
  { name: 'HTML5', icon: <FaHtml5 /> },
  { name: 'CSS3', icon: <FaCss3Alt /> },
  { name: 'JavaScript', icon: <FaJs /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Redux', icon: <SiRedux /> },
  { name: 'SASS', icon: <FaSass /> },
  { name: 'Styled-Components', icon: <SiStyledcomponents /> },
  { name: 'Cypress', icon: <SiCypress /> },
  { name: 'Git', icon: <FaGitAlt /> },
  { name: 'GitHub', icon: <FaGithub /> },
  { name: 'Figma', icon: <FaFigma /> }
]

export const softSkills = [
  { name: 'Criatividade', icon: <PiBrainThin /> },
  { name: 'Autodidata', icon: <PiBooksThin /> },
  { name: 'Proatividade', icon: <PiHandshakeThin /> },
  { name: 'Qualidade de código', icon: <PiBroomThin /> },
  { name: 'Adaptação', icon: <PiCactusThin /> },
  { name: 'Atenção aos Detalhes', icon: <PiEyeThin /> }
]
