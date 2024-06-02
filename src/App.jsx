// import { Route, Routes } from "react-router-dom"
// import Navbar from "./components/Navbar"
// import Home from "./pages/Home"
// import Coin from "./pages/Coin"

import { useContext } from "react"
import { AppContext, } from "./components/Test"
import Test from "./components/Test"
// import Test, { AppContext } from "./components/Test"




function App() {
  const name=useContext(AppContext)

  return (
    <div className=' bg-gradient-to-r from-indigo-700 to-purple-800'>
      {/* <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/coin/:coinId" element={<Coin/>}/>
      </Routes> */}
      <Test/>
      
    </div>
  )
}

export default App
