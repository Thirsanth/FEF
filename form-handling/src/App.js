import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Calculator from './components/Calculator';
import Alreadyuser from './components/Alreadyuser';
import Newuser from './components/Newuser';

function App() {
  const [check,setCheck] = useState("false");
  return (
    <div>
    <button className='bg-blue-500 rounded-full px-2 mt-2  mr-2' onClick={()=>{
      setCheck("true");
    }}>New Sign in</button>
    <button className='bg-blue-500 rounded-full px-2 mt-2 mr-2'  onClick={()=>{
      setCheck("false");
    }}>Already a user</button>

    {check==="false"?<Alreadyuser />:<Newuser />}
    </div>
    // <Calculator />
  );
}

// function NewSignin(){

//   return(
    // <div>
    //   <form style={{display:'flex' , flexDirection:"column", justifyContent:"center", alignItems:"center", height:"100vh"}}>
    //     <h1>Sign up</h1>
    //     <input type='text' placeholder='username' /><br />
    //     <input type='text' placeholder='password' /><br />
    //     <input type='number' placeholder='Enter mopbile number'/><br />
    //     <input type='date' /><br />
    //     <button type='submit'>Sign up</button>
    //   </form>
    // </div>
//   )

// }

// function Alreadyuser(){
// return(
  // <div>
  //   <form style={{display:'flex' , flexDirection:"column", justifyContent:"center", alignItems:"center", height:"100vh"}}>
  //     <h1>Sign In</h1>
  //       <input type='text' placeholder='username' /><br />
  //       <input type='text' placeholder='password' /><br />
  //       <button type='submit'>Sign in</button>
  //     </form>
  // </div>
// )

// }

export default App;
