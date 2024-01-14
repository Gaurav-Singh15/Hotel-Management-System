import react, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className='parentDiv'>
        <div id="Header">
          <h1>Hotel Management System</h1>
        </div>
        <div className='containerAloo'>
          <div id="username" className='label'>
            <div >
              Username
            </div>
            <div>
              <input id='uname' type='text' placeholder='Username' />
            </div>
          </div>
          <div id="Password" className='label'>
            <div >
              Password
            </div>
            <div>
              <input id='pwd' type='password' placeholder='Password' />
            </div>
          </div>
          <div id="submit_reset">
            <button className='btn btn-success m-3'>Login</button>
            <button className='btn btn-primary '>Reset</button>
          </div>
          <div id="signup" className='whiteColor'>
            <p>New to Aloo? <a href='www.google.com' target='_blank'>Sign Up here</a></p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;