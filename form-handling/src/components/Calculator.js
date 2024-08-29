import React, { useState } from 'react'

export default function Calculator() {

    const [res,setRes] = useState("");
    const [inputvalue,setInputvalue] = useState("");
    const [check,setCheck] = useState("false");
    const [exp,setExp] = useState("");
    
    const clickhandler =()=>{
        try{
            setRes(eval(inputvalue).toString());
            // setHistory([...history,inputvalue]);
            setExp(inputvalue);
            setInputvalue(res);
            setCheck("true");
            
        }
        catch{
            setRes("Error");
        }
        
    }
   const historyhandler = ()=>{
    setHistory([...history,exp+"="+res]);
    setExp("");
    setCheck("false");
   }
    const resetInput = ()=>{
        setCheck("false");
    }
    const [history,setHistory]=useState([]);
    // const []
  return (
    <div>
    <div className='grid grid-rows-7 text-white '>
        <div>
            <input id="inputbox" className='border-4 border-black bg-black' type='text' onChange={(e)=>{
                e.preventDefault();
                setInputvalue(e.target.value);
            }} value={check==="true"?res:inputvalue} placeholder='calculate' />
        </div>
        <div >
            <button className='border-2 border-b-black bg-black w-5'>9</button>
            <button className='border-2 border-b-black bg-black w-5'>8</button>
            <button className='border-2 border-b-black bg-black w-5'>7</button>
            <button className='border-2 border-b-black bg-black w-5'>+</button>
        </div>
        <div>
            <button className='border-2 border-b-black bg-black w-5'>6</button>
            <button className='border-2 border-b-black bg-black w-5'>5</button>
            <button className='border-2 border-b-black bg-black w-5'>4</button>
            <button className='border-2 border-b-black bg-black w-5'>-</button>
        </div>
        <div>
            <button className='border-2 border-b-black bg-black w-5'>3</button>
            <button className='border-2 border-b-black bg-black w-5'>2</button>
            <button className='border-2 border-b-black bg-black w-5'>1</button>
            <button className='border-2 border-b-black bg-black w-5'>x</button>
        </div>
        <div>
            <button className='border-2 border-b-black bg-black w-5'>0</button>
            <button className='border-2 border-b-black bg-black w-5'>(</button>
            <button className='border-2 border-b-black bg-black w-5'>)</button>
            <button className='border-2 border-b-black bg-black w-5' >/</button>
        </div>
        <div>
            <button  className='border-2 border-b-black bg-black w-20' onClick={clickhandler}>Calculate</button>
            <button className='border-2 border-b-black bg-black w-20' onClick={resetInput}>Reset</button>
        </div>
        
    </div>
    <div>
        <button onClick={historyhandler}>History</button>
    {/* <h1>History</h1> */}
    {history.map((t)=>{
        return(
             <ul>
            <li className='text-black'>{t}</li>
        </ul>
        )
        
    })}
    </div>
    </div>
  )
}
