import { PiPaletteThin, PiPersonSimpleCircleThin, PiTestTubeThin } from 'react-icons/pi'
import projectPreview1 from '../../../assets/preview1.gif'

export const projects = [
  {
    title: 'Calculadora IMC',
    description: `Uma experiência interativa de UI reativa que transforma cálculos de saúde em feedback visual dinâmico. Desenvolvida com arquitetura robusta em Redux e TypeScript, a aplicação garante estabilidade através de testes de ponta a ponta com Cypress. O maior desafio foi a acessibilidade: implementei uma central de anúncios para sincronizar o React com leitores de tela, garantindo que o resultado chegue a todos de forma clara e imediata.`,
    liveUrl: 'https://fancy-bmi-calculator.vercel.app',
    githubUrl: 'https://github.com/caosoliveirax/fancy-bmi-calculator',
    preview: projectPreview1,
    techs: [
      { name: 'React' },
      { name: 'Redux' },
      { name: 'TypeScript' },
      { name: 'Styled-Components' },
      { name: 'Cypress' }
    ],
    features: [
      {
        name: 'Estilo Camaleão',
        icon: <PiPaletteThin />
      },
      {
        name: 'O Narrador Atencioso',
        icon: <PiPersonSimpleCircleThin />
      },
      {
        name: 'Código Blindado',
        icon: <PiTestTubeThin />
      }
    ]
  }
]
