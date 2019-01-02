import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Login = () => (
  <div className="ui raised very padded center aligned text container segment container-main">
    <h1 className="ui header">Log in</h1>
    <form className="ui form" action="#" method="post">
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
      <a href="#hash">Forgot password?</a>
      <br />
      <br />
      <button type="button" className="ui large teal button">Login</button>
      <br />
      <br />
      <div className="container">
        <div className="ui horizontal divider">
        Or

        </div>
      </div>
      <br />
      <button type="button" className="ui circular facebook icon button">
        <i className="facebook icon" />
      </button>
      <button type="button" className="ui circular twitter icon button">
        <i className="twitter icon" />
      </button>
      <button type="button" className="ui circular google plus icon button">
        <i className="google plus icon" />
      </button>
      <br />
      <p>
        Don&apos;t have an account?
        {' '}
        <Link to="signup">Sign Up</Link>
      </p>
    </form>
  </div>
);

export default Login;
