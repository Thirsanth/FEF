import React, { useEffect, useState } from 'react'

const Datafetch = () => {
  const [data,setData] = useState([]);  
  const [search,setSearch] = useState("");

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(async function(res){
        const json = await res.json();
        setData(json);
    })
  },[data])
//   useEffect(()=>{
//     setData(data.filter((i)=>{
//         return i.title.toLowerCase().includes(search.toLowerCase())
//     }))
//   },[search])
  return (
    <div>
        <div>
            <input type='text' placeholder='Enter title' value={search} onChange={(e)=>{
                setSearch(e.target.value);
                setData(data.filter((i)=>{
                    return i.title.toLowerCase().includes(search.toLowerCase())
                }))
            }} />
        </div>
        {data.map((d)=>{
            return <div style={{border:"1px solid black"}}>
                <h2>ID:{d.id}</h2>
                <h2>Title:{d.title}</h2>
                <h2>Body:{d.body}</h2>

                </div>
        })}
    </div>
  )
}

export default Datafetch
