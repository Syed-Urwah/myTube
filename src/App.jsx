import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Vidoes from "./components/Vidoes";
import Home from "./pages/Home";
import Singlevideo from "./pages/Singlevideo";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/video" element={<Singlevideo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
