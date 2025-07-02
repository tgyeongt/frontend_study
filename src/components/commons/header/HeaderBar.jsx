import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  HeaderContainer,
  LogoButton,
  Nav,
  NavItemBtn,
  MenuButton
} from './HeaderBar.styled';

import logoIcon from '@icons/logo.svg';
import menuIcon from '@icons/menu_hamburger.svg';
import closeIcon from '@icons/menu_close.svg';

export default function HeaderBar({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <HeaderContainer>
      {React.Children.map(children, child =>
        React.isValidElement(child)
          ? React.cloneElement(child, { isMenuOpen, toggleMenu, closeMenu })
          : child
      )}
    </HeaderContainer>
  );
}

function Logo({ closeMenu }) {
  const navigate = useNavigate();
  return (
    <LogoButton onClick={() => { navigate('/'); closeMenu(); }}>
      <img src={logoIcon} alt="Logo" />
      멋쟁이사자처럼
    </LogoButton>
  );
}

function Navbar({ children, isMenuOpen, closeMenu }) {
  return (
    <Nav isMenuOpen={isMenuOpen}>
      <ul>
        {React.Children.map(children, child =>
          React.isValidElement(child) ? React.cloneElement(child, { closeMenu }) : child
        )}
      </ul>
    </Nav>
  );
}

function NavItem({ label, path, closeMenu }) {
  const navigate = useNavigate();
  return (
    <li>
      <NavItemBtn onClick={() => { navigate(path); closeMenu(); }}>
        {label}
      </NavItemBtn>
    </li>
  );
}

function MenuIcon({ isMenuOpen, toggleMenu }) {
  return (
    <MenuButton onClick={toggleMenu} isMenuOpen={isMenuOpen}>
      <img src={isMenuOpen ? closeIcon : menuIcon} alt="Menu" />
    </MenuButton>
  );
}

HeaderBar.Logo = Logo;
HeaderBar.Navbar = Navbar;
HeaderBar.NavItem = NavItem;
HeaderBar.MenuIcon = MenuIcon;
