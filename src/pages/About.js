import React from 'react'
import Wrapper from '../asserts/wrappers/Container';
import { HomeNavbar, AboutComponent, Footer } from '../components';

const About = (() => {
  return (
    <Wrapper>
      <HomeNavbar />
      <AboutComponent />
      <Footer />
    </Wrapper>
  )
})

export default About