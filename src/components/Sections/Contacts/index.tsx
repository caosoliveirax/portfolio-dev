import {
  PiClock,
  PiEnvelopeThin,
  PiGithubLogoThin,
  PiLinkedinLogoThin,
  PiMapPin,
  PiWhatsappLogoThin
} from 'react-icons/pi'

import * as S from './styles'
import { useEffect, useState } from 'react'

const Contacts = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formattedTime = new Intl.DateTimeFormat('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'America/Sao_Paulo',
    hour12: false
  }).format(time)

  return (
    <S.ContactsContainer id="contact">
      <S.ContactCard>
        <S.SectionTitle>Vamos conversar!</S.SectionTitle>
        <S.Text>
          Estou sempre em busca de desafios que unam design arrojado e código limpo. Tem uma ideia?
          Vamos tirá-la do papel.
        </S.Text>
        <S.LinksGrid>
          <S.LinkItem>
            <S.ContactLink href="mailto:caosoliveiraxd@gmail.com">
              <PiEnvelopeThin />
              Envie um E-mail
            </S.ContactLink>
          </S.LinkItem>
          <S.LinkItem>
            <S.ContactLink href="https://wa.me/5511934510761" target="_blank">
              <PiWhatsappLogoThin />
              WhatsApp
            </S.ContactLink>
          </S.LinkItem>
          <S.LinkItem>
            <S.ContactLink
              href="https://www.linkedin.com/in/carlos-oliveira-044552148"
              target="_blank"
            >
              <PiLinkedinLogoThin />
              LinkedIn
            </S.ContactLink>
          </S.LinkItem>
          <S.LinkItem>
            <S.ContactLink href="https://github.com/caosoliveirax" target="_blank">
              <PiGithubLogoThin />
              GitHub
            </S.ContactLink>
          </S.LinkItem>
        </S.LinksGrid>
        <S.InfoBar>
          <span>
            <PiMapPin /> São Paulo, Brasil
          </span>
          <span>
            <PiClock /> {formattedTime} • UTC-3
          </span>
        </S.InfoBar>
      </S.ContactCard>
    </S.ContactsContainer>
  )
}

export default Contacts
