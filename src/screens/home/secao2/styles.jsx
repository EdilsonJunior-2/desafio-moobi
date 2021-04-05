import styled from 'styled-components';

export const Section = styled.section`
    width: 64%;
    padding: 10px 18%;
    display: grid;
    grid-template-columns: 71% 25%;
    grid-gap: 4%;
    #div-carrossel{
        #carrossel-titulo{
            font-size: 24px;
            margin: 10px 0;
            font-family: Montserrat-Regular;
            color: #145c2a;
        }
        .destaques-carrossel{
            .rec-carousel{
                .rec-slider-container{
                    .rec-slider{
                        .rec-swipable{
                            .rec-carousel-item{
                                .rec-item-wrapper{
                                    .destaque{
                                        cursor: pointer;
                                        outline: none;
                                        width: 95%;
                                        margin: 0 2.5%;

                                        .destaque-titulo{
                                            font-family: Montserrat-SemiBold;
                                            color: #145c2a;
                                            margin: 10px 0;
                                            font-size: 18px;
                                        }

                                        .destaque-inicio{
                                            font-size: 13px;
                                            font-family: Montserrat-Regular;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            .rec-pagination{
                position: absolute;
                margin-top: -30px;
                margin-left: 35%;
                
                button.rec-dot{
                    background-color: #bbb;
                    box-shadow: none;
                }
                  
                button.rec-dot:hover, button.rec-dot_active, button.rec-dot:focus  {
                   background-color: #129238;
                   transform: scale(1.1);
                }

                @media (max-width: 1300px){
                    margin-left: 45%;
                }
            }
        }
    }

    #beneficios{
        #beneficios-titulo{
            display: flex;
            justify-content: space-between;
            align-items: center;

            p{
                font-size: 24px;
                font-family: Montserrat-Regular;
                margin: 10px 0;
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

        .beneficio{

            margin-bottom: 10px;
            img{
                border-radius: 10px;
                width: 100%;
            }
            .beneficio-titulo{
                font-family: Montserrat-SemiBold;
                font-size: 15px;
                color: #145c2a;
            }
            .beneficio-inicio{
                font-family: Montserrat-Regular;
                font-size: 12px;
            }
        }
    }
    @media (max-width: 1300px){
        width: 85%;
        padding: 10px 7.5%;
    }
`;

export const DestaqueImagem = styled.div`
    width: ${props => props.largura};
    background-image: url(${props => props.imagem});
    background-size: cover;
    border-radius: 10px;
    height: ${props => props.altura};
    transition: 400ms;

    @media (max-width: 1300px){
        height: 30vw;
    }
`;