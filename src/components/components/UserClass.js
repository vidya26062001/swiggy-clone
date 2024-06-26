import React from "react";
import UserContext from "../utilis/UserContext";

// Creating a class based component
class UserClass extends React.Component {
  render() {
    // console.log(this.props.name)
    return (
      <>
        {/* using UserContext */}
        <UserContext.Consumer>
          {(data) => {
            return (
              // {console.log(data)}
              <h2 className="font-bold text-lg">Name :{data.loggedInUser} </h2>
            );
          }}
        </UserContext.Consumer>

        <h3>Qualification: Expert Frontend Dev</h3>
        <h3>Hobby: Managing Investments</h3>
      </>
    );
  }
}

export default UserClass;