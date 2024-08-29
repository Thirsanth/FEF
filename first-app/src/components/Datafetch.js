import React from 'react'
import data from '../static/records.json'
export default function Datafetch() {
    const Dhandler =   data.map((t)=>{
            return(
            <tr>
                    <td>{t.id}</td>
                    <td>{t.name}</td>
                    <td>{t.fullName}</td>
                    <td>{t.ticketNumber}</td>
                    <td>{t.ticketTopic}</td>
                    <td>{t.examGrade}</td>
                    <td>{t.finalGrade}</td>
                    <td>{t.status}</td>
                    <td>{t.details}</td>
                </tr>
            )
        })

  return (
    <div>
    
        <table border={10}>
        <thead>        
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>FullName</th>
            <th>ticketNumber</th>
            <th>ticketTopic</th>
            <th>examgrade</th>
            <th>finalGrade</th>
            <th>status</th>
            <th>details</th>
            
        </tr>
        </thead>
        <tbody>
        {Dhandler}
        </tbody>
        </table>
        
            </div>
            
        
   
  )
}


