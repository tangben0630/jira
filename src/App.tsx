import React, { createRef, useEffect, useReducer, useMemo, useRef, useState } from 'react';
import Robot from './compoment/Robot'
import './App.css'


function App() {
  return (
    <div>
      <Robot id={'123'} name={'456'} emial={'789'}></Robot>
    </div>
  );
}

export default App;
