import React, { useState, useEffect } from 'react'

import { List } from './list'
import { Search } from './searcn-panel'
export const ProList = () => {
  const [list, setList] = useState([])
  const [params, setParams] = useState({
    name: '',
    pid: ''
  })
  useEffect(() => {
    console.log('====', process.env.REACT_D_URL);
    fetch('http://localhost:3008/users').then(async res => {
      if (res.ok) {
        console.log(res, 'res');
        setList(await res.json())
      }
    })
  }, [params])
  return <div>
    <Search params={params} setParams={setParams}></Search>
    <List list={list}></List>

  </div>
}