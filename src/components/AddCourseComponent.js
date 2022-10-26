import React, { useState } from 'react';
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import Wrapper from '../asserts/wrappers/AddCourseComponent';

const initialState = {
  courseNumber: '',
  courseNumber: ''
}

const AddCourseComponent = () => {
    const [courseNumber, setCourseNumber] = useState('');
    const [courseName, setCourseName] = useState('');

    const handleChangeCourseNumber = (e) => {
        setCourseNumber(e.target.value);
    };
    const handleChangeCourseName = (e) => {
        setCourseName(e.target.value);
    };

    const courseValidator = async (e) => {

    };

    return (
        <Wrapper>
            <div className='intro-container'>
                <h2>Add a Course</h2>
            </div>

            <div className="form_wrapper">
            <form onSubmit={courseValidator}>
                <div className="form_inner_wrapper">
                    <label for="course_number">Enter Course Number</label>
                    <input
                        autoComplete="off"
                        type="text"
                        name="courseNumber"
                        placeholder="Example: CS5500"
                        onChange={handleChangeCourseNumber}
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
                        onChange={handleChangeCourseName}
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


            <footer>
                <p>San Jose, California, USA</p>
                <p>Copyright © 2022 All Rights Reserved</p>
            </footer>
        </Wrapper>
    );
}

export default AddCourseComponent