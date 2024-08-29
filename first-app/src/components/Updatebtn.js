import React, { useState } from 'react'

export default function Updatebtn() {
    const [count,setCount] = useState(0);
  return (
    <div>
        <h1>You clicked {count}</h1>
      <button onClick={
        function(){
            setCount(count+1);
        }
      }>Click me</button>
    </div>
  )
}
