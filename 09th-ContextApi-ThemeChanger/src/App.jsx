import { useState } from 'react'
import './App.css'
import Card from '../../09th-ContextApi-ThemeChanger/src/components/card'
import Btn from '../../09th-ContextApi-ThemeChanger/src/components/btn'

import React from 'react'
import { ThemeProvider } from '../../09th-ContextApi-ThemeChanger/src/Context/ThemeContext'
import { useEffect } from 'react'

function App() {

  const [ThemeMode,setThemeMode]= useState()
  const LightMode = ()=>{
    setThemeMode("light")
  }
  const DarkMode = ()=>{
    setThemeMode("dark")
  }


  useEffect(()=>{
    document.querySelector("html").classList.remove("light","dark")
    document.querySelector("html").classList.add(ThemeMode)

  },[ThemeMode])

  return (
    <ThemeProvider value={{ThemeMode , DarkMode , LightMode}}>
      <div className="flex justify-center items-center min-h-screen bg-gray-100 relative dark:bg-gray-900">
      <Btn />
      <Card />
      </div>
    </ThemeProvider>
  )
}

export default App
