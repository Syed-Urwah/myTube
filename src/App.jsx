import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Singlevideo from "./pages/Singlevideo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Subscribe from "./pages/Subscribe";
import Trend from "./pages/Trend";
import Music from "./pages/Music";
import Gaming from "./pages/Gaming";
import News from "./pages/News";
import Sports from "./pages/Sports";
import Movie from "./pages/Movie";

function App() {
  
  return (
    <BrowserRouter>
      <Header/>
      <div>
      <main id="main" className="flex bg-bg-main min-h-[94vh]">
       <Navbar/>
      
      <Routes>
          <Route exact path="/" index element={<Home />}/>
          <Route path="/video/:id" element={<Singlevideo />} />
          <Route path="/sub" element={<Subscribe/>}/>
          <Route path="/trend" element={<Trend/>}/>
          <Route path="/music" element={<Music/>}/>
          <Route path="/movie" element={<Movie/>}/>
          <Route path="/gaming" element={<Gaming/>}/>
          <Route path="/news" element={<News/>}/>
          <Route path="/sports" element={<Sports/>}/>
          <Route path="/signup" element={<Signup/>}/>
      </Routes>
      </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
