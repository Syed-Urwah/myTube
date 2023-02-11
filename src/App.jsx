import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Vidoes from "./components/Vidoes";
import Home from "./pages/Home";
import Singlevideo from "./pages/Singlevideo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      {/* <Navbar/> */}
      <Routes>
          <Route path="/" index element={<Home />}/>
          <Route path="/video" element={<Singlevideo />} />
          <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
