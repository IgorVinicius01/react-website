import { Route, Routes } from "react-router-dom"
import Login from "./components/login"
import Home from "./components/home"


function App() {

  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
    </Routes>
  )
}

export default App