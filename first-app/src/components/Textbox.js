import React, { useState } from 'react'

export default function Textbox() {
    const [data,setData] = useState("");
  return (
    <div>
      <input type='text' id='data_text' value={data} onChange={(e)=>{
       setData(e.target.value);
      }} />
      <br></br>
      <h1>{data}</h1>
    </div>
  )
}
