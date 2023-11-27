import { Routes, Route } from "react-router-dom"

import Home from "./components/Home";
import Login from "./components/Login"
import Register from "./components/Register"
import View from "./components/View"
import Edit from "./components/Edit"
import AddUser from "./components/AddUser"

function App() {

  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/" element={<Login />} />
      <Route path="/add" element={<AddUser />} />
      <Route path="/register" element={<Register />} />
      <Route path="/view/:id" element={<View />} />
      <Route path="/edit/:id" element={<Edit />} />
    </Routes>
  )
}

export default App
