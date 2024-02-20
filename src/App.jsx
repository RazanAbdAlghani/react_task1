import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const changeCount = () => {
    setCount(count + 1);
    // console.log(count);
  }

  return (
    <>
      <div className='a'>
        <button onClick={changeCount}>razan abd-alghani {count}</button>
      </div>
    </>
  )
}

export default App
