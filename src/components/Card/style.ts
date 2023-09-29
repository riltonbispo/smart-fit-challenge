'use client'

import { colors } from '@/styles/colors'
import styled from 'styled-components'

export const CardGrid = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 30ch), 1fr));
`

export const Card = styled.div<{ $status: boolean }>`
  padding: 1rem;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.ultraLightGrey};
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.29);

  .status {
    color: ${(props) => (props.$status ? colors.green : colors.red)};
  }

  h4 {
    font-weight: bold;
    font-size: 20px;
    color: ${colors.darkGrey};
  }

  .address {
    color: ${colors.lightGrey};
  }
`
