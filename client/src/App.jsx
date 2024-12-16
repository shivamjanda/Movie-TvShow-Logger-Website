import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SignUp from './Components/Signup'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        {/* path is the signup page and element is the react component assoicated with it */}
        <Route path = "/signup" element={<SignUp />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
