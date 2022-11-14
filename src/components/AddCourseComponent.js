import React, { useState, useContext } from 'react'
import Wrapper from '../asserts/wrappers/AddCourseComponent'
import { BASE_URL } from '../utils/constant'
import axios from 'axios'
import Alert from '@mui/material/Alert'
import { RMCContext } from '../context/context'

const AddCourseComponent = () => {
  const { user } = useContext(RMCContext)
  const initialState = {
    courseName: '',
    courseNumber: '',
    createdBy: user.username,
  }
  const [status, setStatus] = useState('none')
  const [failStatus, setFailStatus] = useState('none')

  const alertFadeIn = () => {
    setStatus('success')
    setTimeout(() => {
      setStatus('')
    }, 2000)
  }

   const failAlertFadeIn = () => {
    setFailStatus('error')
    setTimeout(() => {
      setFailStatus('')
    }, 2000)
  }

  const [courseDetail, setCourseDetail] = useState(initialState)

  const handleChange = (e) => {
    setCourseDetail({ ...courseDetail, [e.target.name]: e.target.value })
  }
  const clearForm = () => {
    setCourseDetail(initialState)
  }

  const addCourse = async (e) => {
    e.preventDefault()
    const res = await axios.post(`${BASE_URL}/course`, courseDetail)

    .then((res) => {
      alertFadeIn()
    })
    .catch((error) => {
      failAlertFadeIn()
    })
    clearForm()
  }

  return (
    <Wrapper>
      <div className="intro-container">
        <h2>Add a Course</h2>
      </div>

      <div className="form_wrapper">
        <form onSubmit={addCourse}>
          <div className="form_inner_wrapper">
            <label for="course_number">Enter Course Number</label>
            <input
              autoComplete="off"
              type="text"
              name="courseNumber"
              placeholder="Example: CS5500"
              value={courseDetail.courseNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form_inner_wrapper">
            <label for="course_name">Enter Course Name</label>
            <input
              autoComplete="off"
              type="text"
              name="courseName"
              placeholder="Foundation of Software Engineering"
              value={courseDetail.courseName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="btn_wrapper">
            <button className="submit" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
      <Alert
        className={
          status === 'success'
            ? 'alert animate__animated animate__fadeInRight'
            : status === 'none'
            ? 'none'
            : 'alert animate__animated  animate__fadeOutRight'
        }
        severity="success"
      >
        <strong>Add success!</strong>
      </Alert>

      <Alert
        className={
          failStatus === 'error'
            ? 'alert animate__animated animate__fadeInRight'
            : failStatus === 'none'
            ? 'none'
            : 'alert animate__animated  animate__fadeOutRight'
        }
        severity="error"
      >
        <strong>Course already exists!</strong>
      </Alert>

    </Wrapper>
  )
}

export default AddCourseComponent
