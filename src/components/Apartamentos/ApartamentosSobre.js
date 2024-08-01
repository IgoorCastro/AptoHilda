import React from 'react';
import styled from 'styled-components';
import breakpoints from '../../styles/breakpoints';

const Container = styled.div`
    width: 40%; // resto do container de 'MainImage'
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media ${breakpoints.lg} {
        width: 90%;
    }
    // border: 1px solid red;
`;

const ApartamentosSobre = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default ApartamentosSobre