import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Vidoes from "./components/Vidoes";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="flex">
        <Navbar />
        <Vidoes />
      </main>
    </div>
  );
}

export default App;
