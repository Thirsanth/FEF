import React from 'react'

export default function Newuser() {
  return (
    <div>
      <form style={{display:'flex' , flexDirection:"column", justifyContent:"center", alignItems:"center", height:"100vh"}}>
        <h1>Sign up</h1>
        <input type='text' placeholder='username' /><br />
        <input type='text' placeholder='password' /><br />
        <input type='number' placeholder='Enter mopbile number'/><br />
        <input type='date' /><br />
        <button className='bg-blue-500 rounded-full px-2 mt-2  mr-2' type='submit'>Sign up</button>
      </form>
    </div>
  )
}
