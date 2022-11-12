import React, { useState, useEffect } from 'react'
import Wrapper from '../asserts/wrappers/DashboardComponent'
import Button from '@mui/material/Button'
import avatar from '../asserts/images/user.png'
import { RMCContext } from '../context/context'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../utils/constant'
import axios from 'axios'

const DashboardComponent = () => {
  const { user } = React.useContext(RMCContext)
  const [courseList, setCourseList] = useState([])
  
  const getAllMyCourses = async () => {
    const getMyCourseList = await axios.get(`${BASE_URL}/user/${user.username}/my-courses`)
    setCourseList(getMyCourseList.data)
  }
  useEffect(() => {
    getAllMyCourses()
  }, [])

  return (
    <Wrapper>
      <div className="user">
        <h1>Hey, {user.username}!</h1>
        <img src={avatar} alt="avatar" />
      </div>
      <div className="action">
        <h3>I want to...</h3>
        <Link className="no_underline" to="/addcourse">
          <Button variant="contained">Add a Course</Button>
        </Link>
        <Link className="no_underline" to="/courselist">
          <Button variant="contained">View Courses</Button>
        </Link>
       <Link className="no_underline" to="/editprofile">
          <Button variant="contained">Edit Profile</Button>
        </Link>
      </div>

      <div className="course">
        <h3>My Courses</h3>
        <div className="course_list">
            {courseList.map((course) => {
              return (
                <ul key={course._id}>
                  <a href={'/courseDetail/' + course._id}>{course.courseNumber}</a>
                  <span></span>
                  <a href={'/courseDetail/' + course._id}>{course.courseName}</a>
                </ul>
              )
            })}
          </div>
      </div>
    </Wrapper>
  )
}

export default DashboardComponent
