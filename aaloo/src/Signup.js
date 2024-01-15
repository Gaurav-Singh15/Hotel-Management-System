import React from "react";

class Signup extends React.Component {
  render() {
    return (
      <>
        <div id="firstname" className="label">
          <div>First Name :</div>
          <div>
            <input id="fname" type="text" placeholder="First Name" />
          </div>
        </div>
        <div id="lastname" className="label">
          <div>Last Name :</div>
          <div>
            <input id="lname" type="text" placeholder="Last Name" />
          </div>
        </div>
        <div id="Password" className="label">
          <div>Password :</div>
          <div>
            <input id="pwd" type="password" placeholder="Password" />
          </div>
        </div>
        <div id="ConfPass" className="label">
          <div>Confirm Password :</div>
          <div>
            <input id="confpwd" type="password" placeholder="Password" />
          </div>
        </div>
      </>
    );
  }
}

export default Signup;
