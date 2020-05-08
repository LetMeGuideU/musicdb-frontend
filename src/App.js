import React from "react";
import Nav from "./components/Nav";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Hero from "./components/Hero";
import Produce from "./components/Produce";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav></Nav>
      <Hero></Hero>
      <Produce></Produce>
      <Footer></Footer>
    </>
  );
}

export default App;
