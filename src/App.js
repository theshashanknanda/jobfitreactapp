import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home'
import {Routes, Route} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { setJwt } from './redux/slices/JwtSlice';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ResumeUpload from './pages/ResumeUpload';
import JobDetails from './pages/JobDetails';
import { useState } from 'react';

function App() {
  let jwt = useSelector((state) => state.jwt.value)
  let dispatch = useDispatch()
  dispatch(setJwt(localStorage.getItem('jwt')))

  let [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div className='min-h-[100vh] bg-[#F4F4F4] min-w-[100vw] overflow-x-hidden'>
      <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/signup' element={<Signup></Signup>}></Route>
          <Route path='/login' element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></Login>}></Route>
          <Route path='/dashboard' element={<Dashboard isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></Dashboard>}></Route>
          <Route path='/resumeupload' element={<ResumeUpload></ResumeUpload>}></Route>
          <Route path='/jobdetails' element={<JobDetails></JobDetails>}></Route>
        </Routes>
    </div>
  );
}

export default App;
