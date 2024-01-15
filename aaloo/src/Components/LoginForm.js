import React from "react";

class LoginForm extends React.Component {
  render() {
    return (
      <>
        <div id="username" className="label">
          <div>Username</div>
          <div>
            <input id="uname" type="text" placeholder="Username" />
          </div>
        </div>
        <div id="Password" className="label">
          <div>Password</div>
          <div>
            <input id="pwd" type="password" placeholder="Password" />
          </div>
        </div>
        <div id="submit_reset">
          <button className="btn btn-success m-3">Login</button>
          <button className="btn btn-primary ">Reset</button>
        </div>
        <div id="signup" className="whiteColor">
          <p>
            New to Aloo?{" "}
            <a href="" onClick={this.props.onClick}>
              Sign Up here
            </a>
          </p>
        </div>
      </>
    );
  }
}

export default LoginForm;
