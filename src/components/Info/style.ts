'use client'

import { colors } from '@/styles/colors'
import styled from 'styled-components'

export const Content = styled.section`
  background-color: ${colors.ultraLightGrey};
  padding: 1rem;
  border-radius: 8px;
  display: grid;
  column-gap: 4rem;
  row-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 15ch), 1fr));
`
