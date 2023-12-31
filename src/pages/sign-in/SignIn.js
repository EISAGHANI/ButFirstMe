import * as React from 'react';
import { signInWithGooglePopUp, createUserDocumentFromAUth } from '../../utils/firebase/firebase.utils';
import backgroundImage1 from '../../assets/Header_material/close-up-hand-with-painting-pallete.jpg';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { ReactComponent as ButfirstmeLogo } from '../../assets/Header_material/Logo_icon.svg';
import { ReactComponent as ButfirstmeLogoText } from '../../assets/Header_material/logo_text.svg';

import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Paper } from '@mui/material';

const defaultTheme = createTheme();

export default function SignIn() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();
    const userDocRef = await createUserDocumentFromAUth(user);
  }

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
            <Box component="form" onSubmit={handleSubmit} noValidate borderRadius={2} boxShadow={'3px 3px 3px 3px'}>
              <Box container sx={{ bgcolor: "#F9AE19" }}>
                <ButfirstmeLogo style={{ height: '100px', width: '100px', marginRight: '6px' }} />
                <ButfirstmeLogoText style={{ height: '100px', width: '200px', marginLeft: '16px' }} />
              </Box>
              <Box sx={{ ml: 7 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <TextField margin="normal" required id="email" label="Email Address" name="email" autoComplete="email" autoFocus  InputProps={{
                    startAdornment: (
                      <AccountCircleIcon sx={{ color: '#F9AE19' }} />
                    ),
                  }}/>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <TextField margin="normal" required name="password" label="Password" type="password" id="password" autoComplete="current-password" InputProps={{
                    startAdornment: (
                      <LockOutlinedIcon sx={{ color: '#F9AE19' }} />
                    ),
                  }}/>
                </Box>
                <FormControlLabel control={<Checkbox value="remember" color="primary" />} sx={{ marginRight: 20 }} label="Remember me" />
                <Button type="submit" variant="contained" sx={{ mt: 2, mb: 2, marginRight: 3, bgcolor: "#F9AE19" }}>Sign In</Button>
                <Button onClick={logGoogleUser} type="submit" variant="contained" sx={{ mt: 2, mb: 2, bgcolor: "#F9AE19" }}>Sign In with Google</Button>
              </Box>
              <Grid container sx={{ m: 2, paddingRight: 4 }}>
                <Grid item xs={6}>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item xs={6} sx={{ textAlign: 'right' }}>
                  <Link href="/signup" variant="body2">
                    {"New User? Sign Up"}
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
