import styled from 'styled-components';

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Button = styled.button`
    padding: 10px 20px;
    margin: 5px;
    font-size: 16px;
    border: none;
    background-color: blue;
    color: white;
    cursor: pointer;
    border-radius: 5px;

    &:hover {
        background-color: #3232B0;
    }
`;