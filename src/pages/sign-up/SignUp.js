import * as React from 'react';
import backgroundImage1 from '../../assets/Header_material/close-up-hand-with-painting-pallete.jpg';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { ReactComponent as ButfirstmeLogo } from '../../assets/Header_material/Logo_icon.svg';
import { ReactComponent as ButfirstmeLogoText } from '../../assets/Header_material/logo_text.svg';

const defaultTheme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ width: '100vw', position: 'relative', left: '50%', transform: 'translateX(-50%)', backgroundImage: `url(${backgroundImage1})`, backgroundSize: 'cover', backgroundPosition: 'center', paddingTop: '80px', paddingBottom: '80px' }}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Paper variant="outlined" rounded elevation={3} sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ width: '100%' }} borderRadius={2} boxShadow={'3px 3px 3px 3px'}>
              <Box sx={{ bgcolor: '#F9AE19'}}>
                <ButfirstmeLogo style={{ height: '100px', width: '100px', marginRight: '6px' }} />
                <ButfirstmeLogoText style={{ height: '100px', width: '200px', marginLeft: '16px' }} />
              </Box>
              <Box sx={{ ml: 5 }}>
                <TextField
                  margin="normal"
                  required
                  id="firstName"
                  label="First Name"
                  name="firstName"
                  autoComplete="given-name"
                />
                <TextField
                  margin="normal"
                  required
     
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
                <TextField
                  margin="normal"
                  required
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  InputProps={{
                    startAdornment: (
                      <AccountCircleIcon sx={{ color: '#F9AE19' }} />
                    ),
                  }}
                />
                <TextField
                  margin="normal"
                  required
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  InputProps={{
                    startAdornment: (
                      <LockOutlinedIcon sx={{ color: '#F9AE19' }} />
                    ),
                  }}
                />
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
                <Button
                  type="submit"
  
                  variant="contained"
                  sx={{ mt: 3, mb: 2, marginLeft:9, bgcolor: '#F9AE19' }}
                >
                  Sign Up
                </Button>
                </Box>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link href="/signin" variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </Box>
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
