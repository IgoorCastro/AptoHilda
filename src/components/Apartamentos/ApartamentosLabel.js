import React from 'react';
import styled from 'styled-components';
import breakpoints from '../../styles/breakpoints';

export const Label = styled.label`
    font-family: Montserrat-Regular;
    font-size: 1.7rem;
    letter-spacing: -1px;
    text-align: center;
    width: 90%;

    // border: 1px solid red;

    @media ${breakpoints.xl} {
        font-size: 1.5rem;
    }

    @media ${breakpoints.lg} {
        font-size: 1.2rem;
    }

    @media ${breakpoints.md} {
        font-size: 1.1rem;
    }

    @media ${breakpoints.sm} {
        font-size: 1rem;
    }

    @media ${breakpoints.xs} {
        font-size: .85rem;
    }
`;

const ApartamentosLabel = ({ children }) => {
  return (
    <Label>
        {children}
    </Label>
  )
}

export default ApartamentosLabel