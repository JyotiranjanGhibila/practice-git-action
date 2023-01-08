import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount]=useState([])
  return (
    <div>
        <h1>count: {count}</h1>
        <button onClick={()=>setCount(count+1)}>ADd</button>
    </div>
  )
}

export default Counter