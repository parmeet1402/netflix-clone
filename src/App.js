import React, { Component } from "react";
import "./App.css";
import TitleList from "./TitleList";
import Navigation from './Navigation';
import UserProfile from './UserProfile';
import Logo from './Logo'
import Hero from './Hero'
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      searchUrl: ""
    };
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleKeyUp = e => {
    if (e.key === "Enter" && this.state.searchQuery !== "") {
      let searchUrl = `search/multi?query=${this.state.searchQuery}`;
      this.setState({
        searchUrl
      });
    }
  };
  render() {
    return (
      <div>
        <header className="Header">
          <Logo />
          <Navigation />
          <div id="search" className="Search">
        <input
          name="searchQuery"
          value={this.state.searchQuery}
          onKeyUp={this.handleKeyUp}
          placeholder="Search for movies"
          size="40"
          onChange={this.onChange}
          type="text"
        />
          </div>
          <UserProfile />
        </header>
        <Hero/>
        {/*    <TitleList title="Search Results" url={this.state.searchUrl} />
        <TitleList
          title="Top TV picks for Jack"
          url="discover/tv?sort_by=popularity.desc&page=1"
        /> */}
        <TitleList
          title="Trending now"
          url="discover/movie?sort_by=popularity.desc&page=1"
        />
        <TitleList
          title="Most watched in Horror"
          url="genre/27/movies?sort_by=popularity.desc&page=1"
        />
        <TitleList
          title="Sci-Fi greats"
          url="genre/878/movies?sort_by=popularity.desc&page=1"
        />
        <TitleList
          title="Comedy magic"
          url="genre/35/movies?sort_by=popularity.desc&page=1"
        />
      </div>
    );
  }
}
