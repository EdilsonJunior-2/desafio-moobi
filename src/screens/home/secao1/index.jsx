import React from 'react';
import Logo from '../../../assets/logo.png';
import Doctor from '../../../assets/icons/doctor.jsx';
import { Section } from './styles';

// import { Container } from './styles';

function Secao1() {
    return (
        <Section>
            <img id="logo" src={Logo} alt="logo" />
            <button id="botao-filiado" type="button" >
                <Doctor />
                Área do Filiado
            </button>
        </Section>
    );
}

export default Secao1;