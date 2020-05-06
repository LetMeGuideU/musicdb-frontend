import React, { Component } from "react";
import Axios from "axios";

export default class Table extends Component {
  state = {
    songs: [],
    artists: [],
    albums: [],
    tableFields: [],
  };
  async componentDidMount() {
    const { data: songs } = await Axios.get("http://127.0.0.1:8000/songs");
    const { data: artists } = await Axios.get("http://127.0.0.1:8000/artists/");
    const { data: albums } = await Axios.get("http://127.0.0.1:8000/albums");

    const tableFields = [];

    for (const key in songs[0]) {
      console.log(key);

      if (key !== "id") tableFields.push(key);
    }
    console.log(tableFields);

    this.setState({
      songs,
      artists,
      albums,
      tableFields,
    });
  }

  render() {
    const { tableFields, songs } = this.state;
    return (
      <table className="mr-auto ml-auto table mt-5">
        <thead>
          <tr>
            {tableFields.map((field, index) => (
              <th key={index}>{field}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {songs.map((song, index) => {
            return (
              <tr key={index}>
                <th>{song.name}</th>
                <th>{song.album}</th>
                <th>{song.artist}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
