import React, { useState } from 'react'
import { Button, Progress } from 'antd';
export default function Progresscomp() {
    const [percent,setPercent] = useState(0);
  return (
    <div>
      <Button onClick={()=>{
        setPercent(percent+10);
      }}>YES</Button>  
      <Progress type='circle' percent={percent} />
    </div>
  )
}
