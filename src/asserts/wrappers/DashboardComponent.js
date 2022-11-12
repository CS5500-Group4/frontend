import styled from "styled-components";

const Wrapper = styled.main`
    padding: 0 350px 0 350px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    .user img{
        width: 200px;
        height: 200px;
    }

    .action Button{
        display: block;
        margin-bottom: 20px;
        width: 200px;
    }

    .course_list{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        border: 1px solid white;
        border-radius: 5px;
        padding: 10px 20px 10px 20px;
        margin-top: 20px;
    }

    span {
        display: inline-block;
        width: 20px;
    }    

    a {
        color: white;
        transition: 0.3s;
        text-decoration: none;
    }

    a:hover {
        color: #5687f6;
    }

`
export default Wrapper;