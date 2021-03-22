import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-flow: column;    
    align-items: center;

    width: 100%;
    position: absolute;
    top: 50px;
    justify-content: center;
    .MuiInputBase-root{
        width: 100%;
    }
    #filled-basic{
        background-Color: rgba(255, 255, 255, 0.3);
    }
`;