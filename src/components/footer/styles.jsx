import styled from 'styled-components';
import "../../fonts/fonts.css";

export const Linha1 = styled.div`
    width: 64%;
    padding: 20px 18%;
    background-color: #135b29;
    color: white;
    display: flex;
    align-items: center;
    font-family: Montserrat-Regular;
    justify-content: space-between;
    section{
        display: flex;
        max-width: 50%;
        img{
            width: 170px;
        }
        #contato{
            flex-direction: column;
            font-size: 13px;
            margin: 0 25px;
        }

        .evento{
            display: flex;
            margin-left: 20px;
            .data{
                display: flex;
                height: 55px;
                padding: 0 17px;
                background-color: white;
                color: #135b29;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                border-radius: 10px;
                text-align: center;

                .dia{
                    font-family: Montserrat-SemiBold;
                    font-size: 22px;
                }

                .mes{
                    font-size: 10px;
                }
            }
            .descricao{
                font-size: 13px;
                font-family: Montserrat-SemiBold;
                margin-left: 10px;
            }
        }
    }
`;

export const Linha2 = styled.div`
    width: 64%;
    padding: 10px 18%;
    background-color: #057433;
    display: flex;
    color: white;
    align-items: center;
    justify-content: space-between;
    section{
        display: flex;
        align-items: center;
        #endereco{
            font-size: 14px;
            margin-left: 20px;
            font-family: Montserrat-Regular;
    
            #aberto{
                margin-top: 20px;
                font-family: Montserrat-SemiBold;
            }
        }    
    }

    #redes-sociais{
        .icon{
            margin-left: 20px;
        }
    }
`;

export const Linha3 = styled.div`
    width: 64%;
    padding: 10px 18%;
    display: flex;
    justify-content: space-between;
    color: #145c2a;
    font-family: Montserrat-Regular;
    font-size: 13px;

    img{
        width: 100px;
    }
`;