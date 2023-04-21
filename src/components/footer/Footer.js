import React from "react";
import { styles } from "../../styles";
import './Footer.css';
import { Link } from 'react-router-dom';


import { logo2, linkedin, github, twitter, facebook, instagram, discord } from "../../assets";

const Footer = () => {
  return (

    <div className="footer">
      <div className="footer__layout">

        {/* Left side of Footer  */}
        <div className="footer__left">
          
          {/* Link Clonazon Logo with Homepage path => "/" */}
          <Link to = "/">
            {/* Logo  */}
            <img 
              className='footer__logo'
              src={ logo2 }
              alt=""
            />
          </Link>
          
          {/* Social Links  */}
          <div className="footer__social">
            <a href="https://twitter.com/ami_pbj"> <img src={twitter} alt="twitter" /> </a>
            <a href="https://www.linkedin.com/in/ami-pbj/"> <img src={linkedin} alt="linkedin" /> </a>
            <a href="https://github.com/ami-pbj"> <img src={github} alt="github" /> </a>
            <a href="https://discordapp.com/users/934485200300294175"> <img src={discord} alt="discord" /> </a>
            <a href="https://www.facebook.com/amii.pbj/"> <img src={facebook} alt="facebook" /> </a>
            <a href="https://www.instagram.com/ami_pbj/"> <img src={instagram} alt="instagram" /> </a>
          </div>
        </div>


        {/* Right side of Footer  */}
        <div className="footer__right">
          <h6>Get to Know Me</h6>
          <Link to='https://purnendu-pbj.in/' style={{textDecoration: 'none'}}>
            <p>About Me</p>
          </Link>

          <Link to='https://purnendu-pbj.in/' style={{textDecoration: 'none'}}>
            <p>Connect Me</p>
          </Link>

          
        </div>

        <div className="footer__right">
          <h6>Your Account</h6>
          <p>Your Chhavi Ghar Profile</p>

          <Link to='./booking' style={{textDecoration: 'none'}}>
            <p>Your Food</p>
          </Link>

          <Link to='./watchlist' style={{textDecoration: 'none'}}>
            <p>Your Watchlist</p>
          </Link>
          
          <Link to='./orders' style={{textDecoration: 'none'}}>
            <p>Your Bookings</p>
          </Link>

          
          
        </div>

        <div className="footer__right">
          <h6>Let Me Help You</h6>
          <p>Your Box Office Account</p>
          <p>100% Piracy Free Content</p>
          <p>Help</p>
        </div>


        <div className="footer__right">
          <h6>Make Money with Me</h6>
          <p>Advertise Your Contents</p>
          <p>Add Content on Chhavi Ghar</p>
          <p>Fulfilment by Chhavi Ghar</p>
          <p>Chhavi Ghar Contents Rights</p>
        </div>


      </div>

    </div>
  )
}

export default Footer;





