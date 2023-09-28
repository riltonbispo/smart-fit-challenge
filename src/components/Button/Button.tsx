import React, { InputHTMLAttributes } from 'react'
import * as C from './style'

type ButtonProps = {
  variant: 'primary' | 'secondary'
} & InputHTMLAttributes<HTMLInputElement>

const Button = ({ variant, ...rest }: ButtonProps) => {
  return <C.Button $variant={variant} {...rest} />
}

export default Button
