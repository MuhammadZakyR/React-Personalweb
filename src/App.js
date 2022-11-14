import React from "react"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarr from "./components/Navbar";
import Banner  from "./components/Banner";
import About from "./components/About";
import {Portfolio} from "./components/Portfolio";
import { Footer } from "./components/Footer";
import Blog from "./components/Blog";


function App() {
  return (
    <div className='App'>
      <Navbarr/>
      <Banner/>
      <About/>
      <Portfolio/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
