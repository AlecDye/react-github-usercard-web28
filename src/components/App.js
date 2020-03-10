import React from "react";
import axios from "axios";

// Components
import Header from "./Header";
import UserCard from "./UserCard";

class App extends React.Component {
  // Initial State
  constructor() {
    console.log("Constructor fired");
    super();
    this.state = {
      userData: [],
      followerData: []
    };
  }
  // Api requests
  componentDidMount() {
    console.log("CDM fired");
    // User's data
    axios
      .get("https://api.github.com/users/alecdye")
      .then(res => {
        // console.log(res.data)
        this.setState({
          userData: res.data
        });
      })
      .catch(err => console.log(err));

    // Followers from User's data
    axios
      .get("https://api.github.com/users/alecdye/followers")
      .then(res => {
        // console.log(res.data)
        this.setState({
          followerData: res.data
        });
      })
      .catch(err => console.log(err));
  }
  // Rendering components and state
  render() {
    console.log("Render fired");
    return (
      <div className="app-wrapper">
        <Header />
        <div>
          <UserCard userData={this.state.userData} />
          <UserCard followerData={this.state.followerData} />
        </div>
      </div>
    );
  }
}

export default App;
