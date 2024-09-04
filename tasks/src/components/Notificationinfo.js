import { Button,notification } from 'antd'
import React from 'react'

export default function Notificationinfo() {
  return (
    <div>
      <Button type='primary' onClick={()=>{
        notification.open({
            message:'simple notification title',
            description:'simple notification description'
        });
      }}>info notification</Button>
    </div>
  )
}
