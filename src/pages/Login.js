import React, { useState } from 'react';
import Wrapper from '../asserts/wrappers/SignUpAndLogIn';
import { HomeNavbar, LoginComponent } from '../components';

const Login = () => {
    return (
        <Wrapper>
            <HomeNavbar />
            <LoginComponent />
        </Wrapper>
    );
};

export default Login;
