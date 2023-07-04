import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import backgroundImage1 from '../../assets/Header_material/close-up-hand-with-painting-pallete.jpg';
import backgroundImage2 from '../../assets/Header_material/gradient-dark-blue-futuristic-digital-background.jpg';

const Header = () => {
  return (
    <div className="header" style={{ width: '100%', margin: 0 }}>
      <Carousel
        showArrows={true}
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        transitionTime={1000}
      >
        <div>
          <Box sx={{width: '100vw', position: 'relative', left: '50%', transform: 'translateX(-50%)', backgroundImage: `url(${backgroundImage1})`, backgroundSize: 'cover', backgroundPosition: 'center', paddingTop: '80px', paddingBottom: '80px'}} >
            <Container maxWidth="xl" sx={{ textAlign: 'center', color: 'white' }}>
              <h1>AS A COMPANY</h1>
              <p>We build bridges</p>
              <p>by providing innovative mental health solutions</p>

              <Button variant="contained" sx={{ bgcolor: '#F9AE19', marginRight: '16px' }} className="cta-button">
                Watch Brand Video
              </Button>
              <Button variant="contained" sx={{ bgcolor: '#F9AE19' }} className="cta-button">
                Call to Action
              </Button>
            </Container>
          </Box>
        </div>
        <div>
          <Box
            sx={{
              width: '100vw',
              position: 'relative',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundImage: `url(${backgroundImage2})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              paddingTop: '80px',
              paddingBottom: '80px',
            }}
          >
            <Container
              maxWidth="xl"
              sx={{
                textAlign: 'center',
                color: 'white',
              }}
            >
              <h1>AS A COMPANY</h1>
              <p>We build bridges</p>
              <p>by providing innovative mental health solutions</p>

              <Button variant="contained" sx={{ bgcolor: '#F9AE19', marginRight: '16px' }} className="cta-button">
                Watch Brand Video
              </Button>
              <Button variant="contained" sx={{ bgcolor: '#F9AE19' }} className="cta-button">
                Call to Action
              </Button>
            </Container>
          </Box>
        </div>
      </Carousel>
    </div>
  );
};

export default Header;
