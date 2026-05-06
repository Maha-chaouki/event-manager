import React from 'react';
import { IoLogIn } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: #e1e1e6ba;
  backdrop-filter: blur(6px);

  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: 'Roboto', sans-serif;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
const LogoImg = styled.img`
  width: 200px;
  height: 45px;
  object-fit: contain;
`;
const Nav = styled.nav``;
const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;
const NavItem = styled.li``;
const NavLink = styled(Link)`
  color: #0f0c0cff;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  display: flex;
  align-items: center;

  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  &.create-event {
    background-color: rgba(10, 1, 1, 0.88);
    color: #fff;

    &:hover {
      background-color: rgba(10, 1, 1, 0.88);
    }
  }
`;


const NavButton = styled.button`
  background: none;
  border: none;
  color: #0f0c0cff;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;

  font-family: inherit;
  font-size: inherit;
  display: flex;
  align-items: center;

  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const Header = ({})=> {

  return (
    <HeaderContainer>
      <Logo>
  <LogoImg src="/images/logo.png" alt="EventManager Logo" />
</Logo>


      <Nav>
        <NavList>
          <NavItem>
            <NavLink to="/">Accueil</NavLink>
          </NavItem>

          <NavItem>
            <NavButton >
              Sign In
            </NavButton>
          </NavItem>

          <NavItem>
            <NavLink to="/create-event" className="create-event">
              + Créer un événement
            </NavLink>
          </NavItem>
        </NavList>
      </Nav>
    </HeaderContainer>
  );
};
export default Header;
