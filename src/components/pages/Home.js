import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../views/Navbar';
import Citacao from '../views/citacao';
import Countdown from '../views/countdown';
import GeradorProc from '../services/geradorproc';


const Home = () =>{
  return (
    <div>
      <GeradorProc />
      <Navbar />
      <Citacao />
      <Countdown />
    </div>
  );
}

export default Home;