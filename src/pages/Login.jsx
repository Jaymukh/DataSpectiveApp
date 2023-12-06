import React, { useState } from 'react'
import stethoscope from '../assets/images/stethoscope.png'
import Navbar2 from '../components/Navbar2';
import { Register } from '../components/Register';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { RouteConstants } from '../constants';

const Login = () => {
  const navigate = useNavigate();
  const [loginVisible, setLoginVisible] = useState(true);
  const [loginData, setLoginData] = useState({});

  const handleLoginVisible = (loginVisible) => {
    setLoginVisible(loginVisible);
  };
  const handleChangeLoginData = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setLoginData({ ...loginData, [name]: value });
  };
  const handleLoginClick = () => {
    const { email, password } = loginData;

    if (email && password) {
      // Navigate to the Home page
      navigate(RouteConstants.home);
      console.log(loginData);
    } else {
      // Display a toast message
      toast.error('Please fill all details');
    }
  };


  return (
    <div>
      <Navbar2 />
      <div className="login-page-content">
        {/* left section */}
        <div className="login-page-section">
          <img src={stethoscope} alt="stethoscope" width={500} />
          <p className='w-75 mt-3 text-start'>DataSpectiv offers the easiest and the most reliable assessments of your risks and the best advice to mitigate them.
          </p>
        </div>
        {/* right section */}
        <div className="login-page-section">
          {loginVisible
            ? <div className="loginForm">
              <div className='m-5 d-flex flex-column justify-content-start align-items-start' style={{ width: '26vw' }}>
                <h3 className='text-start'>Login</h3>
                <label htmlFor="email" className='fs-16 text-start'>EMAIL</label>
                <input type="email" name='email' onChange={(e) => handleChangeLoginData(e)} className='loginInputbox' value={loginData.email} placeholder='EMAIL' />
                <label htmlFor="password" className='fs-16'>PASSWORD</label>
                <input type="password" name='password' onChange={(e) => handleChangeLoginData(e)} className='loginInputbox' value={loginData.password} placeholder='PASSWORD' />
                <button type="submit" className='green-button w-100 mb-2' onClick={() => handleLoginClick()}>Continue</button>
                <p className='fs-12 m-auto'>Don’t have an account? <button type="button" className='green-transparent underlined-text' onClick={() => handleLoginVisible(false)}>Click to Sign Up</button></p>
              </div>
            </div>
            : <Register handleLoginVisible={handleLoginVisible} />}
        </div>
      </div>
    </div>
  )
}

export default Login