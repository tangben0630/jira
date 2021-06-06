import React, { createRef, useEffect, useReducer, useMemo, useRef, useState } from 'react';
import Robot from './compoment/Robot'
import './App.css'
import robots from './mock/robot.json'


function App() {
  return (
    <div>
      {
        robots.map(r => <Robot id={r.id} name={r.name} key={r.id} emial={r.email}></Robot>)
      }

    </div>
  );
}

export default App;
