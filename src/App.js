import React from "react";
import Nav from "./components/Nav";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Table from "./components/Table";
function App() {
  return (
    <>
      <Nav></Nav>
      <section className="container">
        <Table></Table>
      </section>
    </>
  );
}

export default App;
