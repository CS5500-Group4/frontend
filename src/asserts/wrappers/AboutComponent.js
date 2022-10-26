import styled from "styled-components";

const Wrapper = styled.main`
    height: 100%;
    a {
        color: white;
        transition: 0.3s;
    }

    a:hover {
        color: #5687f6;
    }

    .about{
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: 0 100px 0 100px;
        column-gap: 20px;
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

    .no_underline{
        color:white;
    }

    @media only screen and (max-width: 1000px) {
        .about{
            grid-template-columns: 1fr;
        }
    }


`
export default Wrapper;