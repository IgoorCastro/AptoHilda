import React from 'react';
import styled from 'styled-components';
import breakpoints from '../../styles/breakpoints';

export const ImageTitle = styled.h3`
    font-family: MontserratAlternates-Light;
    font-size: 3.5rem;
    letter-spacing: -2px;
    width: 90%;
    text-align: left;
    margin: 0 0 15px 0;

    height: min-content;

    @media ${breakpoints.xl} {
        font-size: 2.7rem;
    }

    @media ${breakpoints.lg} {
        font-size: 2.5rem;

        margin: 50px 0 15px 0;
    }

    @media ${breakpoints.md} {
        font-size: 2rem;
    }

    @media ${breakpoints.sm} {
        font-size: 1.5rem;
    }

    @media ${breakpoints.xs} {
        font-size: 1rem;
        margin: 20px 0 10px 0;
    }
`;

export const ApartamentosTitle = ({ title }) => {
  return (
    <ImageTitle>
        {title}
    </ImageTitle>
  )
}
