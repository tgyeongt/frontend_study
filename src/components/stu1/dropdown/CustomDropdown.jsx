import styled from "styled-components";
import { useState } from "react";
import React from "react";

export default function CustomDropdown({ children, onSortChange }) {
  const [open, setOpen] = useState(false);
  const [sortLabel, setSortLabel] = useState("정렬");

  const handleSort = (option, label) => {
    onSortChange(option);
    setSortLabel(label);
    setOpen(false);
  };

  return (
    <DropdownWrapper>
      {React.Children.map(children, child =>
        React.isValidElement(child)
          ? React.cloneElement(child, { 
              open, 
              setOpen, 
              sortLabel, 
              handleSort 
            })
          : child
      )}
    </DropdownWrapper>
  );
}

function Button({ open, setOpen, sortLabel }) {
  return (
    <DropdownButton onClick={() => setOpen(!open)}>
      {sortLabel} ▼
    </DropdownButton>
  );
}

function Menu({ children, open, handleSort }) {
  if (!open) return null;
  
  return (
    <DropdownMenu>
      {React.Children.map(children, child =>
        React.isValidElement(child)
          ? React.cloneElement(child, { handleSort })
          : child
      )}
    </DropdownMenu>
  );
}

function MenuItem({ children, option, label, handleSort }) {
  return (
    <MenuItemStyled onClick={() => handleSort(option, label)}>
      {children}
    </MenuItemStyled>
  );
}

const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  padding: 8px 12px;
  font-size: 14px;
  width: 120px;
  text-align: left;
  border: 1px solid #ccc;
  background-color: white;
  cursor: pointer;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  width: 120px;
  right: 0;
  background-color: white;
  border: 1px solid #ddd;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

const MenuItemStyled = styled.div`
  padding: 10px 16px;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background-color: #f2f2f2;
  }
`;

CustomDropdown.Button = Button;
CustomDropdown.Menu = Menu;
CustomDropdown.MenuItem = MenuItem;
