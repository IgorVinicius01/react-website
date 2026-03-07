import { Route, Routes } from "react-router-dom"
import Login from "./components/login"
import Home from "./components/home"
import Kitnets from "./components/kitnets"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/home" element={<Home />}>
        <Route index element={<div>Dashboard inicial</div>} />
        <Route path="Kitnets" element={<Kitnets />} />
      </Route>
    </Routes>
  )
}

export default App