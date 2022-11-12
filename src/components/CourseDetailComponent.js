import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Wrapper from '../asserts/wrappers/CourseDetailComponent'
import { BASE_URL } from '../utils/constant'
import axios from 'axios'
import { AddReviewDialog } from './index'
import moment from 'moment'

const CourseDetailComponent = () => {
  let { id } = useParams()
  const [courseDetail, setCourseDetail] = useState({})
  const [reviewList, setReviewList] = useState([])
  const [ratingDistribution, setRatingDistribution] = useState([])
  const getCourseDetail = async (courseId) => {
    const getCourseDetailById = await axios.get(`${BASE_URL}/course/${courseId}`)
    setCourseDetail(getCourseDetailById.data)
    setRatingDistribution(getCourseDetailById.data.ratingDistribution)
    setReviewList(getCourseDetailById.data.reviews)
  }

  const [open, setOpen] = React.useState(false)
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  // Submit Review
  const onSubmitReview = async (e, reviewForm) => {
    e.preventDefault()
    const response = await axios.post(`${BASE_URL}/review/` + id, reviewForm)
    if (response) {
      handleClose()
    }
  }

  useEffect(() => {
    getCourseDetail(id)
  })

  return (
    <Wrapper>
      <div className="course_all_detail">
        <div className="course_detail">
          <h1>
            {courseDetail.courseNumber} - {courseDetail.courseName}
          </h1>
          <h2>{courseDetail.averageRating}/5</h2>
          <p>Based on {courseDetail.numberOfReviews} Student Reviews</p>
          <AddReviewDialog
            open={open}
            handleClose={handleClose}
            handleClickOpen={handleClickOpen}
            onSubmitReview={onSubmitReview}
          />
        </div>
        <div className="rating_distribution">
          <h2>Rating Distribution</h2>
          <ul>
            <li>
              <span>Take the course, now! 5</span>
              <div className="bar">
                <div
                  className="bar_color"
                  style={{ width: (100 / courseDetail.numberOfReviews) * ratingDistribution[5] + '%' }}
                ></div>
              </div>
              <span>{ratingDistribution[5]}</span>
            </li>
            <li>
              <span>Would recommend 4</span>
              <div className="bar">
                <div
                  className="bar_color"
                  style={{ width: (100 / courseDetail.numberOfReviews) * ratingDistribution[4] + '%' }}
                ></div>
              </div>
              <span>{ratingDistribution[4]}</span>
            </li>
            <li>
              <span>Good enough 3</span>
              <div className="bar">
                <div
                  className="bar_color"
                  style={{ width: (100 / courseDetail.numberOfReviews) * ratingDistribution[3] + '%' }}
                ></div>
              </div>
              <span>{ratingDistribution[3]}</span>
            </li>
            <li>
              <span>Not so good 2</span>
              <div className="bar">
                <div
                  className="bar_color"
                  style={{ width: (100 / courseDetail.numberOfReviews) * ratingDistribution[2] + '%' }}
                ></div>
              </div>
              <span>{ratingDistribution[2]}</span>
            </li>
            <li>
              <span>Do not take it! 1</span>
              <div className="bar">
                <div
                  className="bar_color"
                  style={{ width: (100 / courseDetail.numberOfReviews) * ratingDistribution[1] + '%' }}
                ></div>
              </div>
              <span>{ratingDistribution[1]}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="review">
        <h3>{courseDetail.numberOfReviews} Reviews</h3>
        {reviewList.map((review) => {
          return (
            <div className="review_list" key={review._id}>
              <div className="review_rating">
                <h3>Rating</h3>
                <div className="rating_number">{review.rating}.0</div>
              </div>
              <div className="review_list_detail">
                <div className="review_name">Reviewed by {review.isAnonymous ? 'Anonymous' : review.reviewBy}</div>
                <div className="review_date">{moment(review.createdAt).format('MMM Do YYYY')}</div>
                <div className="review_text">{review.review}</div>
              </div>
            </div>
          )
        })}
      </div>
    </Wrapper>
  )
}

export default CourseDetailComponent
