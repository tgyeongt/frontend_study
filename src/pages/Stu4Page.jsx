// import ProductCard from "@components/stu4/ProductCard";
import styled from 'styled-components';
// import Toggle from "@components/stu4/Toggle";
// import { useState } from "react";
// import { products } from "@/data/products";

import { useState } from 'react';
import Stu4ModalPage from '@components/stu4/Stu4ModalPage';

export default function Stu4Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Btn onClick={() => setIsModalOpen(true)}>모달 열기 버튼</Btn>

      {isModalOpen && (
        <div>
          <Stu4ModalPage onClose={() => setIsModalOpen(false)} />
        </div>
      )}
    </>
  );
}
const Btn = styled.button`
  width: 200px;
  height: 200px;
  background-color: pink;
`;

// export default function Stu4Page() {
//   const [sortType, setSortType] = useState("인기순");

//   const sortedProducts = [...products].sort((a, b) => {
//     if (sortType === "가격이 낮은 순") return a.price - b.price;
//     if (sortType === "가격이 높은 순") return b.price - a.price;
//     return a.id - b.id; // 추천순 = 원래 순서
//   });

//   return (
//     <Wrapper>
//       <TopBar>
//         <FilterGroup>
//           <Label>
//             <DeliveryButton type="checkbox" />직진배송
//           </Label>
//           <Label>
//             <DeliveryButton type="checkbox" />빠른출발
//           </Label>
//         </FilterGroup>
//         <Toggle sortType={sortType} setSortType={setSortType} />
//       </TopBar>

//       <ProductList>
//         {sortedProducts.map(product => (
//           <ProductCard
//             key={product.id}
//             name={product.name}
//             price={product.price}
//             image={product.image}
//             brand={product.brand}
//             isNew={product.isNew}
//           />
//         ))}
//       </ProductList>
//     </Wrapper>
//   );
// }
// const TopBar = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: 16px;
// `;

// const FilterGroup = styled.div`
//   display: flex;
//   gap: 12px;
// `;

// const Label = styled.label`
//   margin-right: 16px;
//   font-size: 14px;
//   display: inline-flex;
//   align-items: center;
//   gap: 6px;
//   cursor: pointer;
// `;

// const DeliveryButton = styled.input`
//   width: 18px;
//   height: 18px;
// `;
// const Wrapper = styled.div`
// align-items:center;
// `;

// const ProductList = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
// `;
