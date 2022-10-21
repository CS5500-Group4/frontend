import React from 'react'
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import Wrapper from '../asserts/wrappers/AboutComponent';
import welcomeImg from '../asserts/images/welcome.jpg';


const AboutComponent = () => {
    return (
        <Wrapper>
            <div className="about">
                <div className="left">
                    <h1>A Course Review PlatformBuilt by Students, for Students.</h1>
                    <img className='home_img' src={welcomeImg} alt='Welcome sign' />
                </div>
                <div className="right">
                    <h3>The Team</h3>
                    <p>Four Northeastern University (NEU) students wanted to find the utilmate solution to simplify course planning, and Rate My Courses was born! Our goal is to create an open community for NEU students to rate and review all their courses. We hope you find this platform helpful! </p>
                    <h3>How it works</h3>
                    <ul>
                        <li>You can browse course ratings and reviews as a guest.</li>
                        <li>If you want to rate a course or post a review, <a href='/signup'>creating an account</a> is easy!</li>
                        <li>You can post reviews anonymously when logged in, too.</li>
                        <li>You can also add a new course to the platform and be the first to review.</li>
                    </ul>
                    <h3>Connect with Us</h3>
                    <div className="connection">
                        <div><a href="">Zanyuan Yang</a></div>
                        <div><a href="">Siheng Wei</a></div>
                        <div><a href="">Jinyan Li</a></div>
                        <div><a href="">Suisui Xia</a></div>
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