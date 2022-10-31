import React from 'react'
import Wrapper from '../asserts/wrappers/CourseListComponent';
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import studyImg from '../asserts/images/study.jpg';

const CourseListComponent = () => {
    return (
        <Wrapper>
            <div className='main'>
                <div className='left'>
                    <div className='title'>
                        <h2>Current Courses</h2>
                        <Link className='link' to='/addcourse'>
                            <Button variant="contained">Add a Course</Button>
                        </Link>
                    </div>
                    <div className='sub_title'>
                        <h3>Course Number</h3>
                        <h3>Course Name</h3>
                    </div>
                    <div className='course-list'>
                        <ul><a href="">CS5010</a><a href="">Programming Design Paradigm</a></ul>
                        <ul><a href="">CS5400</a><a href="">Principles of Programming Language</a></ul>
                        <ul><a href="">CS5500</a><a href="">Foundations of Software Engineering</a></ul>
                        <ul><a href="">CS5520</a><a href="">Mobile Application Development</a></ul>
                        <ul><a href="">CS5600</a><a href="">Computer Systems</a></ul>
                        <ul><a href="">CS5610</a><a href="">Web Development</a></ul>
                        <ul><a href="">CS5700</a><a href="">Fundamentals of Computer Networking</a></ul>
                        <ul><a href="">CS5800</a><a href="">Algorithms</a></ul>
                        <ul><a href="">CS6760</a><a href="">Privacy, Security, and Usability</a></ul>
                         <ul><a href="">CS6410</a><a href="">Compilers</a></ul>
                    </div>
                </div>
                <div className='right'>
                    <img className='study_img' src={studyImg} alt='student studing in bed' />
                </div>
            </div>
        </Wrapper>
    );
}

export default CourseListComponent