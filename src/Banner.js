import React from 'react'
import './Banner.css'
import Socials from './Socials'
import {KeyboardArrowDown, Menu} from '@material-ui/icons';

function Banner() {

  const menuScreenOut = () => {
    const banner = document.querySelector('.banner__menuScreen')

    banner.classList.add('banner__menuScreenOut')
  }

  const menuScreenReturn = () => {
    const banner = document.querySelector('.banner__menuScreen')

    banner.classList.remove('banner__menuScreenOut')
  }

  return (
    <div className="banner" id="banner">
      <div className="banner__menu" onClick={menuScreenOut}>
        <Menu />
      </div>
      <div className="banner__menuScreen">
        <a href="#banner" onClick={menuScreenReturn}>Home</a>
        <a href="#projects" onClick={menuScreenReturn}>Projects</a>
        <a href="#aboutMe" onClick={menuScreenReturn}>About</a>
        <a href="#contactForm" onClick={menuScreenReturn}>Contact</a>
      </div>
      <div className="banner__container">
        <img src="https://png.pngtree.com/thumb_back/fw800/back_pic/03/93/16/9057e520ba9e1a6.jpg" alt=""/>
        <div className="banner__info">
          <h1 className="banner__name">Hi, I'm <span>Jay Patel</span></h1>
          <h3><span>Full Stack Web Developer</span></h3>
          <div className="banner__socials">
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
        </div>
      </div>
      <div className="banner__down">
        <a href="#projects"><KeyboardArrowDown /></a>
      </div>
      <div className="banner__fade"></div>
    </div>
  )
}

export default Banner
