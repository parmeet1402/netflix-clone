import React, { Component } from "react";

class ListToggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggled: false
    };
  }
  handleClick = () => {
    this.setState({ toggled: !this.state.toggled });
  };
  render() {
    return (
      <div
        onClick={this.handleClick}
        data-toggle={this.state.toggled}
        className="ListToggle"
      >
        <div>
          <i className="fa fa-fw fa-plus"></i>
          <i className="fa fa-fw fa-check"></i>
        </div>
        </div>
    );
  }
}

export default ListToggle;
