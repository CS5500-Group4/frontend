import React from 'react';
import Wrapper from '../asserts/wrappers/Container'
import {HomeNavbar, EditProfileComponent, Footer} from '../components'

const EditProfile = (() => {
    return (
        <Wrapper>
            <HomeNavbar />
            <EditProfileComponent />
            <Footer />
        </Wrapper>
    )
})

export default EditProfile