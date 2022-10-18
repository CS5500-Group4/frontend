import React from 'react';
import {
	Routes,
	Route,
} from "react-router-dom";
import { Home, Error, Login, Signup } from './pages';

function App() {
  return (
    <Routes>
		<Route exact path="/" element={<Home />}></Route>
		<Route path="/login" element={<Login />} ></Route>
		<Route path="/signup" element={<Signup />} ></Route>
		<Route path="*" element={<Error />}></Route>
	</Routes>
  );
}

export default App
