import "./App.css";
import Shop from "./Components/Pages/ProductsPage/Store";
import Footer from "./Components/Pages/Footer";
import Home from "./Components/Pages/Home";
import Navbar from "./Components/Pages/Navbar";
function App() {
  return (
    <div>
      <Navbar />
      <hr />
      <Shop />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
