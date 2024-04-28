import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export const Container = styled.header`
  display: flex;
  width: calc(var(--vw, 1vw) * 100);
  height: 4.5rem;
  justify-content: center;
  align-items: center;
  background-color: #1b1a2ea9;
  position: fixed;
  top: 0rem;
  transition: all 0.3s ease-out 0s;
  padding: 0.5rem 4rem;
  z-index: 1000;

  .menu {
    width: 2rem;
    height: 0.2rem;
    background: #ffff;
    position: relative;
    cursor: pointer;
    display: none;

    &:before {
      bottom: 0.5rem;
    }
    &:after {
      top: 0.5rem;
    }

    &.active:before {
      bottom: 0;
      transform: rotate(45deg);
    }

    &.active:after {
      top: 0;
      transform: rotate(135deg);
    }

    &.active {
      background-color: rgba(0, 0, 0, 0);
    }
  }

  .menu:before,
  .menu:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 0.2rem;
    background: #ffff;
    cursor: pointer;
    transition: 0.6s;
  }

  @media (max-width: 767px) {
    padding: 1.5rem 3rem;

    .menu {
      display: block;
    }

    nav {
      -ms-overflow-style: none;
      scrollbar-width: none;
      overflow: hidden;
      opacity: 0;
      visibility: hidden;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: fixed;
      width: calc(var(--vw, 1vw) * 100);
      height: calc(var(--vh, 1vh) * 25);
      background: var(--white);
      top: 0;
      left: 0;
      transition:
        opacity 0.25s,
        transform 0.25s ease-in-out;
      transform: translateY(-80%);
      background: #1b1a2ef3;

      a.button {
        background-color: var(--pink);
      }

      &.active {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
      }
    }
  }
`;

export const BarWrap = styled.div`
  display: flex;
  height: 5rem;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 80rem;
`;

export const Logo = styled(Link)`
  font: var(--font-label-large) Raleway;
  display: flex;
  color: white;
  text-decoration: none;
  align-items: center;
  cursor: pointer;
`;

export const MenuNav = styled.nav`
  display: flex;
`;

export const Menu = styled(HashLink)`
  font: var(--font-paragraph-intermediate) Raleway;
  color: white;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  padding: 0.5rem 1rem;
  margin: 0rem 0.25rem;
  border-radius: 1rem;
  position: relative;

  &:hover {
    filter: brightness(0.6);
  }
  span {
    display: flex;
  }

  @media screen and (max-width: 1023px) {
    font: var(--font-paragraph-medium) Raleway;
  }
  /* &:hover {
    background: transparent;
  }

  &:before,
  &:after {
    position: absolute;
    content: '';
    background: #c797eb;
    transition: all 0.3s ease;
  }

  &:before {
    top: 0;
    left: 0;
    width: 2px;
    height: 0;
  }

  &:after {
    bottom: 0;
    right: 0;
    width: 0;
    height: 2px;
  }

  &:hover:before {
    height: 100%;
  }

  &:hover:after {
    width: 100%;
  }
  span {
    display: flex;
    &:hover {
      background: transparent;
    }

    &:before,
    &:after {
      position: absolute;
      content: '';
      background: #c797eb;
      transition: all 0.3s ease;
    }

    &:before {
      top: 0;
      left: 0;
      width: 0;
      height: 2px;
    }

    &:after {
      bottom: 0;
      right: 0;
      width: 2px;
      height: 0;
    }

    &:hover:before {
      width: 100%;
    }

    &:hover:after {
      height: 100%;
    }
  } */
`;

export const MenuIcon = styled.div`
  color: var(--white);
  display: flex;
  align-items: center;
`;

export const MenuText = styled.div`
  padding-left: 1rem;
`;

export const LogoImg = styled.img`
  width: 2.5rem;
`;
