import React, { useState, useEffect } from 'react'
import * as qs from 'qs'
import { List } from './list'
import { Search } from './searcn-panel'

export const ProList = () => {
  const [list, setList] = useState([])
  const [params, setParams] = useState({
    name: '',
    pid: ''
  })
  useEffect(() => {
    console.log('====', process.env);
    fetch('http://localhost:3008/login', {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    }).then(async res => {
      if (res.ok) {
        console.log(res.json, 'res');
        setList(await res.json())
      }
    })
  }, [params])
  return <div>
    <Search params={params} setParams={setParams}></Search>
    <List list={list}></List>

  </div>
}