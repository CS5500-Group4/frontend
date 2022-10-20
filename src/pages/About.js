import React from 'react'
import { ExampleContext } from '../context/context';
import Wrapper from '../asserts/wrappers/HomeNavbar';
import { HomeNavbar, AboutComponent } from '../components';

const About = (() => {
  return (
        <Wrapper>
            <HomeNavbar />
            <AboutComponent />
        </Wrapper>
  )
})

export default About