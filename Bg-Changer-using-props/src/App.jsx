import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("green")

  const colorGenerate = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    setColor(`rgb(${r}, ${g}, ${b})`);
  }

  return (
    <>
      <div className=' w-full h-screen py-[30vh] px-[30vw]' style={{backgroundColor: color}}>
        <div className='flex gap-4 items-center'>
          <p className=' text-white text-2xl font-semibold'>click the button to generate a random color:</p>
          <button 
            onClick={() => colorGenerate()}
            className='text-white p-2 shadow-lg bg-[#ffffff57] rounded-lg font-bold text-xl'>Generate</button>
        </div>
        <p className='text-white mt-40 text-center'>This test page is made using javascript logics and useStates from ReactJs</p>
      </div>
    </>
  )
}

export default App
