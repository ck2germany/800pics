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

  componentDidMount () {
    this.props.clearErrors();
  }


  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.formAction({user})
    .then(() => this.props.history.push('/'));
  }

  changeFormLink () {
    if (this.props.formType === 'login') {
      return <div>Need an account? <Link className="text-link" to='/signup'>Sign up instead.</Link></div>;
    } else {
      return <div>Already have an account? <Link className="text-link" to='/login'>Log in instead.</Link></div>;
    }
  }

  renderErrors () {
    if (this.props.errors) {
      return (
       <ul>
         {this.props.errors.map((error, i) => (
           <li key={`error-${i}`}>
             {error}
           </li>
         ))}
       </ul>
     );
   } else {
     return (<ul></ul>);
   }
  }


  render () {

    const buttonText = (this.props.formType === 'login') ? "Log In" : "Sign Up";
    return (
      <div className="session-form-container">
        <h3>Welcome to Landscapes</h3>
        <div id="session-errors-div">
          {this.renderErrors()}
        </div>
        <form onSubmit={this.handleSubmit}>
          <label>Username</label>
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleInput('username')}
              />


          <label>Password</label>
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')}
              />


          <input id="submit-button" type="submit" value={buttonText} />

        </form>
        <br />
          <span id="change-form-link">
            {this.changeFormLink()}
          </span>

      </div>
    );
  }
}

export default withRouter(SessionForm);
