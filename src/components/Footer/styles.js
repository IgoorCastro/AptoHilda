import styled from "styled-components";
import breakpoints from '../../styles/breakpoints'

const flexCenter = `
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.div`
    widith: 100%;
    height: 30vh;

    background: #031021;
    
    ${flexCenter};    
    flex-direction: column;

    & > .limiter {
        width: 100%;
        height: 100%;        
        
        margin: 35px 0;

        ${flexCenter};
        justiy-content: space-between;

        // border: 1px solid orange;

        & > div {
            width: 33.33%;
            height: 100%;

            ${flexCenter};
            flex-direction: column;
            gap: 15px;

            @media ${breakpoints.md} {
                gap: 15px;
            }

            // border: 1px solid red;
        }
    }
`;

export const Link = styled.a`
    color: #ffff;
    font-family: MontserratAlternates-SemiBold;
    font-size: 2.7rem;
    text-decoration: none;

    @media ${breakpoints.xl} {
        font-size: 1.5rem;
    }

    @media (max-width: 1350px) {
        font-size: 1.3rem;
    }

    @media ${breakpoints.md} {
        font-size: 1.3rem;
    }

    @media ${breakpoints.sm} {
        font-size: 1.3rem; 
    }

    @media ${breakpoints.xs} {
        font-size: 1rem; 
    }
`;

export const Label = styled.label`
    color: #ffff;
    font-family: Montserrat-Regular;
    font-size: 2.3rem;
    text-align: center;

    width: 100%;
    overflow-wrap: break-word;

    @media ${breakpoints.xl} {
        font-size: 1.3rem;
    }

    @media (max-width: 1350px) {
        font-size: 1.1rem;
    }

    @media ${breakpoints.md} {
        font-size: 1rem;
    }

    @media ${breakpoints.xs} {
        font-size: .7rem;
    }
`;

export const LowFooter = styled.div`
    width: 100%;
    height: 70px;

    ${flexCenter};

    & > .limiter {
        width: 80%;
        height: 100%;

        ${flexCenter};
        justify-content: space-between;

        & > .prop-name {
            color: #D9D9D9;
            font-family: Montserrat-Bold;
            font-size: 1rem;

            @media ${breakpoints.md} {
                font-size: .8rem;
            }

            @media ${breakpoints.sm} {
                font-size: .7rem;
            }
        }

        & > .dev-name {
            color: #D9D9D9;
            font-size: .9rem;
            letter-spacing: 1px;

            @media ${breakpoints.md} {
                font-size: .7rem;
            }

            @media ${breakpoints.sm} {
                font-size: .6rem;
                letter-spacing: 0px;
            }

            & > a {
                text-decoration: none;
                color: #D9D9D9;

                letter-spacing: 2px;

                font-size: .8rem;

                @media ${breakpoints.md} {
                    font-size: .6rem;
                }

                @media ${breakpoints.sm} {
                    font-size: .5rem;
                    letter-spacing: 1px;
                }
            }
        }
    }   

    background: #13364C;
`;