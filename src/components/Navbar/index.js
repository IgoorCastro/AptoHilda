import * as C from './styles';

import { Link, Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../styles/theme';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    const [anchorEl1, setAnchorEl1] = useState(null);
    const [anchorEl2, setAnchorEl2] = useState(null);

    // STATE DE CONTROLE DA NAVBAR
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [navbarStyle, setNavbarStyle] = useState({ top: '0' });

    const open1 = Boolean(anchorEl1);
    const open2 = Boolean(anchorEl2);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > lastScrollTop)
                setNavbarStyle({ top: '-120px' }) // rolando para baixo
            else
                setNavbarStyle({ top: '0' })

            setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop)
        })
    }, [lastScrollTop]);

    const handleClick1 = (event) => {
        setAnchorEl1(event.currentTarget);
    };

    const handleClose1 = () => {
        setAnchorEl1(null);
    };

    const handleClick2 = (event) => {
        setAnchorEl2(event.currentTarget);
    };

    const handleClose2 = () => {
        setAnchorEl2(null);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1699)
                setAnchorEl1(null); // Fechar menu de apartamentos se a tela for menor ou igual a 1699px
            else
                setAnchorEl2(null);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const fontStyle = {
        fontSize: '2.1rem',
        color: '#D9D9D9',
        fontFamily: 'Montserrat-Bold',
    };

    return (
        <ThemeProvider theme={theme}>
            <C.NavBar style={navbarStyle}>
                <Box sx={{ width: '80%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {/* Logo da página */}
                    <Link href="#main" underline="none" sx={{
                        fontSize: {
                            xs: theme.typography.logoText.fontSize.xs,
                            sm: theme.typography.logoText.fontSize.sm,
                            md: theme.typography.logoText.fontSize.md,
                            lg: theme.typography.logoText.fontSize.lg,
                            xl: theme.typography.logoText.fontSize.xl,
                            xxl: theme.typography.logoText.fontSize.xxl
                        }, color: '#D9D9D9', display: 'flex', alignItems: 'center', fontFamily: 'MontserratAlternates-Bold', padding: '25px 0'
                    }}>Apartamentos Hilda</Link>

                    {/* CONTAINER RESPONSIVO */}
                    <C.NavBarControl>
                        <div className='inLine-menu'>
                            <Box sx={{ display: 'flex', justifyContent: 'end', gap: '60px'}}>
                                <Link href="#aboutUs" underline="hover" style={{ fontSize: '1.5rem', color: '#D9D9D9', display: 'flex', alignItems: 'center', whiteSpace: 'nowrap', fontFamily: 'Montserrat-Bold' }}>
                                    {'SOBRE NOS'}
                                </Link>

                                <Button
                                    id="basic-button-1"
                                    aria-controls={open1 ? 'basic-menu-1' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open1 ? 'true' : undefined}
                                    onClick={handleClick1}
                                    style={fontStyle}
                                >
                                    <Link underline="hover" style={{ fontSize: '1.5rem', color: '#D9D9D9', display: 'flex', alignItems: 'center', fontFamily: 'Montserrat-Bold' }} >APARTAMENTOS</Link>
                                </Button>
                                <Menu
                                    id="basic-menu-1"
                                    anchorEl={anchorEl1}
                                    open={open1}
                                    onClose={handleClose1}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button-1',
                                    }}
                                >
                                    <MenuItem onClick={handleClose1}><C.DropMenuLink href='#nossosEspacos'>10 PESSOAS</C.DropMenuLink></MenuItem>
                                    <MenuItem onClick={handleClose1}><C.DropMenuLink href='#apto8'>8 PESSOAS</C.DropMenuLink></MenuItem>
                                    <MenuItem onClick={handleClose1}><C.DropMenuLink href='#apto7'>7 PESSOAS</C.DropMenuLink></MenuItem>
                                </Menu>

                                <Link href="#contato" underline="hover" style={{ fontSize: '1.5rem', color: '#D9D9D9', display: 'flex', alignItems: 'center', fontFamily: 'Montserrat-Bold' }}>
                                    {'CONTATO'}
                                </Link>
                            </Box>
                        </div>

                        {/* Media < 1700 */}
                        <div className='drop-menu'>
                            <div>

                                <Button
                                    id="basic-button-2"
                                    aria-controls={open2 ? 'basic-menu-2' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open2 ? 'true' : undefined}
                                    onClick={handleClick2}
                                >
                                    <MenuIcon className='menu-icon' sx={{
                                        fontSize: {
                                            xs: theme.typography.menuIcon.fontSize.xs,
                                            sm: theme.typography.menuIcon.fontSize.sm,
                                            md: theme.typography.menuIcon.fontSize.md,
                                            lg: theme.typography.menuIcon.fontSize.lg,
                                        },
                                        color: '#D9D9D9'
                                    }} />
                                </Button>
                                <Menu
                                    id="basic-menu-2"
                                    anchorEl={anchorEl2}
                                    open={open2}
                                    onClose={handleClose2}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button-2',
                                    }}
                                    PaperProps={{ style: { position: 'absolute' } }} // Ajuste do posicionamento
                                >
                                    <MenuItem style={{ color: '#1E1E1E', fontFamily: 'Montserrat-Regular' }} onClick={handleClose2}>
                                        <C.DropMenuLink href='#aboutUs' >SOBRE NOS</C.DropMenuLink>
                                    </MenuItem>

                                    <Button
                                        id="basic-button-1"
                                        aria-controls={open1 ? 'basic-menu-1' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open1 ? 'true' : undefined}
                                        onClick={handleClick1}
                                        style={fontStyle}
                                    >
                                        <Link underline="hover" style={{ color: '#1E1E1E', display: 'flex', alignItems: 'center', fontFamily: 'Montserrat-Regular' }} >
                                            <C.DropMenuLink>APARTAMENTOS</C.DropMenuLink>
                                        </Link>
                                    </Button>
                                    <Menu
                                        id="basic-menu-1"
                                        anchorEl={anchorEl1}
                                        open={open1}
                                        onClose={handleClose1}
                                        MenuListProps={{
                                            'aria-labelledby': 'basic-button-1',
                                        }}
                                        PaperProps={{ style: { position: 'absolute' } }} // Ajuste do posicionamento
                                    >
                                        <MenuItem onClick={handleClose1} ><C.DropMenuLink href='#nossosEspacos'>10 PESSOAS</C.DropMenuLink></MenuItem>
                                        <MenuItem onClick={handleClose1} ><C.DropMenuLink href='#apto8'>8 PESSOAS</C.DropMenuLink></MenuItem>
                                        <MenuItem onClick={handleClose1} ><C.DropMenuLink href='#apto7'>7 PESSOAS</C.DropMenuLink></MenuItem>
                                    </Menu>

                                    <MenuItem style={{ fontFamily: 'Montserrat-Regular' }} onClick={handleClose2}><C.DropMenuLink href='#contato'>CONTATO</C.DropMenuLink></MenuItem>
                                </Menu>
                            </div>
                        </div>
                    </C.NavBarControl>
                </Box>
            </C.NavBar>
        </ThemeProvider>
    )
}

export default Navbar