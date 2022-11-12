import React, { useState, useContext } from 'react'
import Wrapper from '../asserts/wrappers/EditProfileComponent'
import { BASE_URL } from '../utils/constant'
import Alert from '@mui/material/Alert'
import { RMCContext } from '../context/context'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import VisibilityIcon from '@mui/icons-material/Visibility'


const EditProfileComponent = () => {
  const { user } = React.useContext(RMCContext)
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

    const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await(`${BASE_URL}/user/${user.username}`, 
    {headers: {'Content-Type': 'application/json'}, 
    method: 'PUT', 
    body: {password: password}});
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
 
    </Wrapper>
  );
}

export default EditProfileComponent
