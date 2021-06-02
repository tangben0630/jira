import React, { useState, useEffect } from 'react'
export const Search = () => {
  const [params, setParams] = useState({
    name: '',
    pid: ''
  })
  const [users, setUsers] = useState([])
  const [list, setList] = useState([])
  const change = (e) => {
    console.log('-----', e.target.value);
    setParams({
      ...params,
      name: e.target.value
    })
  }
  const change2 = (e) => {
    console.log('-----', e.target.value);
    setParams({
      ...params,
      name: e.target.value
    })
  }
  useEffect(() => {
    console.log('====');
    fetch('').then(async res => {
      if (res.ok) {
        setList(await res.json())
      }
    })
  }, [params])
  return <form>
    <input type="text" value={params.name} onChange={(e) => { change(e) }} />
    <select id="" value={params.pid} onChange={(e) => { change2(e) }}>
      <option value="000">123</option>
      {
        users.map(el => {
          return <option value={el.pid}>{el.name}</option>
        })
      }
    </select>
  </form>
}