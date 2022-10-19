import styled from "styled-components";

const Wrapper = styled.main`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin-top: 60px;
  align-items: center;


  .home_img {
    width: 600px;
    margin-left: auto;
    position: relative;
    float: true;
    border-radius: 10px;
  }

  .intro {
      font-size: 35px;
      font-weight: bold;
  }

  Button {
    border-radius: 8px;
  }

`
export default Wrapper;