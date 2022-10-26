import React from 'react'
import Wrapper from '../asserts/wrappers/Container';
import { HomeNavbar, HomeComponent, Footer } from '../components';

const Home = (() => {
  return (
    <Wrapper>
      <HomeNavbar />
      <HomeComponent />
      <Footer />
    </Wrapper>
  )
})

export default Home