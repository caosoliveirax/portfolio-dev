import * as S from './styles'
import profile from '../../../assets/profile.png'

export const Hero = () => {
  return (
    <S.HeroContainer>
      <div className="wrapper-left">
        <S.Title>
          Olá! <br /> Eu sou <span>Carlos Oliveira</span>
        </S.Title>
        <S.Description>
          Onde a lógica exata encontra a criatividade. Crio soluções front-end robustas que fogem do
          óbvio e cativam o usuário.
        </S.Description>
      </div>
      <div className="wrapper-right">
        <S.ProfileImage src={profile} alt="Ícone de perfil" />
        <S.Subtitle>Engenheiro de Software</S.Subtitle>
      </div>
    </S.HeroContainer>
  )
}
