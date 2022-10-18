import React, { useState } from 'react';
import Wrapper from '../asserts/wrappers/SignUpAndLogIn';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';
import loginImg from '../asserts/images/login.png';
// import { BASE_URL } from '../utils/constant';
// import { JobLandingContext } from '../context/context';
// import useRequest from '../hooks/use-request';

const initialState = {
  name: '',
  email: '',
  password: ''
}
const LoginComponent = () => {
    // const { login } = React.useContext(JobLandingContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [correctPassword, setCorrectPassword] = useState(true);

//   const { doRequest, errors } = useRequest({
//     url: `${BASE_URL}/user/signin`,
//     method: 'post',
//     body: {
//       email,
//       password,
//     },
//     onSuccess: (data) => {
//       login(data);
//       //   Router.push('/');
//     },
//   });

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const loginValidator = async (e) => {

  };
    return (
        <Wrapper>
            <main className="main">
                <div className="left">
                <div className="left_inner">
                    <p className="text_login">Hi, Welcome Back</p>
                    <img className="register_img" src={loginImg} alt="register" />
                </div>
                </div>
                <div className="right">
                <div className="form_wrapper">
                    <p className="login">
                    Don’t have an account?{' '}
                    <Link to="/signup" className="link link_to_login">
                        Get started
                    </Link>
                    </p>
                    <div className="form_wrapper_1">
                    <h3 className="form_title">Sign in to Job Landing</h3>
                    <p className="form_title1">Enter your details below.</p>
                    </div>
                    <form onSubmit={loginValidator}>
                    <input
                        autoComplete="off"
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        onChange={handleChangeEmail}
                        required
                    />
                    <input
                        autoComplete="off"
                        type={!showPassword ? 'password' : 'text'}
                        name="password"
                        placeholder="Password"
                        onChange={handleChangePassword}
                        required
                    />
                    {!showPassword ? (
                        <VisibilityOffIcon
                        onClick={handleClickShowPassword}
                        className="seen"
                        />
                    ) : (
                        <VisibilityIcon
                        onClick={handleClickShowPassword}
                        className="seen"
                        />
                    )}
                    <button className="submit" type="submit">
                        Log In
                    </button>
                    </form>
                    {/* {errors} */}
                </div>
                </div>
            </main>
        </Wrapper>
    );
}

export default LoginComponent
