import React from 'react'
import Wrapper from '../asserts/wrappers/HomeNavbar';
import { HomeNavbar, HomeComponent } from '../components';

const Home = (() => {
  return (
        <Wrapper>
            <HomeNavbar />
            <HomeComponent />
        </Wrapper>
  )
})

export default Home