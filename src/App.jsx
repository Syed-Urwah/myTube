import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Vidoes from "./components/Vidoes";
import Home from "./pages/Home";
import Singlevideo from "./pages/Singlevideo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Subscribe from "./pages/Subscribe";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <div>
      <main id="main" className="flex bg-bg-main">
        <Navbar/>
        {/* <Vidoes type="random" /> */}
     
      {/* <Navbar/> */}
      <Routes>
          <Route path="/" index element={<Home />}/>
          <Route path="/video" element={<Singlevideo />} />
          <Route path="/sub" element={<Subscribe/>}/>
          <Route path="/signup" element={<Signup/>}/>
      </Routes>
      </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
