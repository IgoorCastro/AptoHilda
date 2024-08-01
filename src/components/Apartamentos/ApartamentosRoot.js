import React from 'react';
import styled from 'styled-components';
import breakpoints from '../../styles/breakpoints';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../styles/theme';

const Container = styled.div`
    width: 100%;

    display: flex;
    margin-bottom: 60px;

    @media ${breakpoints.lg} {
        flex-direction: column;
        align-items: center;
    }
`;

const ApartamentosRoot = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <Container>
                {children}
            </Container>
        </ThemeProvider>
    )
}

export default ApartamentosRoot