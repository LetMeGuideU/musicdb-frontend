import React from "react";
import Nav from "./components/Nav";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Table from "./components/Table";
import { Query } from "react-apollo";
import gql from "graphql-tag";
function App() {
  const albums = gql`
    {
      allAlbums {
        name
      }
    }
  `;
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
