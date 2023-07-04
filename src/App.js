import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../src/components/theme/Theme.jsx'
import { Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Services from './pages/services/Services';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import SignIn from './pages/sign-in/SignIn';
import Blog from './pages/blog/Blog';
import SignUp from './pages/sign-up/SignUp';
import './assets/fonts.css';


function App() {
  return (
    <ThemeProvider theme= {theme}>
      <Routes>
        <Route path= '/'  element= {<Navbar /> } >
            <Route index element={<Home />} />
            <Route path= '/services' element= {<Services />} />
            <Route path= '/contact' element= {<Contact />} />
            <Route path= '/about' element= {<About />} />
            <Route path= '/blog' element= {<Blog />} />
            <Route path= '/signup' element= {<SignUp />} />
            <Route path= '/signIn' element= {<SignIn />} />
        </Route>

        
      </Routes>
    </ThemeProvider>  
  );
}

export default App;
