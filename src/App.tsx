import React, { useState, useEffect } from 'react';
import './App.css';

import Spatial from './spatial';
import Airpods from './airpods';
import Runner from './runner';
import Card from './card2';
import Battery from './battery';

function App() {

  return(
    <div className='App'>
      <Spatial />
      {/* <Airpods /> */}
      {/* <Battery /> */}
      {/* <Runner /> */}
      {/* <Card /> */}        
    </div>
  )
}

export default  App;