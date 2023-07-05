import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import backgroundImage1 from '../../assets/Header_material/close-up-hand-with-painting-pallete.jpg';
import { Grid, Typography } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

const Header = () => {
  return (
    <Grid  Container sx={{width: '100vw', position: 'relative', left: '50%', transform: 'translateX(-50%)', backgroundImage: `url(${backgroundImage1})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '600px'}}>
          <Box height={120} display={'flex'} justifyContent={'right'} marginRight={10}>
               <Box lg ={4} sx={{border:'1px solid white', width: '50'}} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                  <PublicIcon color='secondary'/>
               </Box>
               <Box lg ={8} sx={{border:'1px solid white'}} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                  <Typography color={'white'}>
                    Link zu abes Angebote/Preise
                  </Typography>
                  <Button variant='contained' color='secondary' >
                    REGRISTIERUNG
                  </Button>
                  <Typography color={'white'}>
                    Kostenlos. Anonym.Hochwerig
                  </Typography>
                  <Button variant='contained' color='secondary'>
                    LOS GEHT'S
                  </Button>
               </Box>
          </Box>
          <Box height={30} display={'flex'} justifyContent={'center'} alignItems={'center'}>
              <Typography variant='h6' color={'white'}>
                  DWIN WEG ZU
              </Typography>
          </Box>
          <Box height={60} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                  <Typography height={30} color={'white'}>
                    Kostenlos. Anonym.Hochwerig
                  </Typography>
                  <Typography height={30} color={'white'}>
                    Kostenlos. Anonym.Hochwerig
                  </Typography>
          </Box>
          <Box height={90} display={'flex'} justifyContent={'center'} alignItems={'center'} >
              <Button variant="contained" color='secondary' sx={{marginRight: '10px'}} startIcon={<PlayCircleOutlineIcon color='primary'/>}>
                SCHAU VIDEO
              </Button>
              <Button variant="contained" color='secondary' sx={{marginLeft: '10px'}}>
              SELBST & SOFORT HILFE
              </Button>

          </Box>
          <Box height={300} display={'flex'}  flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                  <Typography  color={'secondary'}>
                    Kostenlos. Anonym.Hochwerig
                  </Typography>
                  <Typography  color={'white'}>
                    lorem ipsum
                  </Typography>
          </Box>
    </Grid>
  );
};

export default Header;
