import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import students from './Students.json';
import Datafetch from './components/Datafetch';
function App() {

  // const [data,setData] = useState([...students]);
  // useEffect(()=>{

  //   localStorage.setItem('tasks',JSON.stringify(data))
  // },[data])
  return (
    <div>
      {/* <TaskInput setData={setData}  /> */}
      {/* <ViewTasks data={data}  /> */}
      <Datafetch />
    </div>
  );
}


function TaskInput({setData}){
  const [date,setDate] = useState("");
  const [title,setTitle] = useState("");
  const [description,setDescripion] = useState("");
  return(
    <div>
      
      <input type ="date" id="dateinput" value={date} onChange={(e)=>{
        setDate(e.target.value);
      }} /><br />
      <input type="text" id = "title" value={title} placeholder="Enter Title" onChange={(e)=>{
        setTitle(e.target.value);
      }} /><br />
      <input type="text" id="desc" value={description} placeholder="Enterdescription" onChange={(e)=>{
        setDescripion(e.target.value);
      }} /><br />
      <button onClick={()=>{
        setData(prevdata=>[...prevdata,{
          "date":date,
          "title":title,
          "description":description
        }])

       

      }}>Submit</button>
    </div>
  )
}

function ViewTasks({data}){
  const datafetched = JSON.parse(localStorage.getItem('tasks'));


  return (
    <div>
      {/* {data} */}
{/* {data.map(function(d){
        return <div>
          {d.date}
          {d.title}
          {d.description}
          </div>
      })} */}
      {datafetched.map(function(d){
        return <div>
          {d.date}
          {d.title}
          {d.description}
          </div>
      })}
      
  </div>
  )
  
}

export default App;
