import styled from 'styled-components';
import breakpoints from '../../styles/breakpoints';

const flexCenter = `
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

     &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.2); /* Sobreposição escura */
        pointer-events: none; 
    }

    > * {
        position: relative; /* Garante que o conteúdo interno esteja acima do ::before */
    }

    // border: 1px solid purple;
`;

export const LinksContainer = styled.div`
    width: min-content;
    ${flexCenter};
    
    & > .select {
        display: flex;        
        flex-direction: row;
        justify-content: space-around;
        align-items: center;

        &:hover,
            &:focus {
                color: #D3D3D3;
                background: rgba(195, 196, 204, 0.02);
                border-radius: 0.5rem;
            }

            &:disabled {
                opacity: 0.3;
                pointer-events: none;
            }

        & > select {
            display: inline-block;
            width: max-content;
            outline: none;
            border: none;
            border-radius: 0;
            background: none;
            font-family: Montserrat-Bold;

            @media(min-width: 1200px) {
                font-size: 1.25vw;                
            }

            @media(min-width: 600px) and (max-width: 1199px) {
                font-size: 2.3vw;
            }

            @media(min-width: 400px) and (max-width: 599px) {
                font-size: 3.3vw;
            }
            
            @media(min-width: 0px) and (max-width: 399px) {
                font-size: 4.7vw;
            }
            
            letter-spacing: -1px;
            color: #D3D3D3;
            appearance: none;
            cursor: pointer;
            text-transform: uppercase;

            & > option {
                color: #1E1E1E;
                background: rgba(195, 196, 204, .5);
                text-align: center;                
            }

            &:hover,
            &:focus {
                color: #D3D3D3;
            }

            &:disabled {
                opacity: 0.3;
                pointer-events: none;
            }
        }        
    }
`;

export const Main = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    overflow: hidden;

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    box-shadow: 0px 9px 9px 0px rgba(0,0,0,0.3);

    & > .first-text {
        font-family: Montserrat-Bold;
        font-size: 3rem;
        letter-spacing: -2px;
        text-align: center;
        color: #FFFFFF;
        letter-spacing: 2px;

        @media ${breakpoints.xl} {
            font-size: 1.9rem;
        }

        @media ${breakpoints.lg} {
            font-size: 1.9rem;
        }

        @media ${breakpoints.md} {
            font-size: 1.5rem;
        }

        @media ${breakpoints.sm} {
            font-size: 1rem;
        }

        @media ${breakpoints.xs} {
            font-size: .9rem;
        }

        text-transform: uppercase;
    }

    & > .sec-text {
        font-family: MontserratAlternates-Bold;
        font-size: 3.5rem;
        letter-spacing: -2px;
        text-align: center;
        color: #FFFFFF;
        letter-spacing: 2px;

        font-size: 3.5rem;
        margin: 40px 0 25px 0;

        @media ${breakpoints.xl} {
            font-size: 2.9rem;
            margin: 35px 0 25px 0;
        }

        @media ${breakpoints.lg} {
            font-size: 2.6rem;
            margin: 35px 0 25px 0;
        }

        @media ${breakpoints.md} {
            font-size: 2.1rem;
            margin: 35px 0 25px 0;
        }

        @media ${breakpoints.sm} {
            font-size: 1.6rem;
            margin: 25px 0 15px 0;
        }

        @media ${breakpoints.xs} {
            font-size: 1.1rem;
            margin: 25px 0 15px 0;
        }
    }

    // border: 1px solid red;
`;

export const AboutSection = styled.div`
    max-width: 100%;
    height: 60vh;

    // border: 1px solid red;

    @media (max-height: 420px) {
        height: 120vh;
    }

    @media ${breakpoints.md} {
        height: 80vh;
        padding: 50px 0;    
    }

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > .limiter {
        width: 80%;

        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const EspacosSection = styled.div`
    width: 100%;
    padding: 100px 0;

    @media ${breakpoints.md} {
        padding: 50px 0;
    }

    background: #60574E;

    ${flexCenter}

    // border: 1px solid red;

    & > .limiter {
        width: 80%; 
        height: 100%;   

        ${flexCenter}
        flex-direction: column;
        
        // border: 1px solid blue;
    }
`;

export const EventosSection = styled.div`
    width: 100%;
    height: 50vh;

    padding: 100px 0;
    

    @media ${breakpoints.md} {
        height: 70vh;
        padding: 50px 0;
    }

    @media (max-height: 420px) {
        height: 200vh;
    }

    display: flex;
    justify-content: center;

    & > .limiter {
        width: 90%; 
        height: 90%;  

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        & > .card-container {
            height: 100%;
            display: grid;
            gap: 35px;

            grid-template-columns: repeat(3, 360px);

            @media ${breakpoints.xl} {
                grid-template-columns: repeat(3, 360px);
            }

            @media ${breakpoints.lg} {
                grid-template-columns: repeat(2, 480px);
                height: 70%;
            }

            @media (max-width: 1050px) {
                grid-template-columns: repeat(2, 400px);
                height: 70%;
            }

            @media ${breakpoints.md} {
                grid-template-columns: repeat(1, 280px);
                gap: 10px;
                height: 80%;
            }

            @media ${breakpoints.sm} {
                grid-template-columns: repeat(1, 210px);
            }

            @media ${breakpoints.xs} {
                grid-template-columns: repeat(1, 200px);
            }

            // border: 1px solid red;
        }
        
        // border: 1px solid blue;
    }

    // border: 1px solid red;
`;

export const AnfitriaoSection = styled.div`
    width: 100%;
    height: 100vh;
    

    padding: 100px 0;

    @media ${breakpoints.md} {
        padding: 50px 0;
        max-height: 750px;
    }

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: #031021;
    // padding-bottom: 200px;
    
    // border: 1px solid red;

    // @media (max-height: 420px) {
    //     height: 200vh;
    // }

    // @media ${breakpoints.xl} {
    //     padding-bottom: 190px;
    // }

    // @media ${breakpoints.lg} {
    //     padding-bottom: 160px;
    // }

    // @media (max-width: 1050px) {
    //     padding-bottom: 160px;
    // }

    // @media ${breakpoints.md} {
    //     padding-bottom: 130px;
    // }

    // @media ${breakpoints.sm} {
    //     padding-bottom: 100px;
    // }

    // @media ${breakpoints.xs} {
    //     padding-bottom: 50px;
    // }

    & > .limiter {  
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        gap: 30px;  

        // border: 1px solid orange;  

        @media ${breakpoints.xl} {
            width: 55%;
        }

        @media ${breakpoints.lg} {
            width: 70%;
        }

        @media (max-width: 1050px) {
            width: 90%;
        }

        @media ${breakpoints.md} {
            width: 90%;
        }

        @media ${breakpoints.sm} {
            width: 90%;
        }

        @media ${breakpoints.xs} {
            width: 90%;
        }       

        & > .afintriaoContent {
            width: 100%;
            height: 48%;
            display: flex;

            // border: 1px solid blue;

            & > img {
                width: 50%;
                height: auto;
                max-height: 100%;
                aspect-ratio: 1/1;

                @media ${breakpoints.sm} {
                    width: 60%;
                }

                overflow: hidden;
                object-fit: cover;
                // border: 1px solid red;
            }

            & > div {
                width: 50%;

                display: flex;
                flex-direction: column;
                justify-content: center;
                align-item: center;

                // border: 1px solid red;
                & > h3 {
                    color: #ffff;
                    font-family: MontserratAlternates-Regular;
                    font-size: 3.8rem;
                    margin: 0 35px 0 35px;

                    @media ${breakpoints.xl} {
                        font-size: 2.7rem;
                    }

                    @media ${breakpoints.lg} {
                        font-size: 2.5rem;
                        margin: 0 18px 0 18px;
                    }

                    @media ${breakpoints.md} {
                        font-size: 2rem;
                        margin: 0 0 16px 16px;
                    }

                    @media ${breakpoints.sm} {
                        font-size: 1.5rem;
                        margin: 0 15px 0 15px;
                    }

                    @media ${breakpoints.xs} {
                        font-size: 1rem;
                        margin: 0 0 10px 10px;
                    }
                }

                & > label {
                    color: #ffff;
                    font-family: Montserrat-Regular;
                    font-size: 3rem;
                    margin: 15px 35px 0 35px;

                    @media ${breakpoints.xl} {
                        font-size: 1.3rem;
                    }

                    @media ${breakpoints.lg} {
                        font-size: 1rem;                    
                        margin: 0 18px 0 18px;
                    }

                    @media (max-width: 1350px) {
                        font-size: 1rem;
                    }

                    @media ${breakpoints.md} {
                        font-size: .9rem;
                        margin: 0 16px 0 16px;
                    }

                    @media ${breakpoints.sm} {
                        font-size: .9rem;
                        margin: 0 15px 0 15px;
                    }

                    @media ${breakpoints.xs} {
                        font-size: .8rem;  
                        margin: 0 10px 0 10px;
                    }
                }
            }

            border: 1px solid #1E1E1E;
        }        
    }
`;

export const ContatoSection = styled.div`
    width: 100%;
    height: 40vh;

    padding: 100px 0;

    ${flexCenter};

    // border: 1px solid red;

    @media (max-height: 420px) {
        height: 100vh;
    }

    @media ${breakpoints.md} {
        padding: 50px 0;
    }

    & > .contato-container {
        width: 80%;
        height: 100%;

        // border: 1px solid red;

        ${flexCenter};
        flex-direction: column;

         @media ${breakpoints.md} {
            width: 100%;
        }
        
        & > .icon-container {
            width: 100%;
            ${flexCenter};
            gap: 70px;

            @media ${breakpoints.lg} {
                gap: 25px;
                height: 23%;
            }

            @media (max-width: 1050px) {
                gap: 25px;
                height: 21%;
            }

            @media ${breakpoints.md} {
                gap: 23px;
                height: 17%;
            }

            @media ${breakpoints.sm} {
                gap: 20px;
                height: 15%;
            }

            @media ${breakpoints.xs} {
                height: 13%;
            }

            & > img {
                height: 70%;
                width: auto;

                @media ${breakpoints.xs} {
                    width: 10%;
                }

                aspect-ratio: 1/1;
                cursor: pointer;
            }
        }
    }
`;

export const LocalSection = styled.div`
    width: 100%;
    height: 80vh;

    padding: 100px 0;

    // border: 1px solid red;

    @media ${breakpoints.lg} {
        height: 60vh;
    }

    @media ${breakpoints.md} {
        padding: 50px 0;
    }

    @media (max-height: 420px) {
        height: 150vh;
    }

    ${flexCenter};

    & > .limiter {
        width: 60%;

        @media (max-width: 1200px) {
            width: 80%;
        }

        height: 100%;

        ${flexCenter};  
        flex-direction: column;      
        justify-content: start;

        & > iframe {
            width: 100%;
            height: 100%;

            margin-bottom: 15px;
        }

        // border: 1px solid red;
    }
`;