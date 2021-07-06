import React from 'react';
import { Link } from 'react-router-dom';



class Greeting extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.logout().then(() => this.props.history.push('/'));
  }

  render() {
    return (
      <div className='greeting'>
        
      <a href="#">
        <img className='logo' src={window.logo_1} alt="SlashSmart" />
      </a>

        {this.props.currentUser ?
          <div>
            <h3>{this.props.currentUser.name}</h3>
            <button className='logout' onClick={this.handleClick}>Log Out</button>
          </div>
          :
          <div>
            <Link className="login" to="/login">Log in</Link>
            <br />
            <Link className="signup" to="/signup">Sign up</Link>
          </div>}
      </div>
    )
  }
}
export default Greeting