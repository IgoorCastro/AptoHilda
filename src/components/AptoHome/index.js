import React from 'react';
import * as C from './styles';

import { ThemeProvider } from '@mui/material/styles';
import theme from '../../styles/theme';

import Label from '../../components/Label';
import Button from '@mui/material/Button';

const AptoHome = ({ image, title, text, id, imgPosition = 'left' }) => {
    return (
        <ThemeProvider theme={theme}>

            {imgPosition === 'left' ? (
                <C.Container id={id}>
                    <C.MainImage src={image} />
                    <div className='apto-about'>
                        <C.ImageTitle>{title}</C.ImageTitle>
                        <C.Label style={{ width: '90%' }}>{text}</C.Label>
                        <Button href='#nossosEspacos' variant="contained" color='orange' sx={{
                            color: '#FFFFFF', padding: '8px 15px', width: '90%', height: 'min-content', borderRadius: '1.2rem',
                            marginTop: '25px', whiteSpace: 'nowrap', fontSize: {
                                xs: theme.typography.buttonText.fontSize.xs,
                                sm: theme.typography.buttonText.fontSize.sm,
                                md: theme.typography.buttonText.fontSize.md,
                                lg: theme.typography.buttonText.fontSize.lg,
                                xl: theme.typography.buttonText.fontSize.xl,
                                xxl: theme.typography.buttonText.fontSize.xxl
                            }
                        }}>Checar Disponibilidade</Button>
                    </div>
                </C.Container>
            ) : (
                <C.Container id={id}>                    
                    <div className='apto-about'>
                        <C.ImageTitle>{title}</C.ImageTitle>
                        <C.Label style={{ width: '90%' }}>{text}</C.Label>
                        <Button href='#nossosEspacos' variant="contained" color='orange' sx={{
                            color: '#FFFFFF', padding: '8px 15px', width: '90%', height: 'min-content', borderRadius: '1.2rem',
                            marginTop: '25px', whiteSpace: 'nowrap', fontSize: {
                                xs: theme.typography.buttonText.fontSize.xs,
                                sm: theme.typography.buttonText.fontSize.sm,
                                md: theme.typography.buttonText.fontSize.md,
                                lg: theme.typography.buttonText.fontSize.lg,
                                xl: theme.typography.buttonText.fontSize.xl,
                                xxl: theme.typography.buttonText.fontSize.xxl
                            }
                        }}>Checar Disponibilidade</Button>
                    </div>
                    <C.MainImage src={image} />
                </C.Container>
            )}

        </ThemeProvider>
    )
}

export default AptoHome