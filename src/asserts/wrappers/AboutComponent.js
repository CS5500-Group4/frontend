import styled from "styled-components";

const Wrapper = styled.main`
    margin-top: 60px;
    .about{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 100px;
    }
    .left{
        width: 30%;
    }
    .right{
        width: 40%;
    }

    .home_img {
        width: 600px;
        border-radius: 10px;
    }

    .connection{
        display: grid;
        grid-template-columns: 200px 200px;
        grid-row: auto auto;
        grid-column-gap: 20px;
        grid-row-gap: 20px;
    }

    footer{
        position: absolute;
        bottom: 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
    }
`
export default Wrapper;