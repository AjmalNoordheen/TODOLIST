import './assets/App.css'
import { useState } from 'react'

function App() {
  const [toDos,setToDos] = useState([])
  const [toDo,setToDo] = useState('')
  function today(){
    const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
      return days[new Date().getDay()]
  }


  function addValue(){
    if(toDo.trim()!=""){
    setToDos([...toDos,{id:Date.now(),text:toDo,status:false}])
    setToDo('')
    }else{
      alert('feild is Empty !!')
    }
  }

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's  {today()} ☕ </h2>
      </div>
      <div className="input">
        <input  value={toDo} onChange={(event)=>setToDo(event.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={addValue}  className="fas fa-plus"></i>
    
      </div>
      <div className="todos">
        {toDos.map((value)=>{
          return(<div className="todo">
          <div className="left">
            <input onChange={(e)=>{
              toDos.filter((obj1)=>{
                if(obj1.id===value.id){
                  obj1.status = e.target.checked
                }
                return obj1
              })
            }}type="checkbox" name="" id="" />
            <p>{value.text}</p>
          </div>
          <div className="right">
            <i onClick={()=>setToDos(toDos.filter((newvalue)=>{
              if(newvalue.id != value.id){
                return value
              }
            }))} className="fas fa-times"></i>
          </div>
        </div>)

        })}       
      </div>
    </div>
  )
}

export default App
