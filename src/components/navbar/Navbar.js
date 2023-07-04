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
    height: '2px',
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

              <StyledLink to="/services" isActive={location.pathname === '/services'}>
                <Typography variant="subtitle1" fontFamily="Montserrat-Bold"  sx={{ fontSize: "25px"}}>Services</Typography>
              </StyledLink>

              <StyledLink to="/contact" isActive={location.pathname === '/contact'}>
                <Typography variant="subtitle1" fontFamily="Montserrat-Bold"sx={{ fontSize: "25px"}} >Contact</Typography>
              </StyledLink>

              <StyledLink to="/about" isActive={location.pathname === '/about'}>
                <Typography variant="subtitle1" fontFamily="Montserrat-Bold" sx={{ fontSize: "25px"}}>About</Typography>
              </StyledLink>

              <StyledLink to="/blog" isActive={location.pathname === '/blog'}>
                <Typography variant="subtitle1" fontFamily="Montserrat-Bold" sx={{ fontSize: "25px" }} >Blog</Typography>
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
