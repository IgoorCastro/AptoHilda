import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";

export const Label = styled.label`
    font-family: Montserrat-Regular;
    font-size: 1.7rem;
    letter-spacing: -1px;

    // border: 1px solid red;

    @media ${breakpoints.xl} {
        font-size: 1.7rem;
    }

    @media ${breakpoints.lg} {
        font-size: 1.4rem;
    }

    @media ${breakpoints.md} {
        font-size: 1rem;
    }

    @media ${breakpoints.sm} {
        font-size: .95rem;
    }

    @media ${breakpoints.xs} {
        font-size: .9rem;
    }
`;