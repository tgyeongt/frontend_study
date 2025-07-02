import styled from "styled-components";

export const Container = styled.div`
    padding: 80px 25px;
    
`;

export const ClothesList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr); // 1줄을 4개의 열로 만들고 각 열을 동일한 너비로 구성
`;