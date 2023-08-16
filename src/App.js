import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../src/components/theme/Theme.jsx'
import { Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Preise from './pages/preise/Preise.js';
import Uberuns from './pages/uberuns/Uberuns.js';
import Magazin from './pages/magazin/Magazin';
import SignIn from './pages/sign-in/SignIn';
import Kontakt from './pages/kontakt/Kontakt';
import SignUp from './pages/sign-up/SignUp';
import './assets/fonts.css';


function App() {
  return (
    <ThemeProvider theme= {theme}>
      <Routes>
        {/* <Route path= '/'  element= {<Navbar /> } > */}
            <Route index element={<Home />} />
            {/* <Route path= '/preise' element= {<Preise />} />
            <Route path= '/magazin' element= {<Magazin />} />
            <Route path= '/uberuns' element= {<Uberuns />} />
            <Route path= '/kontakt' element= {<Kontakt />} />
            <Route path= '/signup' element= {<SignUp />} />
            <Route path= '/signIn' element= {<SignIn />} /> */}
        {/* </Route> */}

        
      </Routes>
    </ThemeProvider>  
  );
}

export default App;
