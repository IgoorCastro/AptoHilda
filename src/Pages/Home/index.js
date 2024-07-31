import * as C from './styles';
import imgTest from '../../assets/test9.jpg'; // lista --> test 5, test9, test10
import apto10Img from '../../assets/apto10.JPG';
import apto8Img from '../../assets/apt8.jpg';
import apto7Img from '../../assets/apto7.JPG';
import festaAparecida from '../../assets/festaAparecida.png';
import leo from '../../assets/leo202006.jpg';
import airbnbIcon from '../../assets/icons/airbnb2.svg';
import facebookIcon from '../../assets/icons/facebook2.svg';
import whatsappIcon from '../../assets/icons/whatsapp2.svg';
import gmailIcon from '../../assets/icons/gmail2.svg';
import bookingIcon from '../../assets/icons/booking2.svg';

import AptoHome  from '../../components/AptoHome';
import EventCard from '../../components/EventCard';
import Footer from '../../components/Footer';
import Title from '../../components/Title';
import Label from '../../components/Label';
import Navbar from '../../components/Navbar';

import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../styles/theme';


const Home = () => {
    const aptoInfo = [
        {
            image: apto10Img,
            title: '10 Pessoas',
            text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia. Latin literature from 45 BC.',
            id: 'apto10'
        },
        {
            image: apto8Img,
            title: '8 Pessoas',
            text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia. Latin literature from 45 BC.',
            id: 'apto8',
            imgPosition: 'right'
        },
        {
            image: apto7Img,
            title: '7 Pessoas',
            text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia. Latin literature from 45 BC.',
            id: 'apto7'
        }
    ]

    const aptoLinks = {
        airbnb: 'https://www.airbnb.com.br/users/show/227188859',
        booking: 'https://www.booking.com/hotel/br/apartamento-para-10-pessoas-proximo-a-basilica.pt-br.html',
        facebook: 'https://www.facebook.com/profile.php?id=100091876025553',
        gmail: 'mailto:apartamentohilda@gmail.com',
        whatsapp: 'https://w.app/ApartamentoHilda'
    }
    

    return (
        <ThemeProvider theme={theme}>
            <C.Container>
                <Navbar />

                <C.Main id='main' style={{ backgroundImage: `url(${imgTest})` }}>
                    <h3 className='first-text'>CONFORTO E ECONOMIA <br /> EM APARECIDA - SP</h3>
                    <h3 className='sec-text'>Conheça Nossos Espaços</h3>
                    <Button href='#nossosEspacos' variant="contained" color='orange' sx={{
                        color: '#FFFFFF', padding: '8px 25px', borderRadius: '1.2rem', fontSize: {
                            xs: theme.typography.buttonText.fontSize.xs,
                            sm: theme.typography.buttonText.fontSize.sm,
                            md: theme.typography.buttonText.fontSize.md,
                            lg: theme.typography.buttonText.fontSize.lg,
                            xl: theme.typography.buttonText.fontSize.xl,
                            xxl: theme.typography.buttonText.fontSize.xxl
                        }
                    }}>Agendar Agora</Button>
                </C.Main>

                <C.AboutSection id='aboutUs'>
                    <div className='limiter'>
                        <Title style={{ margin: '0 0 30px 0'}}>
                            Sobre Nos
                        </Title>
                        <Label style={{ textAlign: 'center' }}>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.<br/><br/>

                            Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.<br/><br/>

                            Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                        </Label>
                    </div>
                </C.AboutSection>

                <C.EspacosSection id='nossosEspacos'>
                    <div className='limiter'>
                        <Title>Nossos Espaços</Title>
                        
                        {aptoInfo.map((item, index) => {
                            return <AptoHome key={index} id={item.id} image={item.image} title={item.title} text={item.text} imgPosition={item.imgPosition} />
                        })}                    

                    </div>
                </C.EspacosSection>

                <C.EventosSection id='eventos'>
                    <div className='limiter'>
                        <Title style={{ margin: '0 0 30px 0' }}>Eventos Locais</Title>
                        
                        <div className='card-container'>
                            <EventCard day='20' month='AGO' src={festaAparecida} title='Festa de Nossa Senhora Aparecida' label='Festa tradicional na cidade' />
                            <EventCard day='20' month='AGO' src={festaAparecida} title='Festa de Nossa Senhora Aparecida' label='Festa tradicional na cidade' />
                        </div>

                    </div>
                </C.EventosSection>

                <C.AnfitriaoSection id='anfitriao'>
                <Title style={{ color: '#D9D9D9'}}>Anfitriões</Title>
                    <div className='limiter'>

                        <div className='afintriaoContent'>
                            <img src={leo} alt='' />
                            <div>
                                <h3>Léo</h3>
                                <label>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. 
                                Richard McClintock, a Latin professor at Hampden-Sydney.</label>
                            </div>
                        </div>   

                        <div className='afintriaoContent'>
                            <div>
                                <h3>Valéria</h3>
                                <label>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. 
                                Richard McClintock, a Latin professor at Hampden-Sydney.</label>
                            </div>
                            <img src={apto7Img} alt='' />
                        </div>                                           

                    </div>
                </C.AnfitriaoSection>

                <C.ContatoSection id='contato'>
                    <div className='contato-container'>
                        <Title style={{ margin: '0 0 30px 0'}} >Contatos</Title>
                        <div className='icon-container'>
                            <img src={airbnbIcon} alt='' onClick={() => window.open(aptoLinks.airbnb, '_blank')} />
                            <img src={facebookIcon} alt='' onClick={() => window.open(aptoLinks.facebook, '_blank')} />
                            <img src={whatsappIcon} alt='' onClick={() => window.open(aptoLinks.whatsapp, '_blank')} />
                            <img src={gmailIcon} alt='' onClick={() => window.open(aptoLinks.gmail, '_blank')} />
                            <img src={bookingIcon} alt='' onClick={() => window.open(aptoLinks.booking, '_blank')} />
                        </div>
                        <Label style={{ textAlign: 'center', width: '90%', marginTop: '30px' }}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. </Label>
                    </div>
                </C.ContatoSection>

                <C.LocalSection>
                    <div className='limiter'>
                        <Title>Localização</Title>

                        <iframe title='mapa-local' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d919.2349669580166!2d-45.23222631487042!3d-22.841714125914482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ccc32b4f7cd20b%3A0x5770c7903dc7c992!2sApartamentos%20Hilda...%20L%C3%A9o%20e%20Val%C3%A9ria!5e0!3m2!1spt-BR!2sbr!4v1722383040391!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                        <Label style={{ textAlign: 'center' }}>Rua Benedito Macedo, 680 - Ponte Alta, Aparecida - SP</Label>

                    </div>
                </C.LocalSection>

                <Footer />
            </C.Container>
        </ThemeProvider>
    )
}

export default Home
