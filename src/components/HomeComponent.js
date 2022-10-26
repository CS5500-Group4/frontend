import React from 'react'
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import Wrapper from '../asserts/wrappers/HomeComponent';
import homeImg from '../asserts/images/home.jpg';
import spaceImg from '../asserts/images/space.png';
import searchImg from '../asserts/images/investigate.png';
import reviewImg from '../asserts/images/review.png';

const HomeComponent = () => {
    return (
        <Wrapper>
            <div className='intro-container'>
                <div>
                    <div>
                        <b>All-in-one Platform</b>
                    </div>
                    <div>
                        <p className="intro">A Community for Sharing &
                            <br></br>Viewing Helpful Insights on
                            <br></br>All Your Courses.
                        </p>
                    </div>
                    <Link className='link' to='/signup'>
                        <Button variant="contained">Join the Community</Button>
                    </Link>
                </div>

                <div>
                    <img className='home_img' src={homeImg}
                    alt='Students working together on laptop' />
                </div>
            </div>
            <div className='mid-container'>
                <div>
                    <img className='icon' src={spaceImg}
                    alt='Community of people talking to each other' />
                    <p className='icon-text'>An open community to
                    <br></br>connect with other students</p>
                </div>
                <div>
                    <img className='icon' src={searchImg}
                    alt='A magnifier searching through a list of items' />
                    <p className='icon-text'>Search and read honest
                    <br></br> reviews on your courses</p>
                </div>
                <div>
                    <img className='icon' src={reviewImg}
                    alt='Four stars review on a website' />
                    <p className='icon-text'>Rate and post reviews
                    <br></br> yourself</p>
                </div>
            </div>
        </Wrapper>
    );
}

export default HomeComponent