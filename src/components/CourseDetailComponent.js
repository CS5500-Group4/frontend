import React from 'react'
import Wrapper from '../asserts/wrappers/CourseDetailComponent';
import Button from '@mui/material/Button';


const CourseDetailComponent = () => {
    return (
        <Wrapper>
            <div className="course_all_detail">
                <div className="course_detail">
                    <h1>Course Name</h1>
                    <h2>4.6/5</h2>
                    <p>Based on 15 Student Reviews</p>
                    <Button variant="contained">Rate Course</Button>
                </div>
                <div className="rating_distribution">
                    <h2>Rating Distribution</h2>
                    <ul>
                        <li>
                            <span>Take the course, now! 5</span>
                            <div className="bar">
                                <div class="bar_color"></div>
                            </div>
                            <span>10</span>
                        </li>
                        <li>
                            <span>Take the course, now! 5</span>
                            <div className="bar">
                                <div class="bar_color"></div>
                            </div>
                            <span>10</span>
                        </li>
                        <li>
                            <span>Take the course, now! 5</span>
                            <div className="bar">
                                <div class="bar_color"></div>
                            </div>
                            <span>10</span>
                        </li>
                        <li>
                            <span>Take the course, now! 5</span>
                            <div className="bar">
                                <div class="bar_color"></div>
                            </div>
                            <span>10</span>
                        </li>
                        <li>
                            <span>Take the course, now! 5</span>
                            <div className="bar">
                                <div class="bar_color"></div>
                            </div>
                            <span>10</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="review">
                <h3>15 Reviews</h3>
                <div className="review_list">
                    <div className="review_rating">
                        <h3>Rating</h3>
                        <div className="rating_number">4.0</div>
                    </div>
                    <div className="review_list_detail">
                        <div className="review_name">Reviewed by Zanyuan</div>
                        <div className="review_date">Oct 11, 2022</div>
                        <div className="review_text">I enjoyed the course and learned a lot about the subject. I would recommend this course to anyone who is interested in learning more about this topic. The exams were a bit challenging, but if you study you will be fine.</div>
                    </div>
                </div>
                <div className="review_list">
                    <div className="review_rating">
                        <h3>Rating</h3>
                        <div className="rating_number">4.0</div>
                    </div>
                    <div className="review_list_detail">
                        <div className="review_name">Reviewed by Zanyuan</div>
                        <div className="review_date">Oct 11, 2022</div>
                        <div className="review_text">I enjoyed the course and learned a lot about the subject. I would recommend this course to anyone who is interested in learning more about this topic. The exams were a bit challenging, but if you study you will be fine.</div>
                    </div>
                </div>
                <div className="review_list">
                    <div className="review_rating">
                        <h3>Rating</h3>
                        <div className="rating_number">4.0</div>
                    </div>
                    <div className="review_list_detail">
                        <div className="review_name">Reviewed by Zanyuan</div>
                        <div className="review_date">Oct 11, 2022</div>
                        <div className="review_text">I enjoyed the course and learned a lot about the subject. I would recommend this course to anyone who is interested in learning more about this topic. The exams were a bit challenging, but if you study you will be fine.</div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default CourseDetailComponent