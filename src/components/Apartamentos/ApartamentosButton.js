import React from 'react';
import theme from '../../styles/theme';
import Button from '@mui/material/Button';

const ApartamentosButton = ({ text }) => {
  return (
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
    }}>
        {text}
    </Button>
  )
}

export default ApartamentosButton