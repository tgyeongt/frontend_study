import Pagination from "@HomePage/Pagination";
import ClothesCard from "@HomePage/ClothesCard";
import SortAndQna from "@HomePage/SortAndQna";
import { useState, useEffect } from "react";
import axios from "axios";
import {
    Container,
    ClothesList,
} from "./Stu2Page.styles";

export default function HomePage() {
    const [sortState, setSortState] = useState("none"); 
    const [clothesList, setClohtesList] = useState([]);
    // clothesList: 서버에서 받아온 상품 목록을 저장하는 state 변수 (상품 데이터를 보관하는 변수)
    const [isLoading, setIsLoading] = useState(false);
 
    useEffect(() => {
        fetchClothes();
    }, []);

    const fetchClothes = () => {
        setIsLoading(true);

        axios
            .get("http://localhost:3000/clothes")
            .then((res) => {
                console.log("불러온 상품 목록: ", res.data);
                setClohtesList(res.data);
            })
            .catch((err) => {
                alert("에러가 발생했습니다");
                console.log(err);
            })
            .finally(() => setIsLoading(false));
    }

    let SortedList;

    if (sortState === "low") {
        SortedList = [...clothesList].sort((a, b) => a.price - b.price);
    }
    else if (sortState === "high") {
        SortedList = [...clothesList].sort((a, b) => b.price - a.price);
    }
    else {
        SortedList = clothesList;
    }

    return (
        <Container>
            <SortAndQna setSortState={setSortState} />
            <ClothesList>
                {SortedList.map(clothe => (
                    <ClothesCard 
                        key={clothe.id}
                        id={clothe.id}
                        name={clothe.name}
                        color={clothe.color}
                        price={clothe.price}
                        image={clothe.image}
                    />
                ))}
            </ClothesList>
            <Pagination />
        </Container>
    );
}
