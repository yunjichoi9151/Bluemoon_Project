import React, { useState } from 'react';
import { NavHashLink } from 'react-router-hash-link';
import * as S from './style';
import BasicText from '../BasicText';

const NavBar_Before = () => {
  const [isActive, setActive] = useState(false);

  function toggleTheme() {
    const html = document.getElementsByTagName('html')[0];
    html.classList.toggle('light');
  }

  function closeMenu() {
    setActive(false);
  }

  return (
    <S.Container className='header-fixed'>
      <S.Logo smooth to='#home'>
        <span>{"CYJ's Portfolio"}</span>
      </S.Logo>
      <nav className={isActive ? 'active' : ''}>
        <NavHashLink smooth to='#title' onClick={closeMenu}>
          <BasicText
            text='HOME'
            font='Raleway'
            fontStyle='--font-paragraph-medium'
          />
        </NavHashLink>
        <NavHashLink smooth to='#about' onClick={closeMenu}>
          <BasicText
            text='ABOUT ME'
            font='Raleway'
            fontStyle='--font-paragraph-medium'
          />
        </NavHashLink>
        <NavHashLink smooth to='#project' onClick={closeMenu}>
          <BasicText
            text='SKILLS'
            font='Raleway'
            fontStyle='--font-paragraph-medium'
          />
        </NavHashLink>
        <NavHashLink smooth to='#project' onClick={closeMenu}>
          <BasicText
            text='PROJECT'
            font='Raleway'
            fontStyle='--font-paragraph-medium'
          />
        </NavHashLink>
      </nav>
      <div
        aria-expanded={isActive ? 'true' : 'false'}
        aria-haspopup='true'
        aria-label={isActive ? 'Fechar menu' : 'Abrir menu'}
        className={isActive ? 'menu active' : 'menu'}
        onClick={() => {
          setActive(!isActive);
        }}
      ></div>
    </S.Container>
  );
};

export default NavBar_Before;
