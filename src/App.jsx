import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Page from './components/Page'
// import VirtualAssistant from './components/gif'
import Page2 from './components/Page2'
// import Temp from './components/temp';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Page/> */}
      <Page2/>
      {/* <VirtualAssistant/> */}
      {/* <Temp/> */}
    </>
  )
}

export default App
