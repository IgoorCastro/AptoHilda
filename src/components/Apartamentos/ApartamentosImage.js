import React from 'react';
import styled from 'styled-components';
import breakpoints from '../../styles/breakpoints';

const MainImage = styled.img`
    width: 60%;
    
    @media ${breakpoints.xl} {
        font-size: 3.2rem;
    }

    @media ${breakpoints.lg} {
        width: 90%;
    }

    @media ${breakpoints.md} {
        font-size: 2.9rem;
    }

    @media ${breakpoints.sm} {
        font-size: 2.2rem;
    }

    @media ${breakpoints.xs} {
        width: 90%;
    }

    -webkit-box-shadow: 8px 8px 10px -11px rgba(66, 68, 90, 1);
    -moz-box-shadow: 8px 8px 10px -11px rgba(66, 68, 90, 1);
    box-shadow: 8px 8px 10px -6px rgba(66, 68, 90, 1);
`;

const ApartamentosImage = ({ image }) => {
  return (
    <MainImage src={image} />
  )
}

export default ApartamentosImage