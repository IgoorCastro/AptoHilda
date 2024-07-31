import styled from "styled-components";
import breakpoints from '../../styles/breakpoints';

export const Container = styled.div`
    width: 360px;
    height: 100%;
    position: relative;

    display: flex;
    flex-direction: column;
    justify-conten: start;
    align-items: center;
    overflow: hidden;

    @media ${breakpoints.xl} {
        width: 360px;        
    }

    @media ${breakpoints.lg} {
        width: 480px;
        
    }

    @media (max-width: 1050px) {
        width: 400px;
    }

    @media ${breakpoints.md} {
        width: 280px;
        height: 100%;
    }

    @media ${breakpoints.sm} {
        width: 210px;        
    }

    @media ${breakpoints.xs} {
        width: 200px;        
    }

    & > img {
        height: 70%;
        width: auto;

        min-width: 100%;

        @media ${breakpoints.md} {
            height: 60%;
        }
    }

    & > h4 {
        font-family: MontserratAlternates-Regular;
        font-size: 2.3rem;
        letter-spacing: 1px;
        margin: 20px 0 10px;
        text-align: center;

        @media ${breakpoints.xl} {
            font-size: 1.8rem;
        }

        @media ${breakpoints.lg} {
            font-size: 1.3rem;
        }

        @media ${breakpoints.md} {
            font-size: 1.1rem;
            margin: 8px 0 3px;
        }

        @media ${breakpoints.sm} {
            font-size: 1rem;
        }

        @media ${breakpoints.xs} {
            font-size: .8rem;
        }
    }

    & > label {
        font-family: Montserrat-Regular
        font-size: 2rem;
        text-align: center;

        @media ${breakpoints.xl} {
            font-size: 1.3rem;
        }

        @media ${breakpoints.lg} {
            font-size: 1rem;
        }

        @media ${breakpoints.md} {
            font-size: .9rem;
        }

        @media ${breakpoints.sm} {
            font-size: .8rem;
        }

        @media ${breakpoints.xs} {
            font-size: .7rem;
        }
    }

    border: 1px solid #1E1E1E;
`;

export const DateContainer = styled.div`
    position: absolute;
    left: 0;
    width: 23%;
    height: auto;
    aspect-ratio: 1/1;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & > .day {
        color: #FFFFFF;
        font-family: MontserratAlternates-SemiBold;
        font-size: 2rem;

        @media ${breakpoints.xl} {
            font-size: 2rem;
        }

        @media ${breakpoints.lg} {
            font-size: 1.9rem;
        }

        @media ${breakpoints.md} {
            font-size: 1.5rem;
        }

        @media ${breakpoints.sm} {
            font-size: 1.3rem;
        }

        @media ${breakpoints.xs} {
            font-size: 1.1rem;
        }
    }

    & > .month {
        color: #FFFFFF;
        font-family: MontserratAlternates-ExtraLight;
        font-size: 2.4rem;

        @media ${breakpoints.xl} {
            font-size: 2.2rem;
        }

        @media ${breakpoints.lg} {
            font-size: 2rem;
        }

        @media ${breakpoints.md} {
            font-size: 1.5rem;
        }

        @media ${breakpoints.sm} {
            font-size: 1.3rem;
        }

        @media ${breakpoints.xs} {
            font-size: 1.1rem;
        }
    }

    background: #D03E0B;

    // border: 1px solid orange;
`;