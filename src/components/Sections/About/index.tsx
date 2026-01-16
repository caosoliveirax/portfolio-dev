import {
  FaHtml5,
  FaJs,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
  FaFigma
} from 'react-icons/fa'
import { SiTypescript, SiStyledcomponents } from 'react-icons/si'
import {
  AboutContainer,
  BioCard,
  CardTitle,
  ContentGrid,
  SoftCard,
  SectionTitle,
  TechCard,
  Text,
  TechList,
  SoftList
} from './styles'
import {
  PiBooksThin,
  PiBrainThin,
  PiBroomThin,
  PiCactusThin,
  PiEyeThin,
  PiHandshakeThin
} from 'react-icons/pi'

const About = () => {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'CSS', icon: <FaCss3Alt /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'GitHub', icon: <FaGithub /> },
    { name: 'Styled-Components', icon: <SiStyledcomponents /> },
    { name: 'Bootstrap', icon: <FaBootstrap /> },
    { name: 'Figma', icon: <FaFigma /> }
  ]

  const softSkills = [
    { name: 'Criatividade', icon: <PiBrainThin /> },
    { name: 'Autodidata', icon: <PiBooksThin /> },
    { name: 'Proatividade', icon: <PiHandshakeThin /> },
    { name: 'Qualidade de código', icon: <PiBroomThin /> },
    { name: 'Adaptação', icon: <PiCactusThin /> },
    { name: 'Atenção aos Detalhes', icon: <PiEyeThin /> }
  ]

  return (
    <AboutContainer>
      <ContentGrid>
        <BioCard>
          <SectionTitle>Sobre Mim</SectionTitle>
          <Text>
            Desenvolver, para mim, é um exercício de percepção. Minha maior força reside na
            intersecção entre a lógica e a estética: uso minha sensibilidade visual para garantir a
            beleza, e meu raciocínio de engenheiro para encontrar atalhos criativos em cenários
            complexos.{' '}
            <em>
              Não me contento com o padrão; busco a solução que surpreende pela eficiência e encanta
              pelo visual.
            </em>
          </Text>
        </BioCard>
        <TechCard>
          <CardTitle>Tecnologias e Ferramentas</CardTitle>
          <TechList>
            {skills.map((skills) => (
              <li key={skills.name}>
                {skills.icon} <span>{skills.name}</span>
              </li>
            ))}
          </TechList>
        </TechCard>
        <SoftCard>
          <CardTitle>Qualidades Complementares</CardTitle>
          <SoftList>
            {softSkills.map((soft) => (
              <li key={soft.name}>
                {soft.icon} <span>{soft.name}</span>
              </li>
            ))}
          </SoftList>
        </SoftCard>
      </ContentGrid>
    </AboutContainer>
  )
}

export default About
