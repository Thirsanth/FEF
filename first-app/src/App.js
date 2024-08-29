import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Test from './components/Test';
import Greet from './components/Greet';
import Updatebtn from './components/Updatebtn';
import Textbox from './components/Textbox';
import Datafetch from './components/Datafetch';
function App() {
  // const [count,setCount] = useState(0);
  // const [todos,setTodos] = useState([]);
  // fetch("https://sum-server.100xdevs.com/todos")
  // .then(async (res)=>{
  //   const json =await res.json();
  //   setTodos(json.todos);
  // })
  return (
    // <button onClick={()=>{setCount(count+1)}}>Click here{count}</button>
    // <div>
    //   <Todo data={todos} />
    // </div>
    <div>
      {/* Hello world! */}
      {/* <Test /> */}
      {/* <Greet data={"hello world"} /> */}
      {/* <Updatebtn /> */}
      {/* <Textbox /> */}
      <Datafetch />
    </div>
  );
}

// function Todo({data}){
//   return <div>
//     {data.map(function(t){
//       return <div>
//         <h1>{t.title}</h1>
//         <h2>{t.description}</h2>
//         </div>
//     })}
//   </div>
// }

export default App;
