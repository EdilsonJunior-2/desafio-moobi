import React from 'react';
import Carousel from 'react-elastic-carousel';
import Destaques from '../../../assets/destaques.png';
import Beneficio1 from '../../../assets/beneficio-1.png';
import Beneficio2 from '../../../assets/beneficio-2.png';
import { Section, DestaqueImagem } from './styles';

// import { Container } from './styles';

const destaques = [
  {
    id: "1",
    imagem: Destaques,
    titulo: "Ação que exige EPIS e rodízio de profissionais foi ganha na Justiça do Trabalho",
    inicio: `A Justiça do Trabalho deu ganho de causa à ação impetrada pelo Departamento Jurídico do Sinmed sexta-feira, dia 26,
              requerendo direito dos médicos aos EPIs, em caráter de urgência, 
              bem como solicitou que o município de Maceió cumpra o sistema de rodízio recomendado...`
  },
  {
    id: "2",
    imagem: Destaques,
    titulo: "Ação que exige EPIS e rodízio de profissionais foi ganha na Justiça do Trabalho",
    inicio: `A Justiça do Trabalho deu ganho de causa à ação impetrada pelo Departamento Jurídico do Sinmed sexta-feira, dia 26,
              requerendo direito dos médicos aos EPIs, em caráter de urgência, 
              bem como solicitou que o município de Maceió cumpra o sistema de rodízio recomendado...`
  },
  {
    id: "3",
    imagem: Destaques,
    titulo: "Ação que exige EPIS e rodízio de profissionais foi ganha na Justiça do Trabalho",
    inicio: `A Justiça do Trabalho deu ganho de causa à ação impetrada pelo Departamento Jurídico do Sinmed sexta-feira, dia 26,
              requerendo direito dos médicos aos EPIs, em caráter de urgência, 
              bem como solicitou que o município de Maceió cumpra o sistema de rodízio recomendado...`
  },
  {
    id: "4",
    imagem: Destaques,
    titulo: "Ação que exige EPIS e rodízio de profissionais foi ganha na Justiça do Trabalho",
    inicio: `A Justiça do Trabalho deu ganho de causa à ação impetrada pelo Departamento Jurídico do Sinmed sexta-feira, dia 26,
              requerendo direito dos médicos aos EPIs, em caráter de urgência, 
              bem como solicitou que o município de Maceió cumpra o sistema de rodízio recomendado...`
  },
  {
    id: "5",
    imagem: Destaques,
    titulo: "Ação que exige EPIS e rodízio de profissionais foi ganha na Justiça do Trabalho",
    inicio: `A Justiça do Trabalho deu ganho de causa à ação impetrada pelo Departamento Jurídico do Sinmed sexta-feira, dia 26,
              requerendo direito dos médicos aos EPIs, em caráter de urgência, 
              bem como solicitou que o município de Maceió cumpra o sistema de rodízio recomendado...`
  },
];

const beneficios = [
  {
    id: "1",
    imagem: Beneficio1,
    titulo: "Restaurante Janga - Ponta Verde",
    inicio: "A cada prato para duas ou mais pessoas a sobremesa é cortesia para associados"
  },
  {
    id: "2",
    imagem: Beneficio2,
    titulo: "Bodega do Sertão",
    inicio: "10% de desconto aplicado no valor total da conta do associado",    
  },
]

function Secao2() {
  return (
    <Section>
      <div id="div-carrossel">
        <div id="carrossel-titulo">
          Destaques
        </div>
        <Carousel
          className="destaques-carrossel"
          breakPoints={{ width: 1, itemsToShow: 1 }}
          showArrows={false}
          enableAutoPlay
          autoPlaySpeed={5000}

        >
          {destaques.map(destaque => (
            <div className="destaque" key={destaque.id}>
              <DestaqueImagem largura="100%" altura="22vw" imagem={destaque.imagem} className="destaque-imagem" />
              <div className="destaque-titulo">
                {destaque.titulo}
              </div>
              <div className="destaque-inicio">
                {destaque.inicio}
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <div id="beneficios">
        <div id="beneficios-titulo">
            <p>
              Benefícios
            </p>
            <button type="button">
              Ver Tudo
            </button>
        </div>
        {beneficios.map(beneficio => (
          <div className="beneficio" key={beneficio.id}>
            <img src={beneficio.imagem} alt={beneficio.titulo} />
            <div className="beneficio-titulo">
              {beneficio.titulo}
            </div>
            <div className="beneficio-inicio">
              {beneficio.inicio}
            </div>
          </div>
        ))}

      </div>
    </Section>
  );
}

export default Secao2;