import styled from 'styled-components';

export const Section = styled.section`
    width: 64%;
    padding: 10px 18%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    #logo{
        width: 230px;
    }

    #botao-filiado{

        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent;

        border: 2px solid #057433;
        border-radius: 20px;
        padding: 7px 10px;
        outline: none;

        color: #057433;
        font-family: Montserrat-Semibold;
        font-size: 12px;

        cursor: pointer;
        transition: 200ms;

        svg{
            height: 18px;
            width: 18px;
            margin-right: 5px;
            fill: #057433;
        }

        &:hover{
            background-color: #057433;
            color: white;
            svg{
                fill: white;
            }
        }
    }
`;