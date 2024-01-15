import react, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Signup from './Signup';
import LoginForm from './Components/LoginForm';




class App extends Component {

  handleOnClick = (event) => {
    event.preventDefault()
    console.log("called");
    this.setState({path : '/Signup'})
  }

  constructor(){
    super()
    this.state = {
      path : ''  
    };
  }
  
  render() {
    return (
        <div className='parentDiv'>
          <div id="Header">
            <h1>Hotel Management System</h1>
          </div>
          <div className='containerAloo'>
            {this.state.path === '/Signup'?<Signup/> : <LoginForm onClick={this.handleOnClick}/> }
          </div>
        </div>
    )
  }
}


export default App;