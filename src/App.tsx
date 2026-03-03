import { Route, Routes } from "react-router-dom"
import Login from "./components/login"
import Home from "./components/home"
import Predio from "./components/predio"


function App() {

  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/home" element={<Home />}>
        <Route index element={<div>Dashboard inicial</div>} />
        <Route path="predio" element={<Predio />} />
      </Route>
    </Routes>
  )
}

export default App