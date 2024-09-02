import React, { useState } from 'react'

import { Alert, Button } from 'antd';

export default function Age() {
    const [age,setAge] = useState();
    const [message,setMessage] = useState("success alert");
    const [typeval,setTypeval] = useState("success");
    function checker(){
        if(age>=18){
            setMessage("Your age is valid");
            setTypeval("success");
        }
        else if(age<0){
            setMessage("Age cannot be negative");
            setTypeval("error");
        }
        else if(age == 0){
            setMessage("Warning age cant be 0");
            setTypeval("warning");
        }
        else{
            setMessage("Your age is not valid");
            setTypeval("info");
        }
        
    }

   return (
    <div>
      <input type='number' value={age} onChange={(e)=>{
        setAge(e.target.value);
      }} />
      <Button type="primary" onClick={checker} >Check</Button>
      <Alert message={message} type={typeval} showIcon />
    </div>
  )
}
