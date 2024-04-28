import { Analytics } from '@vercel/analytics/react';
import NavBar from '../components/common/NavBar';
import Particle from '../components/common/Particles';
import { Outlet } from 'react-router';
import ContactBtn from '../components/Board/ContactBtn';
import ScrollDownButton from '../components/Board/ScrollDownButton';
import Footer from '../components/common/Footer';

const Layout = () => {
  return (
    <>
      <NavBar />
      <Analytics />
      <ContactBtn />
      <ScrollDownButton />
      <Particle />
      <Outlet />
    </>
  );
};

export default Layout;
