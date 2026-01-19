import styled from 'styled-components'

export const ProjectsContainer = styled.section`
  min-height: 100vh;
  padding: 40px 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const SectionTitle = styled.h2`
  font-weight: 400;
  font-size: 3rem;
  line-height: 1;
  margin-bottom: 32px;
`

export const Carousel = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  gap: 40px;
  overflow-x: auto;
`

export const ProjectCard = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border: 2px solid black;
  border-radius: 16px;
  width: 100%;
  padding: 28px 24px;
  height: auto;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-template-rows: auto auto;
  grid-template-areas:
    'info preview'
    'info feature'
    'info actions';
  gap: 20px;
`

export const ProjectPreview = styled.img`
  grid-area: preview;
  max-width: 100%;
  border: 1px solid black;
  height: auto;
  border-radius: 8px;
`

export const ProjectInfo = styled.div`
  grid-area: info;
  margin-right: 16px;
  text-align: start;
`

export const Title = styled.h3`
  font-size: 2.5rem;
  font-weight: 400;
  line-height: 1;
  margin-bottom: 24px;
`

export const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 8px;
`

export const TagsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;

  li {
    background-color: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.background};
    font-size: 0.75rem;
    padding: 6px 16px;
    font-weight: 700;
    border-radius: 16px 8px;

    width: fit-content;
    white-space: nowrap;
  }
`

export const FeaturesList = styled.ul`
  grid-area: feature;
  display: flex;
  justify-content: center;
  gap: 32px;

  li {
    font-size: 0.85rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    svg {
      font-size: 3rem;
    }
  }
`

export const ProjectActions = styled.div`
  grid-area: actions;
  display: flex;
  justify-content: center;

  ul {
    display: flex;
    gap: 16px;

    li {
      background-color: ${({ theme }) => theme.colors.text};
      display: flex;
      height: 48px;
      min-width: 260px;
      border-radius: 8px;

      a {
        padding: 8px 18px;
        color: ${({ theme }) => theme.colors.background};
        font-weight: 300;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
      }
    }
  }
`
