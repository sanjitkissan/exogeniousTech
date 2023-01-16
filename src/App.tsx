import FAQS from './components/CardPages/FAQS';
import React, { useState,useEffect } from 'react';

import './App.css';
import "./index.css"
import MutualFundMainPage from './pages/MutualFundDashBoard';
import Holdings from './components/CardPages/Holdings';
import Cardmainpage from './components/CardPages/Cardmainpage';

import SignUp from './components/mutualfund/SignUp';
import MainPage from 'components/LandingPage/MainPage';


function App() {
      

  return (
   
    <div className='w-full '>
        {/* <MutualFundMainPage/> */}
        {/* <FAQS/> */}
      {/* <Holdings/> */}
      {/* <Cardmainpage/> */}
      {/* <SignUpForm/> */}
      {/* <SignUp/> */}
      <MainPage/>
    </div>
   
  );
}

export default App;

