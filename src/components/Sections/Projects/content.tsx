import { PiCircle, PiPaletteThin, PiPersonSimpleCircleThin, PiTestTubeThin } from 'react-icons/pi'
import projectPreview1 from '../../../assets/preview-project-1.gif'

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
  },
  {
    title: 'Projeto Futuro',
    description: `Vivamus sagittis orci eleifend, sollicitudin justo vel, laoreet tortor. Nullam viverra, nunc id mollis viverra, mauris nulla ornare ante, ac rhoncus lorem turpis quis lorem. Curabitur eleifend purus consequat ornare volutpat. Etiam et sapien finibus, euismod libero ut, elementum augue. Phasellus at fermentum diam, a mollis turpis. Vestibulum finibus nunc sed dignissim molestie. Nullam ullamcorper, odio sit amet hendrerit tempor, mi orci aliquam lacus, ut ornare quam quam non leo.

`,
    liveUrl: '#',
    githubUrl: '#',
    preview: '#',
    techs: [
      { name: 'Tecnologia 1' },
      { name: 'Tecnologia 2' },
      { name: 'Tecnologia 3' },
      { name: 'Tecnologia 4' },
      { name: 'Tecnologia 5' }
    ],
    features: [
      {
        name: 'Característica 1',
        icon: <PiCircle />
      },
      {
        name: 'Característica 2',
        icon: <PiCircle />
      },
      {
        name: 'Característica 3',
        icon: <PiCircle />
      }
    ]
  }
]
