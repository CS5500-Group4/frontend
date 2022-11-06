import React from 'react'
import { Routes, Route } from 'react-router-dom'
import {
  Home,
  Error,
  Login,
  Signup,
  About,
  CourseDetail,
  AddCourse,
  Dashboard,
  CourseList,
  PrivateRoute,
} from './pages'

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      ></Route>
      <Route
        path="/courseDetail/:id"
        element={
          <PrivateRoute>
            <CourseDetail />
          </PrivateRoute>
        }
      ></Route>
      <Route
        path="/addcourse"
        element={
          <PrivateRoute>
            <AddCourse />
          </PrivateRoute>
        }
      ></Route>
      <Route path="/courselist" element={<CourseList />}></Route>
      <Route path="*" element={<Error />}></Route>
    </Routes>
  )
}

export default App
