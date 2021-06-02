import React, { useState, useEffect } from 'react'
export const Search = ({ params, setParams }) => {

  const [users, setUsers] = useState([])
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