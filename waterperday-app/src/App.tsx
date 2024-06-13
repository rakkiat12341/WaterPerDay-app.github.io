import Heroes from './component/Heroes'
import './App.css'
import { useState } from 'react'

function App() {
  const[theme,setTheme] = useState<string>("light")
  return (
    <div className={"container "+theme}>
    <div className='container-app'>
      <Heroes theme={theme} setTheme={setTheme}></Heroes>
    </div>
    </div>
  )
}

export default App
