import {
    Container,
    QnaButtonDiv,
    QnaButton,
    SortButtonDiv,
    SortButton,
} from "./SortAndQna.styles";

export default function SortClothes({ setSortState }) {
    return (
        <Container>
            <QnaButtonDiv>
                <QnaButton to="/qna">문의</QnaButton>
                <QnaButton to="/post">상품 등록</QnaButton>
            </QnaButtonDiv>
            <SortButtonDiv> 
                <SortButton onClick={() => setSortState("none")}>주인장 추천순</SortButton>
                <SortButton onClick={() => setSortState("high")}>높은 가격순</SortButton>
                <SortButton onClick={() => setSortState("low")}>낮은 가격순</SortButton>
            </SortButtonDiv>
        </Container>
    );
}