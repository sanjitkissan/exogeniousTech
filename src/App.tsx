import FAQS from './components/CardPages/FAQS';
import React, { useState,useEffect } from 'react';

import './App.css';
import "./index.css"
import MutualFundMainPage from './pages/MutualFundDashBoard';
import Holdings from './components/CardPages/Holdings';
import Cardmainpage from './components/CardPages/Cardmainpage';
import SignUpForm from './components/Form/SignUpForm';
import LoginPage from 'components/mutualfund/LoginPage';


function App() {
      

  return (
   
    <div className='w-full '>
        {/* <MutualFundMainPage/> */}
        {/* <FAQS/> */}
      {/* <Holdings/> */}
      {/* <Cardmainpage/> */}
      {/* <SignUpForm/> */}
      <LoginPage/>
    </div>
   
  );
}

export default App;

