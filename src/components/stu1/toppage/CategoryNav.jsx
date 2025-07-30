import styled from "styled-components";
import CustomDropdown from "@components/stu1/dropdown/CustomDropdown";
import { useState } from "react";
import ScheduleSearchModal from "@components/stu1/modal/ScheduleSearchModal";

export default function CategoryNav({ onSortChange, onCategoryChange, activeCategory }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    { label: "All", value: "all" },
    { label: "JH", value: "mydata" },
    { label: "Clothes", value: "clothes" },
    { label: "Shoes", value: "shoes" },
  ];

  return (
    <>
      <Wrapper>
        <ItemWrapper>
          {categories.map((cat) => (
            <Item
              key={cat.value}
              $active={activeCategory === cat.value}
              onClick={() => onCategoryChange(cat.value)}
            >
              {cat.label}
            </Item>
          ))}
          <ModalButton onClick={() => setIsModalOpen(true)}>Modal</ModalButton>
        </ItemWrapper>
        <CustomDropdown onSortChange={onSortChange}>
          <CustomDropdown.Button />
          <CustomDropdown.Menu>
            <CustomDropdown.MenuItem option="low" label="낮은 가격순">낮은 가격순</CustomDropdown.MenuItem>
            <CustomDropdown.MenuItem option="high" label="높은 가격순">높은 가격순</CustomDropdown.MenuItem>
            <CustomDropdown.MenuItem option="name" label="이름순">이름순</CustomDropdown.MenuItem>
            <CustomDropdown.MenuItem option="reviews" label="리뷰 많은 순">리뷰 많은 순</CustomDropdown.MenuItem>
            <CustomDropdown.MenuItem option="rating" label="평점 순">평점 순</CustomDropdown.MenuItem>
            <CustomDropdown.MenuItem option="date" label="입고일순">입고일순</CustomDropdown.MenuItem>
          </CustomDropdown.Menu>
        </CustomDropdown>
      </Wrapper>

      <ScheduleSearchModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border-bottom: 1px solid #ddd;
  background-color: #f9f9f9;
  font-size: 14px;
  margin-bottom: 40px;
`;

const ItemWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

const Item = styled.div`
  cursor: pointer;
  color: ${(props) => (props.$active ? "black" : "#666")};
  font-weight: ${(props) => (props.$active ? "bold" : "normal")};
`;

const ModalButton = styled.button`
  background-color: #f9f9f9;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  border: 1px solid #ddd;
  padding: 4px 8px;
  
  &:hover {
    background-color: #e9e9e9;
  }
`;
