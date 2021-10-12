import React from 'react';
import { Fade, Zoom } from 'react-reveal';
import PinkImg from '../Image/HeroPinkImg';
import { Link } from 'gatsby';
import heroData from '../../mock/hero.json';

const Hero = () => (
  <div className="hero-wrapper">
    <div className="hero-message-wrapper">
      <Fade duration={200} distance="500px" delay={100}>
        <PinkImg />
      </Fade>

      <Fade bottom duration={100} distance="30px">
        <h3 className="hero-overtitle">{heroData.overTitle}</h3>
      </Fade>
      <Fade bottom duration={200} distance="300px">
        <h2 className="hero-title">{heroData.title}</h2>
        <h2 className="hero-title-name text-color-main">{heroData.afterTitle}</h2>
      </Fade>
    </div>
    <Zoom duration={500} delay={10}>
      <p className="hero-cta">
        <Link to={heroData.Link_to_ButtonOne}>
          <span className="cta-btn cta-btn--hero"></span>
          <span className="cta-btn cta-btn--hero">{heroData.buttonOne}</span>
        </Link>
        <Link to={heroData.Link_to_ButtonTwo}>
          <span className="cta-btn cta-btn--hero">{heroData.buttonTwo}</span>
        </Link>
      </p>
    </Zoom>
  </div>
);

export default Hero;
