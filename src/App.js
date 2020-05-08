import React from "react";
import Nav from "./components/Nav";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Hero from "./components/Hero";
import Produce from "./components/Produce";

function App() {
  return (
    <>
      <Nav></Nav>
      <Hero></Hero>
      <Produce></Produce>
    </>
  );
}

export default App;
