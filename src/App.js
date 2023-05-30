import './reset.css';
import './App.css';
import './main.js';
import Header from "./components/Header";
import Menu from "./components/Menu";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Product from "./components/Product";

function App() {
  return (
    <div className="App">
      <Header/>
      <Menu/>
      <Main/>
      <Product/>
      <Main/>
      <Product/>
      <Product/>
      <Footer/>
    </div>
  );
}

export default App;
