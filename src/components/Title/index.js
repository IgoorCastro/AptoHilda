import React from 'react';
import * as C from './styles'

const Titulo = ({children, style}) => {
  return (
    <C.Title style={style}>
        {children}
    </C.Title>
  )
}

export default Titulo