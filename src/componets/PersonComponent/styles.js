import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    >div{
        font-size: 25px;
        padding-bottom: 20px;
        color: #ccdbdc;
    }
    height: 350px;
    width: 275px;
    > img{
        max-height: 50%;
    }
    background-color: rgba(74,78,105,0.5);
    :hover{
    background-color: rgba(154,140,152,0.5);
}
    transition: background, 0.2s;
    backdrop-filter: blur(8px);
    margin: 10px;
    cursor: pointer;
    box-shadow: 6px 0px 29px 6px rgba(0,0,0,0.50);
`;
export const SobContainer = styled.div`
    display: flex;
    flex-flow: wrap;
    justify-content: center;
    background-image: url('https://i.pinimg.com/originals/91/bf/56/91bf569059acd7c24b9a214e0dd63f44.gif');
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
`;