import React from 'react'
import Wrapper from '../asserts/wrappers/HomeNavbar';
import { HomeNavbar, AddCourseComponent } from '../components';

const AddCourse = (() => {
  return (
        <Wrapper>
            <HomeNavbar />
            <AddCourseComponent />
        </Wrapper>
  )
})

export default AddCourse