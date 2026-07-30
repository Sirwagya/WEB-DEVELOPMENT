import React from 'react'
import {useState} from 'react'
import Display from './Components/Display.jsx'
import Controls from './Components/Controls.jsx'

const App = () => {
    const [count, setCount] = useState(0)
  return (
    <div>
      <Display count={count} />
      <Controls setCount={setCount} />
    </div>
  )
}

export default App