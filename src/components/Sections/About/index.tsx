import { skills, softSkills } from './content'
import * as S from './styles'

const About = () => {
  return (
    <S.AboutContainer id="about">
      <S.ContentGrid>
        <S.BioCard>
          <S.SectionTitle>Sobre Mim</S.SectionTitle>
          <S.Text>
            Desenvolver, para mim, é um exercício de percepção. Minha maior força reside na
            intersecção entre a lógica e a estética: uso minha sensibilidade visual para garantir a
            beleza, e meu raciocínio de engenheiro para encontrar atalhos criativos em cenários
            complexos.{' '}
            <em>
              Não me contento com o padrão; busco a solução que surpreende pela eficiência e encanta
              pelo visual.
            </em>
          </S.Text>
        </S.BioCard>
        <S.TechCard>
          <S.CardTitle>Tecnologias e Ferramentas</S.CardTitle>
          <S.TechList>
            {skills.map((skill) => (
              <li key={skill.name}>
                {skill.icon} <span>{skill.name}</span>
              </li>
            ))}
          </S.TechList>
        </S.TechCard>
        <S.SoftCard>
          <S.CardTitle>Qualidades Complementares</S.CardTitle>
          <S.SoftList>
            {softSkills.map((soft) => (
              <li key={soft.name}>
                {soft.icon} <span>{soft.name}</span>
              </li>
            ))}
          </S.SoftList>
        </S.SoftCard>
      </S.ContentGrid>
    </S.AboutContainer>
  )
}

export default About
