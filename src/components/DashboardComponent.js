import React from 'react'
import Wrapper from '../asserts/wrappers/DashboardComponent';
import Button from '@mui/material/Button';
import avatar from '../asserts/images/user.png';


const DashboardComponent = () => {
    return (
        <Wrapper>
            <div className="user">
                <h1>Hey, Jaying!</h1>
                <img src={avatar} alt="avatar" />
            </div>
            <div className="action">
                <h3>I want to...</h3>
                <Button variant="contained">Add a Course</Button>
                <Button variant="contained">View Courses</Button>
                <Button variant="contained">Edit Profile</Button>
            </div>

            <div className="course">
                <h3>My Courses</h3>
                <div className="course_list">
    {/* todo: Update the courses that link to each course's detail page */}
                    <a href="">Course 1 - Course Name</a>
                    <a href="">Course 2 - Course Name</a>
                    <a href="">Course 3 - Course Name</a>
                </div>
            </div>
        </Wrapper>
    );
}

export default DashboardComponent