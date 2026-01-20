import * as S from './styles'
import { projects } from './content'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { PiCaretLeftThin, PiCaretRightThin } from 'react-icons/pi'
import { useRef } from 'react'

const Projects = () => {
  const carouselRef = useRef<HTMLDivElement>(null)

  const handleScroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <S.ProjectsContainer id="projects">
      <S.SectionTitle>Meus Projetos</S.SectionTitle>
      <S.CarouselWrapper>
        <S.NavButton $direction="left" onClick={() => handleScroll('left')}>
          <PiCaretLeftThin />
        </S.NavButton>
        <S.Carousel ref={carouselRef}>
          {projects.map((project) => (
            <S.ProjectCard key={project.title}>
              <S.ProjectInfo>
                <S.Title>{project.title}</S.Title>
                <S.Description> {project.description}</S.Description>
                <S.TagsList>
                  {project.techs.map((tech) => (
                    <li key={tech.name}>{tech.name}</li>
                  ))}
                </S.TagsList>
              </S.ProjectInfo>
              <S.ProjectPreview src={project.preview} alt={`Preview do projeto ${project.title}`} />
              <S.FeaturesList>
                {project.features.map((feature) => (
                  <li key={feature.name}>
                    {feature.icon} <span>{feature.name}</span>
                  </li>
                ))}
              </S.FeaturesList>
              <S.ProjectActions>
                <ul>
                  <li>
                    <a href={project.liveUrl} target="_blank">
                      Experimente o projeto
                      <FaExternalLinkAlt />
                    </a>
                  </li>
                  <li>
                    <a href={project.githubUrl} target="_blank">
                      Ver repositório
                      <FaExternalLinkAlt />
                    </a>
                  </li>
                </ul>
              </S.ProjectActions>
            </S.ProjectCard>
          ))}
        </S.Carousel>
        <S.NavButton $direction="right" onClick={() => handleScroll('right')}>
          <PiCaretRightThin />
        </S.NavButton>
      </S.CarouselWrapper>
    </S.ProjectsContainer>
  )
}

export default Projects
