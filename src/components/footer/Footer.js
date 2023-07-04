import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { ReactComponent as ButfirstmeLogo } from '../../assets/Header_material/Logo_icon.svg';
import { ReactComponent as ButfirstmeLogoText } from '../../assets/Header_material/logo_text.svg';
import { Divider, Stack } from '@mui/material';

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const FooterBackground = styled(Box)(({ theme }) => ({
  backgroundImage: "url('../../assets/Header_material/gradient-dark-blue-futuristic-digital-background.jpg')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundColor: '#0099bc'
}));

export default function Footer() {
  return (
    <FooterBackground>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={5} lg={4}>
           
            <Item >
              <ButfirstmeLogo style={{ height: '50px', width: '50px', marginRight: '6px' }}/>
              
              <p><ButfirstmeLogoText style={{ height: '50px', width: '180px', marginLeft: '16px' }} /></p>
            </Item>
          </Grid>
          <Stack direction={'row'} divider={<Divider orientation="vertical" flexItem />} xs={12} md={7} lg={8} spacing={12} ml={'50px'}>
            <Grid item xs={8} lg={4}>
              <Item>
                <Box
                  id="category-a"
                  sx={{ fontSize: '12px', textTransform: 'uppercase' }}
                >
                    Services
                </Box>
                <Box component="ul" aria-labelledby="category-a" sx={{ pl: 2 }}>
                  <li>Link 1.1</li>
                  <li>Link 1.2</li>
                  <li>Link 1.3</li>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={8} lg={4}>
              <Item>
                <Box
                  id="category-b"
                  sx={{ fontSize: '12px', textTransform: 'uppercase' }}
                >
                  Category B
                </Box>
                <Box component="ul" aria-labelledby="category-b" sx={{ pl: 2 }}>
                  <li>Link 2.1</li>
                  <li>Link 2.2</li>
                  <li>Link 2.3</li>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={8} lg={4}>
              <Item>
                <Box
                  id="category-c"
                  sx={{ fontSize: '12px', textTransform: 'uppercase' }}
                >
                  Category C
                </Box>
                <Box component="ul" aria-labelledby="category-c" sx={{ pl: 2 }}>
                  <li>Link 3.1</li>
                  <li>Link 3.2</li>
                  <li>Link 3.3</li>
                </Box>
              </Item>
            </Grid>
          </Stack>
          <Grid
            xs={12}
            container
            justifyContent="space-between"
            alignItems="center"
            flexDirection={{ xs: 'column', sm: 'row' }}
            sx={{ fontSize: '12px' }}
          >
            <Grid item sx={{ order: { xs: 2, sm: 1 } }}>
              <Item>© Copyright</Item>
            </Grid>
            <Grid container columnSpacing={1} item sx={{ order: { xs: 1, sm: 2 } }}>
              <Grid item>
                <Item>Link A</Item>
              </Grid>
              <Grid item>
                <Item>Link B</Item>
              </Grid>
              <Grid item>
                <Item>Link C</Item>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </FooterBackground>
  );
}
