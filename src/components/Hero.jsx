import React, { Component } from "react";
import getAlbums from "./../apiCalls";

export default class Hero extends Component {
  state = {
    albums: [],
  };

  async componentDidMount() {
    let { data: albums } = await getAlbums();
    albums = albums.allAlbums;
    console.log(albums);
    console.log(typeof albums);
    this.setState({
      albums: albums,
    });
  }
  render() {
    const { albums } = this.state;
    return (
      <section className="hero">
        <div className="container">
          <div className="hero-content text-uppercase">
            <h1>
              amp up
              <br />
              those dbs
            </h1>
            <p>make music on the go</p>
            <a href="/">HIT IT</a>
          </div>
          <div className="albums">
            {albums.map((album, key) => {
              const { name } = album;
              console.log(typeof name);

              const Alone = "Shum serdtsa";
              console.log(name, key);
              return (
                <div key={key}>
                  <img
                    src={require(`../assists/${name}.jpg`)}
                    alt={name}
                    className="img-fluid"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}
