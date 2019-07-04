
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
      <div>

        <h1>Sign in</h1>
        <p>to continue to SparKube</p>

        <form onSubmit={this.handleSubmit}>
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
    );
  };
};

export default LogInForm;