import * as S from './style';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { HashLink } from 'react-router-hash-link';
import logo from '../../../assets/img/CYJ_logo_new.png';
import { AiOutlineHome } from 'react-icons/ai';
import { IoBookOutline } from 'react-icons/io5';
import { MdOutlinePersonSearch } from 'react-icons/md';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';

const NavBar = () => {
  const location = useLocation();

  const [isHome, setIsHome] = useState(false);
  const [isActive, setActive] = useState(false);

  const handleLogoClick = (event) => {
    if (isHome) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const closeMenu = () => {
    setActive(false);
  };

  useEffect(() => {
    setIsHome(location.pathname === '/');
  }, [location.pathname]);

  return (
    <S.Container>
      <S.BarWrap>
        <S.Logo to='/' onClick={handleLogoClick}>
          <S.LogoImg src={logo} />
        </S.Logo>
        <S.MenuNav className={isActive ? 'active' : ''}>
          <S.Menu smooth to='#home' onClick={closeMenu}>
            <span>
              <S.MenuIcon>
                <AiOutlineHome />
              </S.MenuIcon>
              <S.MenuText>Home</S.MenuText>
            </span>
          </S.Menu>
          <S.Menu smooth to='#about' onClick={closeMenu}>
            <span>
              <S.MenuIcon>
                <MdOutlinePersonSearch />
              </S.MenuIcon>
              <S.MenuText>About</S.MenuText>
            </span>
          </S.Menu>
          <S.Menu smooth to='#skills' onClick={closeMenu}>
            <span>
              <S.MenuIcon>
                <IoBookOutline />
              </S.MenuIcon>
              <S.MenuText>Skills</S.MenuText>
            </span>
          </S.Menu>
          <S.Menu smooth to='#project' onClick={closeMenu}>
            <span>
              <S.MenuIcon>
                <AiOutlineFundProjectionScreen />
              </S.MenuIcon>
              <S.MenuText>Project</S.MenuText>
            </span>
          </S.Menu>
        </S.MenuNav>
      </S.BarWrap>
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

export default NavBar;
