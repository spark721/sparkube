
import React from 'react';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    }

    this.updateField = this.updateField.bind(this);
  }

  updateField(field) {
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
        <form onSubmit={this.handleSubmit}>

          <label htmlFor="username"></label>
          <input 
            id='username'
            type="text"
            value={this.state.username}
            onChange={this.updateField} />

            <label htmlFor="email"></label>
            <input 
              id='email'
              type="text"
              value={this.state.email}
              onChange={this.updateField} />

            <label htmlFor="password"></label>
            <input 
              id='password'
              type="password"
              value={this.state.password}
              onChange={this.updateField} />

            <input 
              type="submit"
              value='Next' />
        </form>
      </div>
    );
  };
};

export default SignUpForm;
