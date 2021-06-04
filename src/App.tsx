import React, { createRef, useEffect, useReducer, useMemo, useRef, useState } from 'react';
import './App.css'
import Aaa from './Aaa'
import { usePrevs } from './until/index'

export const Ctx = React.createContext({})
const list = ['a', 'b', 'c', 'd']
function App() {
  let [a, setA] = useState<number>(99)
  let [name, setName] = useState<string>('')
  // const [obj2, setObj] = useState<Object>({ nihao: 'ma' })
  const click = () => {
    let b = ++a
    setA(b)

  }
  // const aa = usePrevs(a)
  // const click2 = () => {
  //   let b = --a
  //   setA(b)
  // }
  // const ref1: any = createRef()
  // const ref2: any = useRef()
  // if (!ref1.current) {
  //   ref1.current = a
  // }
  // if (!ref2.current) {
  //   ref2.current = a
  // }
  // const getName = () => {
  //   console.log('你应该也是啊 ');

  //   return name
  // }
  const memo_getProductName = useMemo(() => {
    console.log('name memo 触发')
    return () => name  // 返回一个函数
  }, [name])
  useMemo(() => {
    console.log('name effect 触发')
    memo_getProductName()
  }, [name])
  useMemo(() => {
    console.log('price effect 触发')
  }, [a])
  return (
    <div>
      <div>{name}</div>
      <div>{a}</div>
      <div>{memo_getProductName()}</div>
      <div className="App" onClick={() => { click() }}>
        {a}
      </div>
      <button onClick={() => setName(list[Math.random() * list.length << 0])}>修改名字</button>
      {/* <div>now: {a}------------before: {aa}</div>
      <p>456: {ref2.current}</p>
      <input type="text" />
      <div className="App" onClick={() => { click() }}>
        {a}
      </div>
      <div className="App" onClick={() => { click2() }}>
        {c}
      </div>
      <Ctx.Provider value={obj2}>
        <Aaa></Aaa>
      </Ctx.Provider> */}
    </div>
  );
}

export default App;
