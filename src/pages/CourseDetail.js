import React from 'react';
import Wrapper from '../asserts/wrappers/HomeNavbar'
import {HomeNavbar, CourseDetailComponent, Footer} from '../components'

const CourseDetail = (() => {
    return (
        <Wrapper>
            <HomeNavbar />
            <CourseDetailComponent />
            <Footer />
        </Wrapper>
    )
})

export default CourseDetail