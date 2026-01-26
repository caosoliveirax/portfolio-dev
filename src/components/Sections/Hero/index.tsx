import { FaLinkedin, FaGithubSquare } from 'react-icons/fa'
import * as S from './styles'
import profile from '../../../assets/profile.png'
import { StatusBadge } from '@components/UI/StatusBadge'

export const Hero = () => {
  return (
    <S.HeroContainer id="home">
      <S.ApresentationWrapper>
        <S.Title>
          Bem vindo(a)! <br /> Eu sou <span>Carlos Oliveira.</span>
        </S.Title>
        <S.Description>
          Onde a lógica exata encontra a criatividade. Crio soluções front-end robustas que fogem do
          óbvio e cativam o usuário.
        </S.Description>
      </S.ApresentationWrapper>
      <S.ProfileWrapper>
        <S.ProfileImage src={profile} alt="Ícone de perfil" />
        <S.Subtitle>Engenheiro de Software</S.Subtitle>
        <StatusBadge />
        <S.SocialLinks>
          <S.SocialItem>
            <S.SocialLink
              target="_blank"
              aria-label="GitHub"
              href="https://github.com/caosoliveirax"
            >
              <FaGithubSquare size={40} />
            </S.SocialLink>
          </S.SocialItem>
          <S.SocialItem>
            <S.SocialLink
              target="_blank"
              aria-label="LinkedIn"
              href="https://www.linkedin.com/in/carlos-oliveira-044552148"
            >
              <FaLinkedin size={40} />
            </S.SocialLink>
          </S.SocialItem>
        </S.SocialLinks>
      </S.ProfileWrapper>
    </S.HeroContainer>
  )
}
