import styled from "styled-components";

const Wrapper = styled.main`
  .intro-container {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

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
      padding-bottom: 20px;
  }

  Button {
    border-radius: 8px;
  }

  .mid-container {
    padding: 200px 0px;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin-top: 60px;
    align-items: center;
  }

  .icon-text {
    display: block;
    text-align: center;
    font-weight: bold;
    font-size: 20px;
  }


  .icon {
    width: 250px;
  }

`
export default Wrapper;