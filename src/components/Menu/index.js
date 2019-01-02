import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class MenuExampleBasic extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;

    return (
      <Menu secondary inverted pointing className="large align-items-right">
        <Menu.Item className="toc">
          <i className="sidebar icon" />
        </Menu.Item>
        <Menu.Item
          name="editorials"
          active={activeItem === 'editorials'}
          onClick={this.handleItemClick}
        >
        Politics
        </Menu.Item>

        <Menu.Item name="reviews" active={activeItem === 'reviews'} onClick={this.handleItemClick}>
          Reviews
        </Menu.Item>

        <Menu.Item className="login-signup">
          <Link to="/login">
            <span className="ui inverted button">
          Login
            </span>
          </Link>
          <Link to="/signup">
            <span className="ui inverted button">
          Sign Up
            </span>
          </Link>
        </Menu.Item>
      </Menu>
    );
  }
}
