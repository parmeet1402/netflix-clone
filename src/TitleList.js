import React, { Component } from "react";
import TitleListItem from "./TitleListItem";

class TitleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      mounted: false
    };
  }
  componentDidMount() {
    if (this.props.url !== "") {
      this.loadContent();
      this.setState({ mounted: true });
    }
    console.log(this.state.data);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.url !== this.props.url && nextProps.url !== "") {
      this.setState(
        {
          mounted: true,
          url: nextProps.url
        },
        () => this.loadContent()
      );
    }
  }
  loadContent = () => {
    let requestUrl = `https://api.themoviedb.org/3/${this.props.url}&api_key=${
      process.env.REACT_APP_MOVIE_KEY
    }`;
    fetch(requestUrl)
      .then(res => res.json())
      .then(data => this.setState({ data: data }))
      .catch(err => console.log(err));
  };
 
  render() {
    return (
      <div ref="titleCategory" className="TitleList" data-loaded={this.state.mounted}>
        <div className="Title">
          <h1>{this.props.title}</h1>
          <div className="titles-wrapper">
            {this.state.data.results &&
            this.state.data.results.map((movie, index) => index<5 && <TitleListItem adult={movie.adult} imageSrc={`http://image.tmdb.org/t/p/original${movie.backdrop_path}`} title={movie.title} overview={movie.overview} rating={movie.vote_average} key={index} />)}
          </div>
        </div>
      </div>
    );
  }
}
export default TitleList;
