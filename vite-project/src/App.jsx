import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './Componets/Homepage/Homepage.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Homepage/>
    </>
  )
}

export default App
