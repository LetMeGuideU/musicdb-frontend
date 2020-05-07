import React from "react";
import Nav from "./components/Nav";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
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
      <section className="container"></section>
    </>
  );
}

export default App;
