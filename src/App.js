import React, { Component } from 'react'
import "./App.css"
export default class App extends Component {
  constructor(props){
  super(props);
    this.state = {
      searchQuery: "",
      searchUrl: ""
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onKeyUp = e => {
    if(e.key === "Enter" && this.state.searchQuery !== ""){
      let searchUrl = `search/multi?query=${this.state.searchQuery}&api_key=${this.apiKey}`;
      this.setState({
        searchUrl
      })
    }
  }
  render() {
    return (
      <div>
        <input name="searchQuery" value={this.state.searchQuery} onKeyUp={this.onKeyUp} placeholder="Search for movies" size="40" onChange={this.onChange} type="text"/>
        {/* TITLE LIST COMPONENT */}
        {/* LIST TOGGLE COMPONENT */}
      </div>
    )
  }
}
