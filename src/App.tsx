import React, { createRef, useEffect, useReducer, useMemo, useRef, useState } from 'react';
import Robot from './compoment/Robot'
// import './App.css'
import styles from './App.module.css';
import qs from 'qs'

import robots from './mock/robot.json'


function App() {
  // qs.stringify()
  return (
    <div className={styles.App}
      onClick={(e) => {

      }}>
      {
        robots.map(r => <Robot id={r.id} name={r.name} key={r.id} emial={r.email}></Robot>)
      }
      <div className={styles.aaa}>333</div>
    </div>
  );
}

export default App;
