import { useEffect, useState } from 'react'
import styled, { css, keyframes } from 'styled-components'
import { flex, mq, NeoStyle } from '../../styles/mixins'

type StatusType = 'online' | 'offline'

interface StatusConfig {
  text: string
  color: string
  type: StatusType
}

const getStatusByTime = (): StatusConfig => {
  const date = new Date()

  const spTime = new Intl.DateTimeFormat('pt-BR', {
    timeZone: 'America/Sao_Paulo',
    hour: 'numeric',
    hour12: false
  }).format(date)

  const hour = parseInt(spTime)

  if (hour >= 8 && hour < 23) {
    return { text: 'Disponível', color: '#4caf50', type: 'online' }
  } else {
    return { text: 'Descansando', color: '#2c1777', type: 'offline' }
  }
}

const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
    : '76, 175, 80'
}

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(var(--badge-color), 0.7);
    transform: scale(1);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(var(--badge-color), 0);
    transform: scale(1.15);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(var(--badge-color), 0);
    transform: scale(1);
    }
`

export const Container = styled.div<{ $color: string; $type: StatusType }>`
  ${NeoStyle('2px 2px', '2px', '16px')};
  padding: 8px 16px;
  ${flex('row', 'center', 'center')};
  gap: 8px;
  font-size: 0.8rem;
  font-weight: 700;
  white-space: nowrap;
  color: var(--text);

  --badge-color: ${({ $color }) => hexToRgb($color)};

  &::before {
    content: '';
    width: 10px;
    height: 10px;
    background-color: ${({ $color }) => $color};
    border-radius: 50%;
    border: 1px solid var(--text);
    animation: ${pulse} 2s infinite;
  }

  ${mq.mobile(css`
    font-size: 0.75rem;
    padding: 6px 12px;
  `)}
`

export const StatusBadge = () => {
  const [status, setStatus] = useState<StatusConfig | null>(null)

  useEffect(() => {
    setStatus(getStatusByTime())

    const interval = setInterval(() => {
      setStatus(getStatusByTime())
    }, 60000)

    return () => clearInterval(interval)
  }, [])

  if (!status) return null

  return (
    <Container
      $type={status.type}
      $color={status.color}
      aria-label={`Status atual: ${status.text}`}
    >
      {status.text}
    </Container>
  )
}
