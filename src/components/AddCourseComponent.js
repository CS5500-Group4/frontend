import React, { useState } from 'react'
import Wrapper from '../asserts/wrappers/AddCourseComponent'
import { BASE_URL } from '../utils/constant'
import axios from 'axios'
import Alert from '@mui/material/Alert'

const initialState = {
  courseName: '',
  courseNumber: '',
  createdBy: 'test1',
}

const AddCourseComponent = () => {
  const [updateStatus, setUpdateStatus] = useState('none')
  const alertFadeIn = () => {
    setUpdateStatus('success')
    setTimeout(() => {
      setUpdateStatus('')
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
    const response = await axios.post(`${BASE_URL}/course`, courseDetail)
    if (response) {
      alertFadeIn()
      clearForm()
    }
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
          updateStatus === 'success'
            ? 'alert animate__animated animate__fadeInRight'
            : updateStatus === 'none'
            ? 'none'
            : 'alert animate__animated  animate__fadeOutRight'
        }
        severity="success"
      >
        <strong>Add success!</strong>
      </Alert>

      <footer>
        <p>San Jose, California, USA</p>
        <p>Copyright © 2022 All Rights Reserved</p>
      </footer>
    </Wrapper>
  )
}

export default AddCourseComponent
