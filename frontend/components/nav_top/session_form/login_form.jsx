
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
            
            <div className="input-username">
              <input
                type="text"
                value={this.state.username}
                placeholder='username'
                onChange={this.update('username')} />
            </div>

            <div className="input-password">
              <input
                type="password"
                value={this.state.password}
                placeholder='password'
                onChange={this.update('password')} />
            </div>

            <div className="link-and-button">
              <Link to='/signup' className='link-text char-blue'>
                <span >Create account</span>
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

export default LogInForm;