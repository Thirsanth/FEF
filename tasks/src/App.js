import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import students from './Students.json';
import Datafetch from './components/Datafetch';
import { Alert, BackTop,Button,ConfigProvider, DatePicker } from "antd";
import enUS from 'antd/es/calendar/locale/en_US';
import zhCN from 'antd/locale/zh_CN';
import frFR from 'antd/locale/fr_FR';
import hiIN from 'antd/lib/locale/hi_IN';
import { ToastContainer, toast } from 'react-toastify';
import Age from './components/Age';
import Rtoast from './components/Rtoast';
import Rdrawer from './components/Rdrawer';
import Message from './components/Message';
import Modaldemo from './components/Modaldemo';
import Notificationinfo from './components/Notificationinfo';
import Confirmactiondemo from './components/Confirmactiondemo';
import Progresscomp from './components/Progresscomp';

function App() {

  // const [data,setData] = useState([...students]);
  // useEffect(()=>{

  //   localStorage.setItem('tasks',JSON.stringify(data))
  // },[data])
  // const notify = () => toast("Wow so easy!");
  return (
    <div>
      {/* <TaskInput setData={setData}  /> */}
      {/* <ViewTasks data={data}  /> */}
      {/* <ConfigProvider locale={hiIN}> */}

      {/* <Datafetch /> */}
      {/* <DatePicker /> */}
      {/* <BackTop style={{color:"white",background:"blue"}}>
        up
      </BackTop> */}
      {/* <Button type='primary'>primary button</Button>
      <div style={{marginTop:'20px'}}>
        <Alert message="Success Alert" type='success' showIcon />
        <Alert message="Info Alert" type='info' showIcon />
        <Alert message="Warning Alert" type='warning' showIcon />
        <Alert message="Error Alert" type='error' showIcon />
      </div>
      <button onClick={notify}>Notify!</button>
      <ToastContainer />
      </ConfigProvider> */}
      {/* <Age /> */}
      {/* <Rtoast /> */}
      <Rdrawer />
      <Message />
      <Modaldemo />
      <Notificationinfo />
      <Confirmactiondemo />
      <Progresscomp />

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
