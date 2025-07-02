import {
    Container,
    Ul,
    Li,
    PageButton,
} from "./Pagination.styles";

export default function Pagination() {
    return (
        <Container>
            <Ul>
                <Li><PageButton>{"<<"}</PageButton></Li>
                <Li><PageButton>Prev</PageButton></Li>
                <Li><PageButton className="nowPage">1</PageButton></Li>
                <Li><PageButton>2</PageButton></Li>
                <Li><PageButton>3</PageButton></Li>
                <Li><PageButton>4</PageButton></Li>
                <Li><PageButton>5</PageButton></Li>
                <Li><PageButton>Next</PageButton></Li>
                <Li><PageButton>{">>"}</PageButton></Li>
            </Ul>
        </Container>
    );
}