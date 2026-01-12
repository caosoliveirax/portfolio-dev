import { HeroContainer, ProfileImage, Subtitle, Title } from "./styles"
import profile from "../../../assets/profile.png"

export const Hero = () => {
  return (
    <HeroContainer>
      <ProfileImage src={profile} alt="Ícone de perfil" />
      <Title>Olá, sou <span>Carlos Oliveira</span></Title>
      <Subtitle>
        Engenheiro de Software | Desenvolvedor Front-end
      </Subtitle>
    </HeroContainer>
  )
}
