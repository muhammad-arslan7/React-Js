import { useState } from 'react'
import './App.css'

function App() {

  const [hookVariable , hookFunction] = useState(0)
  // above line contains a hook in React which updates DOM everywhere when its function is called
  const addVal = ()=>{
    // hookFunction(hookVariable+1)
    // hookFunction(hookVariable+2)
    // hookFunction(hookVariable+3)
    // in above case as same hook function is running 3 times so only the last one will result in output.


    hookFunction((hookVariable) => hookVariable + 1)
    hookFunction((hookVariable) => hookVariable + 1)
    hookFunction((hookVariable) => hookVariable + 1)
    hookFunction((hookVariable) => hookVariable + 1)
  }
  const SubtractVal = ()=>{
    // hookFunction(hookVariable-1)
    
        hookFunction((hookVariable)=>hookVariable - 1)
        hookFunction((hookVariable)=>hookVariable - 1)
        hookFunction((hookVariable)=>hookVariable - 1)
        hookFunction((hookVariable)=>hookVariable - 1)
  }
  return (
    <>
      <h1>States in ReactJs</h1>
      <h2>Counter Value <span style={{fontWeight:'bold', fontSize:'52px'}}>{hookVariable}</span></h2>
      <button 
      onClick={addVal} 
      >Add Value</button>
      <button 
      onClick={SubtractVal}
      >Subtract Value</button>
    </>
  )
}

export default App