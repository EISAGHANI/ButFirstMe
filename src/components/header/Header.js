import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from '@mui/material/Container';
import { Box, colors } from '@mui/material';






const Header = () => {


  return (
   <div className='header'>
        
        <Container fixed maxWidth= 'lg' 
              sx={{ 
                backgroundImage: 'url(../../assets/70664860.jpg)',
                backgroundColor: '#0E4062',
              }}>
          <Box 
              sx={{
                backgroundPosition: 'center',
                textAlign: 'center',
                color: 'white'
              }}>
                <h1>Welcome to Our Website</h1>
                <h2>We Provide Exceptional Solutions</h2>
                 <Button className="cta-button">Call to Action</Button>
           
          </Box>
        </Container>
    </div>
  )
}

export default Header