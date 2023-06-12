import React from 'react'
import Button from 'react-bootstrap/Button';



const Header = () => {
  return (
   <div className='header'>
        <header style={{ backgroundImage: 'url("path/to/background-image.jpg")' }}>
            <div className="header-content">
                <h1>Welcome to Our Website</h1>
                <h2>We Provide Exceptional Solutions</h2>
        <Button className="cta-button">Call to Action</Button>
            </div>
        </header>
    </div>
  )
}

export default Header