import React from 'react'
import Wrapper from "../asserts/wrappers/SignUpAndLogIn";
import { HomeNavbar, SignupComponent } from '../components'





const Signup = (() => {
    return (
        <Wrapper>
            <HomeNavbar />
            <SignupComponent />
        </Wrapper>
    )
})

export default Signup