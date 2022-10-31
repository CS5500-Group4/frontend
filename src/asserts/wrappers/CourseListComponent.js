import styled from "styled-components";

const Wrapper = styled.main`
    height: 100%;
    
    Button {
        margin-top: 20px;
        border-radius: 20px;
    }

    a {
        color: white;
        margin-left: 120px;
        margin-right: 120px;
        display: inline-block;
        text-decoration: none;
        transition: 0.3s;
    }

    a:hover {
        color: #5687f6;
    }

    .course-list {
        display: flex;
        flex-direction: column;
        margin-top: 20px;
        border: 1px solid white;
        border-radius: 10px;
    }

    .main {
        display: flex;
        justify-content: space-evenly;
        margin-bottom: 100px;
    }

    .left {
        height: 600px;
        width: 1000px;
        margin-bottom: 100px;
    }

    .right {
        height: 600px;
        width: 500px;
    }

    .title {
        display: flex;
        justify-content: space-around;
        margin-bottom: 20px;
    }

    .sub_title {
        display: flex;
        justify-content: space-around;
        margin-right: 200px;
    }
    
    .study_img {
        width: 500px;
        border-radius: 10px;
    }

    @media only screen and (max-width: 1000px) {
    
    }


`
export default Wrapper;