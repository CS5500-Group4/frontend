import styled from "styled-components";

const Wrapper = styled.main`
  width: 100%;
  .wrapper {
    width: 100%;
    border-bottom: 0.1px solid white;
    top: 0;
    z-index: 100;
    background-color: #17171e;
    box-shadow: rgba(209, 209, 209, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  }
  
  .inner_wrapper {
    width: 80%;
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
  }

  .link {
    text-decoration: none;
  }
  Button {
    color: white;
    border-color: white;
    border-radius: 20px;
    margin-right: 20px;
    text-decoration: none;
  }

  Button:hover {
    border-color: #5687f6;
  }

  .information {
    width: 80%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-left: auto;
    margin-right: auto;
    margin-top: 60px;
    color: white;
    margin-bottom: 40px;
  }
  .information_title {
    font-size: 35px;
  }
  .information_text {
    font-size: 20px;
    color: #d1d1d1;
  }

  .home-img {
    height:600px;
    width: 600px;
    margin-left: auto;
    position: relative;
    float: true;
  }


  #banner {
      padding-top: 5rem;
      box-shadow: none;
      border-bottom: none;
  }

  #intro {
      font-size: 35px;
      font-weight: bold;
      display: inline;
  }

  #join_btn {
    width: 280px;
    border: none;
    color: white;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
    background: #1976d2;
    box-shadow:rgb(25 118 210 / 24%) 0px 8px 16px 0px;
    padding: 15px;
    text-align: center;
    transition: 0.5s;
    background-size: 200% auto;
    border-radius: 15px;
  }

  #join_btn:hover {
    border-color: #5687f6;
  }

  @media only screen and (max-width: 800px) {
    .information {
      grid-template-columns: 1fr;
    }
    .homeImg {
      display: none;
    }
    .inner_wrapper{
      width: 90%;
    }
  }
`
export default Wrapper;