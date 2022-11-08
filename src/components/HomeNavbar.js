import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import Wrapper from '../asserts/wrappers/HomeNavbar'
import { RMCContext } from '../context/context'

const HomeNavbar = () => {
  const { user, logout } = React.useContext(RMCContext)
  return (
    <Wrapper>
      <div className="wrapper">
        <div className="inner_wrapper">
          <div>
            <Link className="link" to="/">
              <h3 class="title">Rate My Courses</h3>
            </Link>
            {user ? (
              <Link className="link" to="/dashboard">
                <h4 class="title">Dashboard</h4>
              </Link>
            ) : (
              ''
            )}
            <Link className="link" to="/courselist">
              <h4 class="title">Courses</h4>
            </Link>
            <Link className="link" to="/about">
              <h4 class="title">About</h4>
            </Link>
          </div>
          {user ? (
            <div>
              <Button variant="contained" size="medium" onClick={logout}>
                logout
              </Button>
            </div>
          ) : (
            <div>
              <Link className="link" to="/signup">
                <Button variant="outlined" size="medium">
                  Signup
                </Button>
              </Link>
              <Link className="link" to="/login">
                <Button variant="contained" size="medium">
                  Login
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  )
}

export default HomeNavbar
