import React from 'react'
import Wrapper from '../asserts/wrappers/HomeNavbar';
import { HomeNavbar, AddReviewComponent } from '../components';

const AddReview = (() => {
  return (
        <Wrapper>
            <HomeNavbar />
            <AddReviewComponent />
        </Wrapper>
  )
})

export default AddReview