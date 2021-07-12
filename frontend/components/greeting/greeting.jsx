import React from 'react';
import { Link } from 'react-router-dom';



class Greeting extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.loggedinFlag = false;
    
  }

  handleClick() {
    this.props.logout().then(() => this.props.history.push('/'));
  }

  render() {
    this.props.currentUser ? this.loggedinFlag = true : this.loggedinFlag=false
    const header_type = this.loggedinFlag ? 'login-header' : 'splash-header' 

    return (
    
    <div className='greeting-header' id={header_type}>

      <div className='greeting' id={header_type}>
        
      <a href="#">
        <img className='logo' src={window.logo_1} alt="SlashSmart" />
      </a>

        {this.props.currentUser ?
          <div className='logout'>
            <h3>
             <span className="fas fa-user-circle"> Hello {this.props.currentUser.name}</span> 
              </h3>
            <Link className='logout-lnk' onClick={this.handleClick}>
              <span className='logout-font'>Log Out</span>
            </Link>
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
    </div>
    )
  }
}
export default Greeting