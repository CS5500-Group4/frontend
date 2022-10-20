import styled from "styled-components";

const Wrapper = styled.main`
  .intro-container {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin-top: 60px;
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
    box-shadow: rgba(209, 209, 209, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
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

  .bottom-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    align-items: center;
  }

`
export default Wrapper;