import React from 'react';
import { Fragment } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { ReactComponent as ButfirstmeLogo } from '../../assets/Header_material/Logo_icon.svg';
import { ReactComponent as ButfirstmeLogoText } from '../../assets/Header_material/logo_text.svg';
import { AppBar, Container,Toolbar, Typography, styled } from '@mui/material';
import Footer from '../footer/Footer';
import TopNavbar from './TopNavbar';


const StyledLink = styled(Link)(({ theme, isActive }) => ({
  position: 'relative',
  textDecoration: 'none',
  color: 'inherit',
  marginRight: '16px',
  padding: '8px 16px',
  fontWeight: isActive ? 'bold' : 'normal',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: isActive ? '100%' : 0,
    height: '8px',
    backgroundColor: "#F9AE19",
    transition: 'width 0.3s ease',
  },
}));

const Navbar = () => {
  const location = useLocation();


  return (
    
    <Fragment>
      <TopNavbar />
      <AppBar position="static" sx={{ bgcolor: 'white', color: 'black' }} elevation={0}>
        <Container>
          <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ButfirstmeLogo style={{ height: '50px', width: '50px', marginRight: '6px' }} />
              <ButfirstmeLogoText style={{ height: '50px', width: '180px', marginLeft: '16px' }} />
            </Link>

            <nav style={{ display: 'flex' }}>

            <StyledLink to="/" isActive={location.pathname === '/'}>
                <Typography variant="subtitle1" fontFamily="Montserrat-Bold"  sx={{ fontSize: "25px"}}>Home</Typography>
              </StyledLink>
              <StyledLink to="/preise" isActive={location.pathname === '/preise'}>
                <Typography variant="subtitle1" fontFamily="Montserrat-Bold"  sx={{ fontSize: "25px"}}>Preise</Typography>
              </StyledLink>

              <StyledLink to="/magazin" isActive={location.pathname === '/magazin'}>
                <Typography variant="subtitle1" fontFamily="Montserrat-Bold"sx={{ fontSize: "25px"}} >Magazin</Typography>
              </StyledLink>

              <StyledLink to="/uberuns" isActive={location.pathname === '/uberuns'}>
                <Typography variant="subtitle1" fontFamily="Montserrat-Bold" sx={{ fontSize: "25px"}}>Über Uns</Typography>
              </StyledLink>

              <StyledLink to="/kontakt" isActive={location.pathname === '/kontakt'}>
                <Typography variant="subtitle1" fontFamily="Montserrat-Bold" sx={{ fontSize: "25px" }} >Kontakt</Typography>
              </StyledLink>

              <StyledLink to="/shop" isActive={location.pathname === '/shop'}>
                <Typography variant="subtitle1" fontFamily="Montserrat-Bold" sx={{ fontSize: "25px" }} >Shop</Typography>
              </StyledLink>
            </nav>
          </Toolbar>
        </Container>
      </AppBar>
        <Outlet />
        <Footer title="Footer" description="Something here to give the footer a purpose!" />
    </Fragment>
  );
};

export default Navbar;
