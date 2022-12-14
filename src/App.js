import "./App.css";
import Footer from "./Components/Pages/Footer";
import Home from "./Components/Pages/Home";
import Navbar from "./Components/Pages/Navbar";
import Login from "./Components/AuthPages/Login";
function App() {
  return (
    <div className="App">
      <Login />
      <Navbar />
      <hr />
      <Home />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
