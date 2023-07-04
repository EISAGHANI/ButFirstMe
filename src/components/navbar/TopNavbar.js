import { AppBar, Toolbar, IconButton, Typography, Box } from '@mui/material';
import { SvgIcon } from '@mui/material';
import { ReactComponent as FbIcon } from '../../assets/Header_material/f.svg';
import { ReactComponent as TwIcon } from '../../assets/Header_material/tw.svg';
import { ReactComponent as GoIcon } from '../../assets/Header_material/g+.svg';
import { ReactComponent as LiIcon } from '../../assets/Header_material/in.svg';
import { ReactComponent as TubeIcon } from '../../assets/Header_material/Tube.svg';
import PhoneIcon from '@mui/icons-material/Phone';
import Button from '@mui/material/Button';
import React from 'react';

const icons = [
  { id: 1, component: FbIcon, link: 'https://www.facebook.com/' },
  { id: 2, component: TwIcon, link: 'https://www.twitter.com/' },
  { id: 3, component: GoIcon, link: 'https://plus.google.com/' },
  { id: 4, component: LiIcon, link: 'https://www.linkedin.com/' },
  { id: 5, component: TubeIcon, link: 'https://www.youtube.com/' },
];

const TopNavbar = () => {
  return (
    <AppBar position='static' color='primary'>
      <Toolbar>
        {icons.map((icon) => (
          <IconButton
            component='a'
            href={icon.link}
            target='_blank'
            rel='noopener noreferrer'
            key={icon.id}
            sx={{  marginRight: '2px' }}
          >
            <SvgIcon component={icon.component} />
          </IconButton>
        ))}

        <Box sx={{ flexGrow: 1 }} />

        <IconButton color='secondary' sx={{ marginRight: '8px' }}>
          <PhoneIcon />
        </IconButton>
        <Typography variant='body1' color='inherit' sx={{ marginRight: '28px' }}>
          +1 123 456 789
        </Typography>

        <Button
          component='a'
          href='/signin'
          variant='contained'
          color = 'secondary'
          sx={{  marginLeft: '18px' }}
        >
         <Typography fontFamily={'Montserrat-light'}> Log In </Typography>
        </Button>
        <Button
          component='a'
          href='/signup'
          variant='contained'
          color = 'secondary'
          sx={{ marginLeft: '18px' }}
        >
          <Typography fontFamily={'Montserrat-light'}>Sign Up</Typography>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavbar;
