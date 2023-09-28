'use cleint'

import { colors } from '@/styles/colors'
import styled, { css } from 'styled-components'

export const Button = styled.input<{ $variant: 'primary' | 'secondary' }>`
  text-transform: uppercase;
  padding: 0.75em 2.5em;
  text-align: center;
  color: ${colors.black};
  border-radius: 0.3em;
  font-weight: 800;
  font-size: clamp(12px, 2vw, 18px);
  transition: all 0.2s;

  ${(props) =>
    props.$variant === 'primary' &&
    css`
      background-color: ${colors.yellow};

      &:hover {
        background-color: ${colors.black};
        color: white;
      }
    `}

  ${(props) =>
    props.$variant === 'secondary' &&
    css`
      background-color: white;
      border: 2px solid ${colors.lightGrey};
    `}
`
