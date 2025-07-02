import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const QnaButtonDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-bottom: 10px;
    width: 4.6%;
    gap: 5px;
`;

export const QnaButton = styled(Link)`
    font-size: 15px;
    width: 100px;
    border: none;
    background-color: rgb(227, 228, 227);
    color: black;
    text-decoration: none;
    border-radius: 8px;
    padding: 2px;
    cursor: pointer;
    text-align: center;
    transition: transform 0.2s ease, background-color 0.2s ease;

    &:hover {
        background-color: rgb(181, 181, 181);
        transform: scale(1.05);
    }
`;

export const SortButtonDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    gap: 5px;
    width: 7.2%;
`;

export const SortButton = styled.button`
    border: none;
    border-radius: 8px;
    background-color: rgb(227, 228, 227);
    padding: 1px;
    cursor: pointer;
    transition: transform 0.2s ease, background-color 0.2s ease;

    &:hover {
        background-color: rgb(181, 181, 181);
        transform: scale(1.05);
    }
`;