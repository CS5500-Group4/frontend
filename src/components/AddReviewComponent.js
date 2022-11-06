import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import Wrapper from '../asserts/wrappers/AddReviewComponent'

const initialState = {
  rating: '',
  reviewContent: '',
  identity: '',
}

const AddReviewComponent = () => {
  const [rating, setRating] = useState('')
  const [reviewContent, setReviewContent] = useState('')
  const [identity, setIdentity] = useState('')

  const handleChangeRating = (e) => {
    setRating(e.target.value)
  }

  const handleChangeReviewContent = (e) => {
    setReviewContent(e.target.value)
  }

  const handleChangeIdentity = (e) => {
    setIdentity(e.target.value)
  }

  return (
    <Wrapper>
      <div className="form_wrapper">
        <form onSubmit="">
          <div className="rate_review_box">
            <div className="form_inner_wrapper" onChange={handleChangeRating}>
              <label for="course_rating">Rate the Course on a scale of 1 to 5:</label>
              <label className="sublabel">
                <input type="radio" value="5" name="rating" />5 - Take the course, now!
              </label>
              <label className="sublabel">
                <input type="radio" value="4" name="rating" />4 - Would recommend
              </label>
              <label className="sublabel">
                <input type="radio" value="3" name="rating" />3 - Good enough
              </label>
              <label className="sublabel">
                <input type="radio" value="2" name="rating" />2 - Not so good
              </label>
              <label className="sublabel">
                <input type="radio" value="1" name="rating" />1 - Do not take it!
              </label>
            </div>
            <div className="form_inner_wrapper">
              <label for="review_content">Add a brief description of your experience with the course:</label>
              <textarea
                className="textarea"
                rows="10"
                cols="60"
                name="reviewDescription"
                autoComplete="off"
                placeholder="Example: I really enjoyed the CS5500 course last semester..."
                value={reviewContent.reviewContent}
                onChange={handleChangeReviewContent}
                required
                minLength="1"
                maxLength="1000"
              />
            </div>
          </div>
          <div className="identity" onChange={handleChangeIdentity}>
            <label className="sublabel">
              <input type="radio" value="username" name="identity" />
              As Jaying
            </label>
            <label className="sublabel">
              <input type="radio" value="anonymous" name="identity" />
              Anonymously
            </label>
          </div>
          <div className="submit_wrapper">
            <div className="btn_wrapper">
              <button className="submit" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </Wrapper>
  )
}

export default AddReviewComponent
