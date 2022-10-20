import React from 'react'
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import Wrapper from '../asserts/wrappers/AboutComponent';
import homeImg from '../asserts/images/home.jpg';
import spaceImg from '../asserts/images/space.png';
import searchImg from '../asserts/images/investigate.png';
import reviewImg from '../asserts/images/review.png';

const AboutComponent = () => {
    return (
        <Wrapper>
            <div className="about">
                <div className="left">
                    <h1>A Course Review PlatformBuilt by Students, for Students.</h1>
                    <img className='home_img' src={homeImg} alt='Students working together on laptop' />
                </div>
                <div className="right">
                    <h3>The Team</h3>
                    <p>Four Northeastern University (NEU) students wanted to find the utilmate solution to simplify course planning, and Rate My Courses was born! Our goal is to create an open community for NEU students to rate and review all their courses. We hope you find this platform helpful! </p>
                    <h3>How it works</h3>
                    <ul>
                        <li>You can browse course ratings and reviews as a guest.</li>
                        <li>If you want to rate a course or post a review, creating an account is easy!</li>
                        <li>You can post reviews anonymously when logged in, too.</li>
                        <li>You can also add a new course to the platform and be the first to review.</li>
                    </ul>
                    <h3>Connect with Us</h3>
                    <div className="connection">
                        <div>Zanyuan Yang</div>
                        <div>Siheng Wei</div>
                        <div>Jinyan Li</div>
                        <div>Suisui Xia</div>
                    </div>

                </div>
            </div>

            <footer>
                <p>San Jose, California, USA</p>
                <p>Copyright © 2022 All Rights Reserved</p>
            </footer>
        </Wrapper>
    );
}

export default AboutComponent