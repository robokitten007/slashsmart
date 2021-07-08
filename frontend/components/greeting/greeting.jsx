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
          <div className='logout'>
            <h3>{this.props.currentUser.name}</h3>
            <Link className='logout-lnk' onClick={this.handleClick}>Log Out</Link>
          </div>
          :
          <div className='greeting-links'>
            <Link className='login-lnk' to='/login'>Log in</Link>
            <Link className='signup-lnk' to='/signup'>Sign up</Link>
          

            {/* <Link className='login-lnk' onClick={()=>this.props.history.push('/login')}>Log in</Link> */}
            <br />
            {/* <Link className='signup-lnk'onClick={()=>this.props.history.push('/signup')}>Sign up</Link> */}
          </div>}
      </div>
    )
  }
}
export default Greeting