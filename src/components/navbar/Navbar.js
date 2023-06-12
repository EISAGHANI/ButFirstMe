import React from 'react'
import { Fragment } from 'react'
import { Outlet, Link } from 'react-router-dom'
import {ReactComponent as ButfirstmeLogo} from '../../assets/Logo+ICON+Fill.svg'
import './navigation.styles.scss'
import Footer from '../footer/Footer'

const Navbar = () => {
  return (
    <Fragment>
        <div className='navbar'>
            <Link className='logo-container' to='/'>
                <ButfirstmeLogo className='logo'/>
            </Link>
            
            <div className='nav-links-container'>
                <Link className='nav-link' to='/services'>
                    Services
                </Link> 
                <Link className='nav-link' to='/contact'>
                    Contact
                </Link>
                <Link className='nav-link' to='/about'>
                    About
                </Link>
                <Link className='nav-link' to='/blog'>
                    Blog
                </Link>
                <Link className='nav-link' to='/signIn'>
                    Sign-In
                </Link>
            </div>
        </div>
        <Outlet />
        <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
        />
    
    </Fragment>
   
  )
}

export default Navbar