import React, { useState, useEffect } from 'react'
import Wrapper from '../asserts/wrappers/EditProfileComponent'
import { BASE_URL } from '../utils/constant'
import Alert from '@mui/material/Alert'
import { RMCContext } from '../context/context'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import VisibilityIcon from '@mui/icons-material/Visibility'
import axios from 'axios'


const EditProfileComponent = () => {
  const { user } = React.useContext(RMCContext)
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [status, setStatus] = useState('none')

  const alertFadeIn = () => {
    setStatus('success')
    setTimeout(() => {
      setStatus('')
    }, 2000)
  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const clearForm = () => {
    setPassword('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.put(`${BASE_URL}/user/${user.username}`, {password: password});
    console.log(res);
    if (res) {
      alertFadeIn()
      clearForm()
    }

  }

  return (
    <Wrapper>
      <div className="intro-container">
        <h2>Edit Profile</h2>
      </div>

      <div className="form_wrapper">
        <form onSubmit={handleSubmit}>
           <div className="form_inner_wrapper">
            <label for="new_password">Enter New Password</label>
            <input
                autoComplete="off"
                type={!showPassword ? 'password' : 'text'}
                name="password"
                value={password}
                placeholder="Password"
                onChange={handleChangePassword}
                required
              />
               {!showPassword ? (
                <VisibilityOffIcon onClick={handleClickShowPassword}/>
              ) : (
                <VisibilityIcon onClick={handleClickShowPassword}/>
              )}
          </div>
          <div className="btn_wrapper">
            <button className="submit" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
           <Alert
        className={
          status === 'success'
            ? 'alert animate__animated animate__fadeInRight'
            : status === 'none'
            ? 'none'
            : 'alert animate__animated  animate__fadeOutRight'
        }
        severity="success"
      >
        <strong>Password updated!</strong>
      </Alert>
 
    </Wrapper>
  );
}

export default EditProfileComponent
