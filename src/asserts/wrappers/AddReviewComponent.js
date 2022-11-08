import styled from "styled-components";


const Wrapper = styled.main`
  .rate_review_box {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .form_inner_wrapper {
    display: flex;
    flex-direction: column;
    margin: 10px 20px 0px 20px;
  }
  
  .submit_wrapper {
    display: flex;
    justify-content: center;
  }

  .btn_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .identity {
    display: flex;
    margin: 10px;
  }

  .sublabel {
    font-weight: normal;
    margin-top: 20px;
    margin-bottom: 10px;
  }

  label {
      display: block;
      margin-right: 20px;
      font-weight: bold;
  }


  textarea {
    display: block;
    padding: 15px 0 15px 10px;
    width: 370px;
    border-radius: 15px;
    margin-top: 15px;
    margin-bottom: 15px;
    background: transparent;
    border: 2px solid #858585;
    color: black;
    transition: 0.3s;
  }

  textarea:hover{
    border: 2px solid #1976d2;
  }

  .submit {
    margin-top: 50px;
    width: 380px;
    border: none;
    color: white;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
    background: #1976d2;
    box-shadow:rgb(25 118 210 / 24%) 0px 8px 16px 0px;
    padding: 15px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    border-radius: 10px;
  }

  .submit:hover {
    color: #fff;
    text-decoration: none;
    background: #3282d1;
    box-shadow:none;
  }

`
export default Wrapper;