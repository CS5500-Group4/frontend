import React, { useState } from 'react'
import Wrapper from '../asserts/wrappers/AddReviewComponent'
import { RMCContext } from '../context/context'

const AddReviewComponent = (props) => {
  const { onSubmitReview } = props
  const { user } = React.useContext(RMCContext)
  const initialState = {
    review: '',
    rating: '',
    reviewBy: user.username,
    isAnonymous: '',
  }
  const [reviewForm, setReviewForm] = useState(initialState)

  // Handle on Change for review form
  const handleOnChangeForm = (e) => {
    if (e.target.name === 'rating') {
      setReviewForm({ ...reviewForm, [e.target.name]: parseInt(e.target.value, 10) })
    }
    setReviewForm({ ...reviewForm, [e.target.name]: e.target.value })
  }

  return (
    <Wrapper>
      <div className="form_wrapper">
        <form onSubmit={(e) => onSubmitReview(e, reviewForm)}>
          <div className="rate_review_box">
            <div className="form_inner_wrapper" onChange={handleOnChangeForm}>
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
                name="review"
                autoComplete="off"
                placeholder="Example: I really enjoyed the CS5500 course last semester..."
                value={reviewForm.review}
                onChange={handleOnChangeForm}
                required
                minLength="1"
                maxLength="1000"
              />
            </div>
          </div>
          <div className="identity" onChange={handleOnChangeForm}>
            <label className="sublabel">
              <input type="radio" value="false" name="isAnonymous" />
              As {user.username}
            </label>
            <label className="sublabel">
              <input type="radio" value="true" name="isAnonymous" />
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
