import React, { useState } from 'react'
import { Button,Modal } from 'antd'
export default function Modaldemo() {
  const [isVisible,setIsVisible] = useState(false);
  return (
    <div>
      <Button onClick={()=>{setIsVisible(true)}}>CLick to open modal</Button>
      <Modal title="modal title" visible={isVisible} onOk={()=>{setIsVisible(false)}} onCancel={()=>{setIsVisible(false)}}>
        <p>This is modal description</p>
      </Modal>
    </div>
  )
}
