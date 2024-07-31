import { createTheme } from '@mui/material/styles';
import { light } from '@mui/material/styles/createPalette';

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,   // extra-small
            sm: 430, // small
            md: 640, // medium
            lg: 768, // large
            xl: 1700, // extra-large
            xxl: 3200
        }
    },
    typography: {
        menuIcon: {
            fontSize: {
                xs: '2rem',   // extra-small
                sm: '3rem', // small
                md: '4rem', // medium
                lg: '5rem', // large
                xl: '3rem', // extra-large
                xxl: '3.5rem'
            }
        },
        logoText: {
            fontSize: {
                xs: '1.2rem',   // extra-small
                sm: '1.4rem', // small
                md: '1.7rem', // medium
                lg: '2.2rem', // large
                xl: '2rem', // extra-large
                xxl: '1.8rem'
            }
        },
        buttonText: {
            fontSize: {
                xs: '1rem',   // extra-small
                sm: '1.2rem', // small
                md: '1.4rem', // medium
                lg: '1.6rem', // large
                xl: '1.8rem', // extra-large
                xxl: '2.5rem'
            }
        },
    },
    palette: {
        orange: {
            main: '#D03E0B',
            light: '#EB8857',
            dark: '#8E2F0E'
        }
    }
});

export default theme;
