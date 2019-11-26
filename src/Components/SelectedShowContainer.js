import React, { Component } from "react";
import Episode from "./Episode";

export default class SelectedShowContainer extends Component {
  state = {
    selectedSeason: 1
  };

  mapSeasons = () => {
    if (!!this.props.allEpisodes) {
      let seasons = this.props.allEpisodes.map(e => e.season).unique();
      return seasons.map(s => {
        return (
          <option value={s} key={s}>
            Season {s}
          </option>
        );
      });
    }
  };

  mapEpisodes = () => {
    let episodesToShow = this.props.allEpisodes.filter(
      e => e.season === this.state.selectedSeason
    );
    return episodesToShow.map(e => <Episode eachEpisode={e} key={e.id} />);
  };

  handleSelectionChange = e => {
    this.setState({ selectedSeason: parseInt(e.target.value) });
  };

  render() {
    const { selectedShow } = this.props;
    return (
      <div style={{ position: "static" }}>
        <h2>{selectedShow.name}</h2>
        <img src={selectedShow.image.medium} alt="" />
        <p dangerouslySetInnerHTML={{ __html: selectedShow.summary }}></p>
        <p>Premiered: {selectedShow.premiered}</p>
        <p>Status: {selectedShow.status}</p>
        <p>Average Rating: {selectedShow.rating.average}</p>
        <select
          style={{ display: "block" }}
          value={this.state.selectedSeason}
          onChange={this.handleSelectionChange}
        >
          {this.mapSeasons()}
        </select>
        {this.mapEpisodes()}
      </div>
    );
  }
}
// eslint-disable-next-line no-extend-native
Array.prototype.unique = function() {
  var arr = [];
  for (var i = 0; i < this.length; i++) {
    if (!arr.includes(this[i])) {
      arr.push(this[i]);
    }
  }
  return arr;
};
