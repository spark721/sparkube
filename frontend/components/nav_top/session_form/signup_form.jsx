
import React from 'react';
import { Link } from 'react-router-dom';


class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    }

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value,
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state).then(
        () => this.props.history.push('/')
    );
  }

  renderError() {
    return(
      <ul className="auth-errors">
        {this.props.errors.map( (error, i) => {
          return (
            <li 
              key={`error-${i}`}
              className="render-error" >
              <i className="fas fa-exclamation-circle"></i>
              {error}
            </li>
          );
        })}
      </ul>
    );
  };

  render() {
    return (
      <div className="signup-page-entire">
        <div className="signup-page">

          <div className="logo-signup-div">
            <span className="char-blue">S</span>
            <span className="char-red">p</span>
            <span className="char-yellow">a</span>
            <span className="char-blue">r</span>
            <span className="char-green">K</span>
            <span className="char-yellow">u</span>
            <span className="char-blue">b</span>
            <span className="char-red">e</span>
          </div>
        
          <h2 className="signup-signup-h2">
            <span>Create your SparKube Account</span>
          </h2>

          <h3 className="continue-signup-div">
            <span>to continue to SparKube</span>
          </h3>

          <form 
            onSubmit={this.handleSubmit}
            className="signup-form" >


            <div className="input-username">
              <input 
                id='username'
                type="text"
                value={this.state.username}
                placeholder='Username'
                onChange={this.update('username')} />
            </div>

            <div className="input-email">
              <input 
                id='email'
                type="text"
                value={this.state.email}
                placeholder='Your email address'
                onChange={this.update('email')} />
            </div>
            
            <div className="input-password">
              <input 
                id='password'
                type="password"
                value={this.state.password}
                placeholder='Password'
                onChange={this.update('password')} />
            </div>
            
            {this.renderError()}
            

            <div className="link-and-button">
              <Link to='/login' className='link-text char-blue'>
                <span>Sign in instead</span>
              </Link>

              <input 
                type="submit"
                value='Next'
                className="next-button" />
            </div>

          </form>
        </div>
      </div>
    );
  };
};

export default SignUpForm;
