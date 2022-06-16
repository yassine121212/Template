import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Template from "./pages/template";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='testwi'>
       <Template/>
    </div>
  )
}

export default App
