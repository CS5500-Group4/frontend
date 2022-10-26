import styled from "styled-components";

const Wrapper = styled.main`
    padding: 0 350px 0 350px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    .user img{
        width: 300px;
        height: 300px;
    }

    .action Button{
        display: block;
        margin-bottom: 20px;
    }

    .course_list{
        border: 1px solid white;
        border-radius: 5px;
        padding: 10px 20px 30px 20px;
        margin-top: 20px;
    }

`
export default Wrapper;