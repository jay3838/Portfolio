import React from 'react'
import './Footer.css'
import Socials from './Socials'
import {KeyboardArrowUp, FiberManualRecord} from '@material-ui/icons';

function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer__up">
        <a href="#banner"><KeyboardArrowUp /></a>
      </div>
      <div className="footer__icons">
        <Socials
            link="https://www.facebook.com/profile.php?id=100006919213596"
            fontawesome="fa fa-facebook" 
          />
          <Socials
            link="https://www.linkedin.com/in/jay-patel-2b2722214/"
            fontawesome="fa fa-linkedin" 
          />
          <Socials
            link="https://www.instagram.com/jaypatel3736/"
            fontawesome="fa fa-instagram" 
          />
          <Socials
            link="https://github.com/jay3838"
            fontawesome="fa fa-github" 
          />
      </div>
      <div className="footer__info">
        &copy;  2021 Jaypatel. All Rights Reserved <span className="footer__infoDot"><FiberManualRecord /></span> 
      </div>
    </div>
  )
}

export default Footer
