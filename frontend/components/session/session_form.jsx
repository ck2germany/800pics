import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeFormLink = this.changeFormLink.bind(this);
  }

  handleInput (type) {
    return (e) => {
      this.setState({ [type]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.formAction({user})
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
    const buttonText = (this.props.formType === 'login') ? "Log In" : "Sign Up";
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
          <br/>
          <label>Password:
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')}
              />
          </label>
          <br/>
          <input type="submit" value={buttonText} />
        </form>
        <br />
        <div id="change-form-text">
          {this.changeFormLink()}
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
