import React, { useState, useEffect } from 'react'
import Wrapper from '../asserts/wrappers/CourseListComponent'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import studyImg from '../asserts/images/study.jpg'
import { BASE_URL } from '../utils/constant'
import axios from 'axios'

const CourseListComponent = () => {
  const [courseList, setCourseList] = useState([])
  const getAllCourseList = async () => {
    const getCourseList = await axios.get(`${BASE_URL}/course`)
    setCourseList(getCourseList.data)
  }
  useEffect(() => {
    getAllCourseList()
  }, [])

  return (
    <Wrapper>
      <div className="main">
        <div className="left">
          <div className="title">
            <h2>Current Courses</h2>
            <Link className="link" to="/addcourse">
              <Button variant="contained">Add a Course</Button>
            </Link>
          </div>
          <div className="sub_title">
            <h3>Course Number</h3>
            <h3>Course Name</h3>
          </div>
          <div className="course-list">
            {courseList.map((course) => {
              return (
                <ul key={course._id}>
                  <a href={'/courseDetail/' + course._id}>{course.courseNumber}</a>
                  <a href={'/courseDetail/' + course._id}>{course.courseName}</a>
                </ul>
              )
            })}
          </div>
        </div>
        <div className="right">
          <img className="study_img" src={studyImg} alt="student studing in bed" />
        </div>
      </div>
    </Wrapper>
  )
}

export default CourseListComponent
