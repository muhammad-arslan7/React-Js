import { useState } from 'react'
import Login from './components/login'
import Profile from './components/profile'
import UserContextProvider from './context/userContextProvider'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
    <Profile/>
    <Login/>
    </UserContextProvider>
  )
}

export default App
