import { useState } from 'react'
import './App.css'
function App() {
  const [color,setColor]=useState("black")
  const [text]=useState("black");
  return (
    <>
      <div style={{backgroundColor:color}} className='flex items-center justify-center h-screen'>
    
      <button onClick={()=>setColor("blue")}
       className ='flex items-center px-4 py-3 text-white bg-blue-500 hover:bg-blue-400 rounded m-10' style=  {{backgroundColor:"blue",color:text}}>blue</button>

      <button onClick={ ()=>setColor("green") } className='flex items-center px-4 py-3 text-white bg-green-500 hover:bg-green-400 rounded m-10' style={{backgroundColor:"green",color:text}}>green</button>

       <button onClick={ ()=>setColor("yellow")} className='flex items-center px-4 py-3 text-white bg-yellow-500 hover:bg-yellow-400 rounded m-10 ' style={{backgroundColor:"yellow",color:text}}>yellow</button>

      <button onClick={ ()=>setColor("red")} className='flex items-center px-4 py-3 text-white bg-red-500 hover:bg-red-400 rounded m-10' style={{backgroundColor:"red",color:text}}>red</button>

      </div>
    </>
  )
}

export default App
