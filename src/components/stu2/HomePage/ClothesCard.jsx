import axios from "axios";
import {
    Container,
    ClotheImg,
    ClotheNamePriceDiv,
    ClotheNameButton,
    ClothePrice,
    ClotheColorDeleteDiv,
    ClotheColor,
    DeleteButton,
    EditButton,
} from "./ClothesCard.styles";

export default function ClothesCard({ name, id,  color, price, image }) {
    const handlePatchClick = (e) => {
        const newName = prompt("변경할 이름을 입력해주세요", name);
        
        if(!newName || newName.trim().length === 0)
            return;

        axios
            .patch(`http://localhost:3000/clothes/${id}`, { name: newName })
            .then((res) => {
                alert("이름이 변경되었습니다");
                window.location.reload();
            })
            .catch((err) => {
                alert("이름 변경에 실패하였습니다");
                console.log(err);
            });
    };

    const handleDeleteClick = (e) => {
        const confirmDeletion = prompt("삭제하려고 하는 상품의 이름을 입력해주세요", name);

        if(confirmDeletion !== name) {
            alert("상품을 찾을 수 없습니다");
            window.location.reload();
            return;
        }

        axios
            .delete(`http://localhost:3000/clothes/${id}`)
            .then((res) => {
                alert("상품이 삭제되었습니다");
                window.location.reload();
            })
            .catch((err) => {
                alert("상품을 찾을 수 없습니다");
                console.log(err);
            });
    };

    return (
        <Container>
            <ClotheImg src={image} alt={"상품 이미지 준비 중"}/>
            <ClotheNamePriceDiv>
                <ClotheNameButton onClick={handlePatchClick}>{name}</ClotheNameButton>
                <ClothePrice>₩{price.toLocaleString()}</ClothePrice>
            </ClotheNamePriceDiv>
            <ClotheColorDeleteDiv>
                <ClotheColor>{color}</ClotheColor>
                <DeleteButton onClick={handleDeleteClick}>🗑️</DeleteButton>
            </ClotheColorDeleteDiv>
            <EditButton to={`/put/${id}`}>수정</EditButton>
        </Container>
    );
}