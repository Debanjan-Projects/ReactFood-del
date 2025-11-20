import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'
const Footer = () => {


  return (

    <div className='footer' id='footer'>
    <div  className='footer-content'> 

         <div  className='footer-content-left'> 
            <img src={assets.logo} alt=''/>
            
            <p>
               SwadANand brings you the authentic taste of home-cooked meals with fresh ingredients, delightful flavors, and a promise of quality.
            </p>

            <div className='footer-social-icon'>
                <img src={assets.facebook_icon} alt='facebook'/>

                <img src={assets.twitter_icon} alt='twitter'/>

                <img src={assets.linkedin_icon} alt='Linkedin'/>

            </div>
         </div>

         <div  className='footer-content-center'> 
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
           
         </div>
         <div  className='footer-content-right'> 
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91-212-456-7890</li>
                <li>Contact@SwadANand.com</li>

            </ul>
         </div>

    </div>

    <hr/>

    <p className='footer-copyright'>Copyright 2024 @Debanjan Roy (SwadANand.com) - All Right Reserved</p>
    
    </div>
  )
}

export default Footer