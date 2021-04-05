import React from 'react';
import { Section } from './styles';
import LogoMini from '../../../assets/logo-mini.png';
import Medkit from '../../../assets/medkit.png';
import Planilha from '../../../assets/planilha.png';
import Doctor from '../../../assets/doctor.png';
import Boletim from '../../../assets/boletim.png';

// import { Container } from './styles';

const elementos = [
  {
    imagem: LogoMini,
    titulo: "Ouvidoria",
    texto: "Sugestões, crítias e elogios",
  },
  {
    imagem: Medkit,
    titulo: "PCCV Download",
    texto: "Valorizando a carreira médica",
  },
  {
    imagem: Planilha,
    titulo: "Convenção Coletiva",
    texto: "Convenção 2020",
  },
  {
    imagem: Doctor,
    titulo: "Atenção Plantonista",
    texto: "Conheça os seus direitos",
  },
  {
    imagem: Boletim,
    titulo: "Cadastro Boletim",
    texto: "Emails com notícias semanais",
  }
]

function Secao4() {
  return (
    <Section>
      {elementos.map(elemento => (
        <>
        <div key={elemento.titulo} className="elemento">
          <img src={elemento.imagem} alt={elemento.titulo} />
          <div className="titulo">{elemento.titulo}</div>
          <div className="texto">{elemento.texto}</div>
        </div>
        </>
      ))}

    </Section>
  );
}

export default Secao4;