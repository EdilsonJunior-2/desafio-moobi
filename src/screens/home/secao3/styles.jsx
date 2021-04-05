import styled from 'styled-components';

export const Section = styled.section`
    width: 64%;
    padding: 10px 18%;

    #titulo{
        display: flex;
        justify-content: space-between;
        align-items: center;
        p{
            font-size: 24px;
            font-family: Montserrat-Regular;
            color: #145c2a;
        }
        button{
            background-color: #129238;
            color: white;
            padding: 5px 10px;
            border: none;
            border-radius: 15px;
            cursor: pointer;
            transition: 400ms;

            &:hover{
                background-color: #007017;
            }
        }
    }

    #noticias{
        margin: 0 2%;
        width: 96%;
        display: grid;
        grid-template-columns: 23.5% 23.5% 23.5% 23.5%;
        grid-gap: 2%;
        padding-bottom: 20px;
        .noticia{
            display: flex;
            flex-direction: column;
            align-items: center;

            .data-noticia{
                width: 100%;
                font-size: 12px;
                margin: 5px 0;
                font-family: Montserrat-Regular;
                color: #145c2a;
            }

            .titulo-noticia{
                width: 100%;
                font-size: 12px;
                font-family: Montserrat-SemiBold;
                color: #145c2a;
            }
        }
    }
`;

export const ImagemNoticia = styled.div`
    height: 150px;
    width: 100%;
    background-image: url(${props => props.imagem});
    background-size: cover;
    border-radius: 15px;
`;