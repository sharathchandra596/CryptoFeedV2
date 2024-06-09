import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Coin from "./pages/Coin";

// import { useContext } from "react";


// import Test, { AppContext } from "./components/Test"

function App() {

  return (
    <div className=" bg-gradient-to-r from-indigo-700 to-purple-800 ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:coinId" element={<Coin />} />
      </Routes>
    </div>
  );
}

export default App;
