'use client'

import styled from 'styled-components'
import { colors } from '@/styles/colors'

export const Header = styled.header`
  background-color: ${colors.black};
  img {
    height: 8vmax;
    width: 8vmax;
    margin-inline: auto;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const Title = styled.h1`
  font-size: clamp(2rem, 10vmin, 4rem);
  font-weight: 900;
  line-height: 1;
  color: ${colors.darkGrey};
  text-transform: uppercase;
  position: relative;
`

export const Divider = styled.div`
  height: 10px;
  width: clamp(6rem, 14vw, 10rem);
  background-color: ${colors.darkGrey};
`

export const Body = styled.p`
  color: ${colors.lightGrey};
`
