import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => (
  <div className="wrapper ui middle align center">
    <div className=" ui raised very padded center aligned text container segment container-main">
      <div className="column">
        <h1 className="ui header">Sign Up</h1>
        <br />
        <div className="field">
          <div className="ui left icon input">
            <i className="user outline icon" />
            <input type="username" name="username" placeholder="Username" />
          </div>

        </div>
        <br />
        <div className="field">
          <div className="ui left icon input">
            <i className="mail outline icon" />
            <input type="email" name="email" placeholder="Email Address" />
          </div>

        </div>
        <br />
        <div className="field">
          <div className="ui left icon input">
            <i className="lock icon" />
            <input type="password" name="password" placeholder="Password" />
          </div>

        </div>
        <br />

        <div className="field">
          <div className="ui left icon input">
            <i className="lock icon" />
            <input type="password" name="password_confirmation" placeholder="Password Confirmation" />
          </div>

        </div>
        <br />

        <div className="actions">
          <button className=" ui large teal button" type="submit">Sign Up</button>
        </div>
        <br />
        <div className="container">
          <div className="ui horizontal divider">
          Or
          </div>
        </div>
        <br />
        <div className="container">
          <button type="button" className="ui circular facebook icon button">
            <i className="facebook icon" />
          </button>
          <button type="button" className="ui circular twitter icon button">
            <i className="twitter icon" />
          </button>
          <button type="button" className="ui circular google plus icon button">
            <i className="google plus icon" />
          </button>
        </div>
        <br />
        <p>
Already have an account?
          {' '}
          <Link to="login">Login</Link>
        </p>
      </div>
    </div>
  </div>

);

export default SignUp;
