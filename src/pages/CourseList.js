import React from 'react';
import Wrapper from '../asserts/wrappers/Container'
import {HomeNavbar, CourseListComponent, Footer} from '../components'

const CourseList = (() => {
    return (
        <Wrapper>
            <HomeNavbar />
            <CourseListComponent />
            <Footer />
        </Wrapper>
    )
})

export default CourseList