import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer/footer'

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: '',
            email: ''
        };
        
        this.showFlag = false;
        this.showSignup = false;
        this.signupForm = false;
        // this.signupError = false;
        // this.loginError = false;
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
        return e => {
            this.showFlag = true;
            this.setState({[field]: e.target.value});
        }
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
        this.props.formType === 'Signup' ? (this.showSignup=true) : (this.showSignup=false) 
        this.props.formType === 'Signup' ? (this.signupForm=true) : (this.signupForm=false)
        this.props.formType === 'Signup' && this.props.errors.length>0 ? (this.signupError=true) : (this.signupError=false)
        this.props.formType === 'Login'  ? (this.loginError=true) : (this.loginError=false)

        const show_flag = this.showFlag ? 'show' : 'not-show'
        const form_type = this.signupForm ? 'signup-form' : 'login-form'
        const show_signup = this.showSignup ? 'show' : 'not-show'
        const show_signuperror = this.signupError ? 'show' : 'not-show'
        const show_loginerror = this.loginError ? 'show' : 'not-show'
        
        return (
         <div className='body-container'>
            <div className="full-form" id={form_type}>
               
                <div>
                                <div className='error' id={form_type} className={show_loginerror}>
                                    {this.renderErrors()}
                                </div>
                </div>
                    <div className='logoed-form' >
                        <div id='signup-icon' className={show_signup}>
                            {/* <a className={show_signup} href="#"><img id='signup-logo' className={show_signup} src={window.logo} alt="SlashSmart" /></a> */}
                         <img id='signup-logo' className={show_signup} src={window.logo} alt="SlashSmart" />

                        </div>

                        <div className={form_type}> 
                            <h4 className="form-title">{this.props.formType === 'Login' ? <p>Log in</p> : <p className='signup-introduction'>INTRODUCE YOURSELF</p>}</h4>
                            <div id={form_type} className={show_signuperror}>
                                <p className='font-bold'>The following error occurs:</p>
                                <div className='error-list'>
                                    {this.renderErrors()}
                                </div>
                            </div>

                            <form onSubmit={this.handleSubmit}>
                            {this.props.formType === 'Signup'?
                            
                                <label>
                                    <p className='signup-welcome'>Hi there! My name is</p> 
                                    <input type="text" value={this.state.name} onChange={this.update('name')}/>
                                </label> : null}
                            
                                <br/>
                                <br/>

                                {this.props.formType === 'Signup' ? <label className='email-label' className={show_flag}><p>Here's my <span className='font-bold'>email address:</span></p>
                                    <input type="text" value={this.state.email} onChange={this.update('email')} />
                                    </label> : 
                                    <label className='email-label'><p>Email adress:</p>
                                        <input type="text" value={this.state.email} onChange={this.update('email')} />
                                    </label>
                                }             
                                
                            {/* <label className='email-label'>{this.props.formType === 'Signup' ? <p className={show_flag}>Here's my email address:</p> : <p>Email address</p>}
                                <input className='emailField' type="text" value={this.state.email} onChange={this.update('email')} />
                            </label> */}
                            {/* <br/>
                            <br/> */}
                                {this.props.formType === 'Signup' ? <label className='password-label' className={show_flag}><p>And here's my <span className='font-bold'>password:</span></p>
                                    <input type='password' value={this.state.password} onChange={this.update('password')} />
                                    </label> : 
                                    <label className='password-label'><p>Password:</p>
                                        <input type="password" value={this.state.password} onChange={this.update('password')} />
                                    </label>
                                }  
                            
                            {/* <label>{this.props.formType === 'Signup' ? <p className={show_flag}>And here's my password:</p> : <p>Password</p>}
                            <input type="password" value={this.state.password} onChange={this.update('password')} />
                            </label> */}
                                <div className="form-btns">
                                    {/* <button className='regular-btn'>{this.props.formType === 'Signup' ? <p>Sign me up!</p> : <p>Log in</p>}</button> */}
                                    {this.props.formType === 'Signup' ? <button className='regular-btn' className='signup-btn'><p>Sign me up!</p></button> : 
                                    <button className='regular-btn'><p>Log in</p></button>}
                                    <br/>
                                    <br/>
                                    {this.props.formType === 'Login' ? <button type='button' className="demo-btn" onClick={this.demoLogin}>Demo login</button> : null}
                                </div>

                            </form>
                        </div>
                    </div>
            </div>
        {this.props.formType ==='Login' ? <Footer /> : null}

        </div>
        )
    }



}


export default SessionForm;