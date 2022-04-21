import React from "react";
import NavBar from "./components/navbar/NavBar";
import Hero from './components/hero/Hero'
import Destinations from "./components/destinations/Destinations";
import Search from "./components/search/Search";
import Selects from "./components/selects/Selects";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Hero/>
        <Destinations/>
        <Search/>
        <Selects/>
        <Footer/>
    </div>
  );
}

export default App;
