import React from 'react'
import './footer.css'
import logo from '../../Images/footer.png'
function Footer() {
  return (
    <div  className='footer'>
        <div className='upper'>
           <div className='logo-bar'>
            <figure className='logo-img'><img src={logo}/></figure>
           </div>
           <div className='central'>
              <div className='left'>
                <h4>Learn More</h4>
                <p>What is a Rent and offer?</p>
                <p>How it Works</p>
                <p>Contact Us</p>
              </div>
              <div className='right'>
              <h4>Get Started</h4>
                <p>Post an Item</p>
                <p>Create an account</p>
                <p>Rent an item</p>
                <p>Log in</p>
              </div>
           </div>
        </div>
        <div className='bottom'>
                <p>© 2023 — Rent&Offer. All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer