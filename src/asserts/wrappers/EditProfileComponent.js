import styled from "styled-components";

const Wrapper = styled.main`
  .intro-container {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin-top: 80px;
    align-items: center;
    margin-bottom: 80px;
  }


  .form_wrapper {
    height: 200px;
    margin-bottom: 300px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .form_inner_wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  .btn_wrapper {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  label {
      margin-right: 20px;
      font-weight: bold;
  }

  input {
    padding: 15px 0 15px 10px;
    width: 370px;
    border-radius: 15px;
    border: none;
    margin-top: 15px;
    margin-bottom: 15px;
    background: transparent;
    border: 2px solid #858585;
    color: white;
    transition: 0.3s;
  }

  input:hover{
    border: 2px solid white;
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

  .alert {
    width: 200px;
    position: fixed;
    top: 120px;
    right: 70px;
  }

  .none {
    display: none;
  }
  

`
export default Wrapper;