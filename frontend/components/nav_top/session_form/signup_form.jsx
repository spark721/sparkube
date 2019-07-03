
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

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value,
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  render() {
    return (
      <div>
        <h1>Create your SparKube Account</h1>
        <p>to continue to SparKube</p>

        <form onSubmit={this.handleSubmit}>

          <label htmlFor="username">Username</label>
          <br />
          <input 
            id='username'
            type="text"
            value={this.state.username}
            onChange={this.update('username')} />
          <br /><br />

          <label htmlFor="email">Your email address</label>
          <br />
          <input 
            id='email'
            type="text"
            value={this.state.email}
            onChange={this.update('email')} />
          <br /><br />

          <label htmlFor="password">Password</label>
          <br />
          <input 
            id='password'
            type="password"
            value={this.state.password}
            onChange={this.update('password')} />
          <br /><br />

          <Link to='/login'>Sign in instead</Link>

          <input 
            type="submit"
            value='Next' />
        </form>
      </div>
    );
  };
};

export default SignUpForm;
