import React, { useState } from 'react'
import { Drawer,Button } from 'antd'
export default function Rdrawer() {
    const [visible,setVisible] = useState(false);
  return (
    <div>
        <Button type='primary' onClick={()=>{
            setVisible(true);
        }}>Click</Button>
        <Drawer title="Drawer" placement='left' closable={false} visible={visible} onClose={()=>{setVisible(false)}}>
            <p>item1</p>
            <p>item2</p>
            <p>item3</p>
            <p>item4</p>
        </Drawer>
    </div>
  )
}
