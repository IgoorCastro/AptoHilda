import styled from "styled-components";
import breakpoints from '../../styles/breakpoints';

export const Container = styled.div`
    width: 100%;

    display: flex;

    margin-bottom: 60px;

    @media ${breakpoints.lg} {
        flex-direction: column;
        align-items: center;
    }

    & > .apto-about {
        width: 40%; // resto do container de 'MainImage'

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        @media ${breakpoints.lg} {
            width: 90%;
        }

        // border: 1px solid red;
    }
`;

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

export const MainImage = styled.img`
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
    
`;

export const Label = styled.label`
    font-family: Montserrat-Regular;
    font-size: 1.7rem;
    letter-spacing: -1px;

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