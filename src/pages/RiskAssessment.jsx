import React from 'react'
import '../App.css';
import { useNavigate } from 'react-router-dom';
import { RouteConstants } from '../constants';
import Navbar from '../components/Navbar';

function RiskAssessment() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate(RouteConstants.login);
  };


  return (
    <div className='result'>
      <Navbar />
      <div className='result-page-content'>
        <div className='d-flex flex-column justify-content-center align-items-center w-50'>
          <h1>Risk Assessment (Risk Identified)</h1>
          <p className='fs-16 text-center'>Based on your responses, we have identified potential compliance risks. Please register  or login to obtain your free initial assessment  report. </p>
          <div className='d-flex flex-row justify-content-around align-items-center'>
            <button onClick={() => handleLogin()} className='green-button me-3' >
              Register for Free
            </button>
            <button onClick={() => handleLogin()} className='green-button'>
              Login
            </button>
          </div>
        </div>
        {/* <div className='d-flex flex-column justify-content-center align-items-center w-50'>
          <h1>Risk Assessment (No Risk Identified)</h1>
          <p className='fs-16 text-center'>Hurray! Based on your responses, we have identified potential compliance risks. Please register  or login to obtain your free initial assessment  report. </p>
          <div className='d-flex flex-row justify-content-around align-items-center'>
            <button onClick={() => handleRegister()} className='green-button me-3' >
              Register for Free
            </button>
            <button onClick={() => handleLogin()} className='green-button'>
              Login
            </button>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default RiskAssessment