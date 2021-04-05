import styled from 'styled-components';

export const Section = styled.section`
    width: 64%;
    padding: 0 18%;
    display: grid;
    grid-template-columns: 18% 18% 18% 18% 18%;
    grid-gap: 2.5%;
    background-color: #f3f3f3;
    
    .elemento{
        display: flex;
        flex-direction: column;
        padding: 45px 0;
        align-items: center;
        justify-content: flex-start;
        text-align: center;
        cursor: pointer;
        transition: 200ms;
        img{
            height: 40px;
        }
        .titulo{
            font-family: Montserrat-SemiBold;
            font-size: 14px;
            margin: 10px;
            color: #145c2a;
        }

        .texto{
            font-family: Montserrat-Regular;
            font-size: 12px;
            color: #145c2a;
        }

        &:hover{
            background-color: #d1d1d1;
        }
    }

    @media (max-width: 1300px){
        width: 85%;
        padding: 0 7.5%;
    }
`;