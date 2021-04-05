import React from 'react';
import { Section, ImagemNoticia } from './styles';
import Noticia1 from '../../../assets/noticia-1.png';
import Noticia2 from '../../../assets/noticia-2.png';
import Noticia3 from '../../../assets/noticia-3.png';
import Noticia4 from '../../../assets/noticia-4.png';

const elementos = [
  {
    id: "1",
    imagem: Noticia2,
    data: "26/03/2020",
    titulo: "Categoria mantém expecativa com percentual de reajuste a ser anunciado no dia 19",
  },
  {
    id: "2",
    imagem: Noticia1,
    data: "10/03/2020",
    titulo: "Seguimos visitando as unidades de saúde",
  },
  {
    id: "3",
    imagem: Noticia3,
    data: "16/02/2020",
    titulo: "Acusação contra médicos de Palmeira é leviana",
  },
  {
    id: "4",
    imagem: Noticia4,
    data: "09/02/2020",
    titulo: "Pelo reajuste na bolsa de Residência dos medicos Alagoanos",
  },
];


// import { Container } from './styles';

function Secao3() {
  return (
    <Section>
      <div id="titulo">
        <p>Notícias</p>
        <button>Ver Tudo</button>
      </div>
      <div id="noticias">
        {elementos.map(elemento => (
          <div className="noticia" key={elemento.id}>
            <ImagemNoticia imagem={elemento.imagem} />
            <div className="data-noticia">
              {elemento.data}
            </div>
            <div className="titulo-noticia">
              {elemento.titulo}
            </div>
          </div>
        ))}
      </div>
    </Section>
    );
}

export default Secao3;