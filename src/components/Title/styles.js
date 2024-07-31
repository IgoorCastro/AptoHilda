import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";

export const Title = styled.h1`
    font-family: MontserratAlternates-Bold;
    font-size: 3.3rem;
    letter-spacing: -2px;

    color: #1E1E1E;

    margin: 200px 0 60px 0;

    height: min-content;

    @media ${breakpoints.xl} {
        font-size: 2.8rem;
        margin: 130px 0 50px 0;
    }

    @media ${breakpoints.lg} {
        font-size: 2.5rem;
        margin: 120px 0 40px 0;
    }

    @media ${breakpoints.md} {
        font-size: 2rem;
        margin: 110px 0 30px 0;
    }

    @media ${breakpoints.sm} {
        font-size: 1.5rem;
        margin: 100px 0 30px 0;
    }

    @media ${breakpoints.xs} {
        font-size: 1rem;
        margin: 50px 0 30px 0;
    }
`;