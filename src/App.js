import React from 'react';
import {
	Routes,
	Route,
} from "react-router-dom";
import { Home, Error, Login, Signup, About, CourseDetail, AddCourse, Dashboard } from './pages';
import AddReview from './pages/AddReview';

function App() {
  return (
    <Routes>
		<Route exact path="/" element={<Home />}></Route>
		<Route path="/login" element={<Login />} ></Route>
		<Route path="/signup" element={<Signup />} ></Route>
		<Route path="/dashboard" element={<Dashboard />} ></Route>
		<Route path="/about" element={<About />} ></Route>
		<Route path="/courseDetail" element={<CourseDetail />} ></Route>
    	<Route path="/addcourse" element={<AddCourse />}></Route>
		<Route path="/addreview" element={<AddReview />}></Route>
		<Route path="*" element={<Error />}></Route>

	</Routes>
  );
}

export default App
