import React from "react";
import axios from "axios";
// Styles
import { Container } from "@material-ui/core";

// Components
import Header from "./Header";
import UserCard from "./UserCard";
import FollowerCard from "./FollowerCard";

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
      <Container className="app-wrapper">
        <Header />
        <div className="card-container">
          <UserCard userData={this.state.userData} />
          <FollowerCard followerData={this.state.followerData} />
        </div>
      </Container>
    );
  }
}

export default App;
