import React from 'react';
import * as C from './styles'

const Label = ({ children, style }) => {
  return (
    <C.Label style={style}>
        {children}
    </C.Label>
  )
}

export default Label