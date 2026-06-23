import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/note/:id" element={<Note />} />
        <Route path="/notes" element={<Notes />} />
        {/* Note Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
