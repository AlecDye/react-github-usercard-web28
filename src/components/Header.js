import React from "react";

import { goofyGenerator } from "../misc";

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>{goofyGenerator()}</h1>
      </header>
    );
  }
}

export default Header;
