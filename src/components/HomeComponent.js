import React from 'react'
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import Wrapper from '../asserts/wrappers/HomeComponent';
import homeImg from '../asserts/images/home.png';

const HomeComponent = () => {
    return (
        <Wrapper>
            <div className='wrapper' id='banner'>
                <div className='inner_wrapper'>
                     <b>All-in-one Platform</b>
                </div>
        
                <div className='inner_wrapper'>
                        <p id="intro">A Community for Sharing & 
                        <br></br>Viewing Helpful Insights on 
                        <br></br>All Your Courses. </p>
                </div> 
           
                        <img className='home-img' src={homeImg} 
                        alt='Image of Northeastern University campus'/>
       

                

                <div className='inner_wrapper'>
                     <Link className='link' to='/signup'>
                     <button className="submit" id="join_btn" type="submit">
                        Join the Community
                    </button>
                    </Link>
                </div>
            </div>
            
        </Wrapper>
    );
}

export default HomeComponent