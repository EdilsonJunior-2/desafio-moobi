import React from 'react';
import { Section } from './styles';
import Cartaz1 from "../../../assets/cartaz-1.png";
import Cartaz2 from "../../../assets/cartaz-2.png";
// import { Container } from './styles';

function Secao5() {
  return (
    <Section>
      <div className="cartaz">
        <div className="titulo">
          Campanhas
        </div>
        <img src={Cartaz1} alt="cartaz-1" />
      </div>
      <div className="cartaz">
        <div className="titulo">
          Unimed
        </div>
        <img src={Cartaz2} alt="cartaz-2" />
      </div>
    </Section>
  );
}

export default Secao5;