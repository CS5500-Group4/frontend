import React from 'react'
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import Wrapper from '../asserts/wrappers/HomeComponent';
import homeImg from '../asserts/images/home.jpg';

const HomeComponent = () => {
    return (
        <Wrapper>
            <div className='left'>
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
            <div className="right">
                <img className='home_img' src={homeImg} alt='Northeastern University campus' />
            </div>

        </Wrapper>
    );
}

export default HomeComponent