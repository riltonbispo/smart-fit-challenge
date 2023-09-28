import Image from 'next/image'
import React from 'react'
import logo from '@/assets/logo.svg'
import * as C from './style'
import { Container } from '@/styles/utils'

function Header() {
  return (
    <>
      <C.Header>
        <Image src={logo} height={100} width={100} alt="logo" />
      </C.Header>
      <Container>
        <C.Content>
          <C.Title>
            Reabertura <br /> smart fit
          </C.Title>
          <C.Divider />
          <C.Body>
            O horário de funcionamento das nossas unidades está seguindo os
            decretos de cada município. Por isso, confira aqui se a sua unidade
            está aberta e as medidas de segurança que estamos seguindo.
          </C.Body>
        </C.Content>
      </Container>
    </>
  )
}

export default Header
