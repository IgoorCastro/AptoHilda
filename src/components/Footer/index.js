import React from 'react';
import * as C from './styles';

const Footer = () => {
    return (
        <>
            <C.Container>
                <div className='limiter'>
                    <div>
                        <C.Link href='#aboutUs'>Sobre Nos</C.Link>
                        <C.Link href='#nossosEspacos'>Espaços</C.Link>
                        <C.Link href='#eventos'>Eventos</C.Link>
                        <C.Link href='#anfitriao'>Anfitriões</C.Link>
                        <C.Link href='#contato'>Contato</C.Link>
                    </div>
                    <div>
                        <C.Label>Rua Benedito Macedo, 680 <br />
                            Ponte Alta, Aparecida - SP<br />
                            +55 (12) 99713-5681<br />
                            apartamentoshilda@gmail.com
                        </C.Label>
                    </div>
                    <div>
                        <C.Link href='#nossosEspacos'>10 Pessoas</C.Link>
                        <C.Link href='#apto8'>8 Pessoas</C.Link>
                        <C.Link href='#apto7'>7 Pessoas</C.Link>
                    </div>
                </div>
            </C.Container>


            <C.LowFooter>
                <div className='limiter'>
                    <h3 className='prop-name'>
                        Apartamentos Hilda
                    </h3>
                    <label className='dev-name'>
                        Desenvolvido por: <a href='https://github.com/IgoorCastro'>Igor Castro</a>
                    </label>
                </div>
            </C.LowFooter>
        </>
    )
}

export default Footer