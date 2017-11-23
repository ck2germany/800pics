import React from 'react';

class SessionForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput (type) {
    return (e) => {
      this.setState({ [type]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state)
    .then(() => this.props.history.push('/'));
  }

  changeFormLink () {
    if (this.props.formType === 'login') {
      return <Link to='/signup'>Sign Up Instead</Link>;
    } else {
      return <Link to='/login'>Log In Instead</Link>;
    }
  }

  renderErrors () {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }


  render () {
    return (
      <div className="session-form-container">
        <h3>Welcome to Landscapes</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Username:
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleInput('username')}
              />
          </label>
          <label>Password:
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')}
              />
          </label>
          <input type="submit" value={this.props.formType} />
        </form>
      </div>
    );
  }
}

export default SessionForm;
