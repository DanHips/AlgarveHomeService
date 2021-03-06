import React from 'react';
import Fade from 'react-reveal/Fade';
import Title from '../Titles/Title-component';
import aboutUsData from '../../mock/about_us.json';

const { title } = aboutUsData;

import PinkImg from '../Image/StaffPinkImg';

import StaffMaker from './StaffCreator-component';

const Staff = () => (
  <section id="staff">
    <div className="mx-auto">
      <Fade bottom duration={500} distanse="200px">
        <h3 className="staff-overtitle">Our Staff</h3>
      </Fade>
      <Fade bottom duration={500} distanse="800px">
        <Title title={title} />
      </Fade>
      <Fade big duration={1000}>
        <PinkImg alt="Logo" filename="component3-pink.png" />
      </Fade>
    </div>
    <div className="staff-row">
      <StaffMaker />
    </div>
  </section>
);

export default Staff;
