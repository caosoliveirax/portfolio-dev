import * as S from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <S.FooterContainer>
      <S.Copy>&copy; {currentYear} Carlos Oliveira</S.Copy>
    </S.FooterContainer>
  )
}

export default Footer
