import { Button, message, Popconfirm } from 'antd'
import React, { useCallback, useState } from 'react'

export default function Confirmactiondemo() {
    const [percent,setPercent] = useState(0);
    function confirm(){
        message.success("confirmed");
        setPercent(percent+10);
        
    }
    function cancel(){
        message.error("cancel");
    }
  return (
    <div>
      <Popconfirm title='This is pop confirm title' description="this is the discription" onConfirm={confirm} onCancel={cancel} okText="Yes" cancelText="No">
        <Button>Pop confirm</Button>

      </Popconfirm>
    </div>
  )
}
