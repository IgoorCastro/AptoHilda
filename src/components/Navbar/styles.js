import styled from "styled-components";
import breakpoints from '../../styles/breakpoints';

export const NavBar = styled.div`
    width: 100vw;
    max-width: 100vw;
    // height: 10%;

    // @media ${breakpoints.md} {
    //     height: 9%;
    // }

    // @media ${breakpoints.sm} {
    //     height: 8%;
    // }

    position: fixed;
    top: 0;
    
    z-index: 100; // Certifique-se que o header ficará acima de outros elementos

    display: flex;
    flex-direction: row;
    justify-content: center;

    transition: top 0.3s;

    background: rgba(87,87,87, .5);   
    
    // border: 1px solid green;    
`;

export const NavBarControl = styled.div`
    & > .inLine-menu {
        display: flex;
        @media (${breakpoints.lg}) {
            display: none;
        }
    }

    & > .drop-menu {
        display: none;
        @media (${breakpoints.lg}) {
            display: flex;
        }        
    }

    // border: 1px solid blue;
`;

export const DropMenuLink = styled.a`
    color: inherit; 
    text-decoration: none; 
    outline: none;

    font-size: 2.1rem;

    @media ${breakpoints.xl} {
        font-size: 1.5rem;
    }

    @media ${breakpoints.lg} {
        font-size: 1.4rem;
    }

    @media ${breakpoints.md} {
        font-size: 1.3rem;
    }

    @media ${breakpoints.sm} {
        font-size: 1.2em;
    }

    @media ${breakpoints.xs} {
        font-size: 1rem;
    }

    &:visited, &:hover, &:focus {
        color: inherit; 
        text-decoration: none; 
        outline: none;
    }
`;