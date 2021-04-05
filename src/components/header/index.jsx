import React from 'react';
import { NavBar } from "./styles";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import SearchIcon from '@material-ui/icons/Search';

// import { Container } from './styles';

function Header() {
  return (
    <div>
        <div>
            <NavBar>
                <div id="options" >
                    <div>
                        Home
                    </div>
                    <div>
                        Institucional
                    </div>
                    <div>
                        Serviços
                    </div>
                    <div>
                        Notícias
                    </div>
                    <div>
                        Comunicação
                    </div>
                    <div>
                        Benefícios Sinmed
                   </div>
                    <div>
                        Fale Conosco
                    </div>
                </div>
                <div id="icons">
                    <FacebookIcon className="icon" />
                    <InstagramIcon className="icon" />
                    <SearchIcon className="icon" />
                    <div id="associe-se">
                        <InstagramIcon />
                        Associe-se
                    </div>
                </div>
            </NavBar>
        </div>
    </div>
    );
}

export default Header;