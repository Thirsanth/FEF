import React from 'react'
import { Button,message } from 'antd'
export default function Message() {
    const [messageApi, contextHolder] = message.useMessage();
    const success=()=>{
        messageApi.open({
            type:'success',
            content:"Successfull"
        })
    }
  return (
    <div>
      {/* <Button type='primary' onClick={()=>{
        message.info("Button clicked");
      }}>
        Message btn
      </Button> */}
      {contextHolder}
      <Button type='primary' onClick={success}>Success btn</Button>
    </div>
  )
}
