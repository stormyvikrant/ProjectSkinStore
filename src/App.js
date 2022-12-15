
import './App.css';
import AllRoutes from './Components/AllContext/AllRoutes';
import Footer from './Components/AllContext/Pages/Footer';
// import Home from './Components/Pages/Home';
import Navbar from './Components/Navbar/Navbar';
// <Home />
// <hr />
// <Footer />
function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes/>
 
      <Footer/>
    </div>
  );
}

export default App;
