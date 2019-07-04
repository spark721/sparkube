
import React from 'react';
import { Link } from 'react-router-dom';


class LogInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

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
    return (
      <ul>
        {this.props.errors.map((error, i) => {
          return <li key={`error-${i}`}>{error}</li>
        })}
      </ul>
    );
  };

  render() {

    // single form version
    return (
      <div className="signin-page-entire">
        <div className="signin-page">

          <div className="logo-text-div rainbow">
            <span className="char-blue">S</span>
            <span className="char-red">p</span>
            <span className="char-yellow">a</span>
            <span className="char-blue">r</span>
            <span className="char-green">K</span>
            <span className="char-yellow">u</span>
            <span className="char-blue">b</span>
            <span className="char-red">e</span>
          </div>

          <h1 className="signin-text-h1">
            <span>Sign in</span>
          </h1>

          <h2 className="continue-text-div">
            <span>to continue to SparKube</span>
          </h2>

          <form
            onSubmit={this.handleSubmit}
            className="signin-form" >

            {this.renderError()}
            
            <label htmlFor="username">Username</label>
            <br />
            <input 
              id='username'
              type="text"
              value={this.state.username}
              onChange={this.update('username')} />
            <br /><br />

            <label htmlFor="password">Password</label>
            <br />
            <input 
              id='password'
              type="password"
              value={this.state.password}
              onChange={this.update('password')} />
            <br /><br />

            <Link to='/signup'>Create account</Link>

            <input 
              type="submit"
              value='Next' />
          </form>
        </div>
      </div>
    );
  };
};

export default LogInForm;