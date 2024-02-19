import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("constructuor parent");
  }
  componentDidMount() {
    //console.log("parent component ");
  }
  s;
  render() {
    //console.log("parent render");
    return (
      <div>
        <h1>About</h1>
        <h2>THIS IS REACT</h2>
        <UserClass name={"Lakshmi Sushma function2"} location={"benglaru"} />
      </div>
    );
  }
}

export default About;
