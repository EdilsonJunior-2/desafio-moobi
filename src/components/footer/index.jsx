import React from 'react';
import Map from "../Map";
import Logo from "../../assets/logo-white.png";
import SindicaliziLogo from "../../assets/sindicalizi-logo.png";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import { Linha1, Linha2, Linha3 } from "./styles";

// import { Container } from './styles';

function Footer() {
    return (
        <div>
            <Linha1>
                <section>
                    <img src={Logo} alt="logo" />
                    <div id="contato">
                        <div id="telefone">
                            (82) 3221-0461
                    </div>
                        <div className="email">
                            comunicacao@sinmedal.com.br
                    </div>
                        <div className="email">
                            diretoria@sinmedal.com.br
                    </div>
                    </div>
                </section>
                <section>
                    <div className="evento">
                        <div className="data">
                            <div className="dia">
                                13
                        </div>
                            <div className="mes">
                                MAI
                        </div>
                        </div>
                        <div className="descricao">
                            Encontro para discussão do reajuste salaial da classe em 2020
                    </div>
                    </div>
                    <div className="evento">
                        <div className="data">
                            <div className="dia">
                                22
                        </div>
                            <div className="mes">
                                MAI
                        </div>
                        </div>
                        <div className="descricao">
                            Passeata em prol de melhores condições de trabalho
                    </div>
                    </div>
                </section>
            </Linha1>
            <Linha2>
                <section>
                    <Map />
                    <div id="endereco">
                        <div className="linha-endereco">
                            R. Prof. Teônilo Gama, 186 - Trapiche da Barra
                    </div>
                        <div className="linha-endereco">
                            Maceió/AL CEP: 57010-384
                    </div>
                        <div id="aberto">
                            Aberto de Segunda a Sexta das 8h às 12h e das 14h às 18h
                    </div>
                    </div>
                </section>
                <div id="redes-sociais">
                    <FacebookIcon className="icon" />
                    <InstagramIcon className="icon" />
                </div>
            </Linha2>
            <Linha3>
                <div>
                    @ Copyright 2020 - SINMED. Todos os direitos reservados
                </div>
                <img src={SindicaliziLogo} alt="sindicalizi-logo" />
            </Linha3>
        </div>
    );
}

export default Footer;