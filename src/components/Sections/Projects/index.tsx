import { useEffect, useRef, useState } from 'react'
import * as S from './styles'
import { projects } from './content'
import {
  PiArrowSquareOutLight,
  PiCaretLeftThin,
  PiCaretRightThin,
  PiGithubLogo
} from 'react-icons/pi'

const Projects = () => {
  const carouselRef = useRef<HTMLDivElement>(null)

  const [scrollState, SetScrollState] = useState({
    isAtStart: true,
    isAtEnd: false
  })

  const checkScrollPosition = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current

      const isAtStart = scrollLeft <= 5
      const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 5

      SetScrollState({
        isAtStart,
        isAtEnd
      })
    }
  }

  useEffect(() => {
    const carousel = carouselRef.current
    if (carousel) {
      carousel.addEventListener('scroll', checkScrollPosition)
      checkScrollPosition()
      window.addEventListener('resize', checkScrollPosition)
    }

    return () => {
      if (carousel) {
        carousel.removeEventListener('scroll', checkScrollPosition)
      }
      window.removeEventListener('resize', checkScrollPosition)
    }
  }, [])

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
        <S.NavButton
          $direction="left"
          onClick={() => handleScroll('left')}
          $isHidden={scrollState.isAtStart}
          aria-hidden={scrollState.isAtStart}
        >
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
                    <S.ActionLink href={project.liveUrl} target="_blank">
                      Experimente o projeto
                      <PiArrowSquareOutLight />
                    </S.ActionLink>
                  </li>
                  <li>
                    <S.ActionLink href={project.githubUrl} target="_blank">
                      Ver repositório
                      <PiGithubLogo />
                    </S.ActionLink>
                  </li>
                </ul>
              </S.ProjectActions>
            </S.ProjectCard>
          ))}
        </S.Carousel>
        <S.NavButton
          $direction="right"
          onClick={() => handleScroll('right')}
          $isHidden={scrollState.isAtEnd}
          aria-hidden={scrollState.isAtEnd}
        >
          <PiCaretRightThin />
        </S.NavButton>
      </S.CarouselWrapper>
    </S.ProjectsContainer>
  )
}

export default Projects
