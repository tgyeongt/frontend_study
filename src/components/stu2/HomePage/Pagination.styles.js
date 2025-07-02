import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 37px;
    width: 100%;
`;

export const Ul = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 23px;
`;

export const Li = styled.li`
    list-style: none;
    
    .nowPage {
        color: grey;
    }
`;

export const PageButton = styled.button`
    border: none;
    background-color: white;
    font-size: 16px;
    cursor: pointer;
`;