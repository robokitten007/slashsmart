import React from 'react';
import { Link } from 'react-router-dom';


class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: '',
            email: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.demoLogin = this.demoLogin.bind(this)
    }

    componentDidMount() {
        this.props.clearSessionErrors();
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(() => this.props.history.push('/dashboard'))
    }

     update(field) {
        return e => this.setState({[field]: e.target.value});
    }

      renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, idx) => {
                    return (<li key={idx}>
                        {error}
                    </li>)
                })}
            </ul>
        )
    }

    demoLogin(e) {
        e.preventDefault();
        this.setState({name: 'demoUser', email: 'demoUser@email.com', password: '123456'})
        const demo = { name: 'demoUser', email: 'demoUser@email.com', password: '123456' }
        this.props.processForm(demo).then(() => this.props.history.push('/dashboard'));
    }


      render() {
        return (
         <div className='body-container'>
            <div className="full-form">
                <div className='errors'>
                {this.renderErrors()}
                </div>
                <div className="form">
                <h4 className="form-title">{this.props.formType === 'Login' ? <p className="formTitle">Log in</p> : <p className="formTitle">INTRODUCE YOURSELF</p>}</h4>
            
                    {this.props.formType === 'Signup'?
                        (<a href="#">
                        <img className='formLogo' src={window.logo} alt="SlashSmart" />
                    </a>) : null}
                    <form className="sessionForm" onSubmit={this.handleSubmit}>
                         {this.props.formType === 'Signup'?

                        <label className='nameLabel'>
                            <p>Hi there! My name is</p> 
                            <input className='nameField' type="text" value={this.state.name} onChange={this.update('name')}/>
                        </label> : null}
                         

                        <br/>
                        <br/>
                        
                        <label className='email-label'>{this.props.formType === 'Signup' ? <p>Here's my email address:</p> : <p>Email address</p>}
                             <input className='emailField' type="text" value={this.state.email} onChange={this.update('email')} />
                        </label>
                        <br/>
                        <br/>
                        
                        <label className='passwordLabel'>{this.props.formType === 'Signup' ? <p>And here's my password:</p> : <p>Password</p>}
                          <input className='passwordField' type="password" value={this.state.password} onChange={this.update('password')} />
                        </label>
                    
                        <br/>
                        <br/>

                        <div className="form-btns">
                            <button className='regular-btn'>{this.props.formType === 'Signup' ? <p>Sign me up!</p> : <p>Log in</p>}</button>
                            <br/>
                            <br/>
                            {this.props.formType === 'Login' ? <button type='button' className="demo-btn" onClick={this.demoLogin}>Demo login</button> : null}
                        </div>
                    
                    </form>
                </div>
            </div>
        </div>
        )
    }



}


export default SessionForm;