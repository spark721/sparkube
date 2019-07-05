
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
    this.loginDemoUser = this.loginDemoUser.bind(this);
  };

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
    return (
      <ul>
        {this.props.errors.map((error, i) => {
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

  loginDemoUser(e) {
    e.preventDefault();
    this.state = {
      username: 'Altoids',
      password: 'peppermint',
    };

    const demoUser = Object.assign({}, this.state);
    this.props.processForm(demoUser).then(
      () => this.props.history.push('/')
    );
  }

  render() {

    // single form version
    return (
      <div className="signin-page-entire">
        <div className="signin-page">

          <div className="logo-signin-div">
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

            {this.renderError()}

            <div className="link-and-button">
              <Link to='/signup' className='link-text char-blue'>
                <span >Create account</span>
                </Link>
              <input 
                type="submit"
                value='Next'
                className="next-button" />
            </div>

            <div className="demo-button-div">
              <input 
                type="submit"
                value="Demo"
                className="demo-button"
                onClick={this.loginDemoUser} />
            </div>

          </form>
        </div>
      </div>
    );
  };
};

export default LogInForm;