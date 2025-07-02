import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--main-bg-color);
  font-weight: bold;
  width: 100%;
  height: 7vh;
  box-sizing: border-box;
  position: relative;
  z-index: 100;
`;

export const LogoButton = styled.button`
  background: none;
  border: none;
  font-size: 2.2vh;
  cursor: pointer;
  color: var(--main-text-color);
  display: flex;
  align-items: center;

  img {
    padding-right: 1vh;
    height: 5vh;
  }
`;

export const Nav = styled.nav`
  ul {
    display: flex;
    gap: 3vw;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  @media screen and (max-width: 767px) {
    position: absolute;
    top: 7vh;
    right: 0;
    background-color: var(--main-bg-color);
    width: 100%;
    max-height: ${({ isMenuOpen }) => (isMenuOpen ? '50vh' : '0')};
    overflow: hidden;
    transition: max-height 0.3s ease;
    flex-direction: column;
    align-items: center;
    border-radius: 0 0 3rem 3rem;

    ul {
      flex-direction: column;
      align-items: center;
      width: 100%;
      padding: 1rem 0;
    }

    li {
      margin: 1rem 0;
    }
  }
`;

export const NavItemBtn = styled.button`
  background: none;
  border: none;
  font-size: 1.6rem;
  cursor: pointer;
  color: var(--main-text-color);
  transition: color 0.3s ease;

  &:hover {
    color: var(--accent-color);
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    text-align: center;
  }
`;

export const MenuButton = styled.button`
  background: none;
  border: none;
  display: none;
  cursor: pointer;

  img {
    height: 3vh;
    transition: transform 0.3s ease;
    transform: ${({ isMenuOpen }) => (isMenuOpen ? 'rotate(180deg)' : 'rotate(0)')};
  }

  @media screen and (max-width: 767px) {
    display: block;
  }
`;
