import React from 'react';
import Wrapper from '../asserts/wrappers/Container'
import {HomeNavbar, DashboardComponent, Footer} from '../components'

const Dashboard = (() => {
    return (
        <Wrapper>
            <HomeNavbar />
            <DashboardComponent />
            <Footer />
        </Wrapper>
    )
})

export default Dashboard