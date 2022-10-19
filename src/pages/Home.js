import React from 'react'
import { ExampleContext } from '../context/context';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
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