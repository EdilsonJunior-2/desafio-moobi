import styled from 'styled-components';
import "../../fonts/fonts.css";

export const NavBar = styled.div`
    width: 64%;
    padding: 0 18%;
    background-color: #135b29;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;
    font-size: 13px;

    #options {
        display: flex;
        div {
            padding: 11px 5px;
            letter-spacing: -1px;
            color: white;
            font-weight: 300;
            font-family: "Montserrat-Regular";
            margin: 0 8px;
            transition: 200ms;
            cursor: pointer;
            display: flex;
            align-items: center;

            &:hover{
                background-color: #129238;
            }
        }
    }

    #icons{
        width: 35%;
        display: flex;
        justify-content: flex-end;
        align-items: center;

        .icon{
            margin: 0 5px;
            padding: 0 5px;
            height: 100%;
            width: 25px;
            transition: 200ms;
            cursor: pointer;

            path{
                fill: white;
            }
            
            &:hover{
                background-color: #129238;
            }
        }

        #associe-se{
            margin-left: 15px;
            display: flex;
            align-items: center;
            text-align: center;
            color: white;
            padding: 0 10px;
            height: 100%;
            border-left: 0.5px solid #333;
            border-right: 0.5px solid #333;

            svg{
                margin-right: 10px;
            }
        }
    }
`;