import styled from "styled-components";

const Wrapper = styled.main`
    margin-top: 60px;
    height: 100%;
    .about{
        /* display: flex;
        justify-content: space-evenly;
        align-items: center; */
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: 0 100px 0 100px;
    }

    .home_img {
        width: 500px;
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
    .no_underline{
        color:white;
    }

    @media only screen and (max-width: 1000px) {
        .about{
            grid-template-columns: 1fr;
        }
        footer{
            position: relative;
        }
    }


`
export default Wrapper;