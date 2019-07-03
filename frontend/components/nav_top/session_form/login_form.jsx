
import React from 'react';

class LogInForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  };

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  render() {
    return (
      <div>
        <form action="">

          <label>Username
            <input 
              type="text"
              value={this.state.username} />
          </label>

        </form>
      </div>
    );
  };
};

export default LogInForm;