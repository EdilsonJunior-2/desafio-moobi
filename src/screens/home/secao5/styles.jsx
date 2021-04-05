import styled from 'styled-components';

export const Section = styled.section`
    width: 64%;
    padding: 10px 0;
    display: grid;
    grid-template-columns: 48% 48%;
    grid-gap: 4%;

    .cartaz{
        width: 100%;
        .titulo{
            font-family: Montserrat-Regular;
            font-size: 24px;
            margin-bottom: 15px;
        }
        img{
            width: 100%;
        }
    }

    @media (max-width: 1300px) {
        width: 85%;
        .cartas{
            .titulo{
                font-size: 20px;
            }
        }
    }

    @media (max-width: 767.9px){
        display: flex;
        flex-direction: column;
        width: 95%;
    }
`;