/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import Landingpage from '../Landingpage';
import Login from '../Login';
import SignUpPage from '../SignUp';

it('renders Landingpage component without crashing', () => {
  shallow(<Landingpage />);
});

it('renders Login component without crashing', () => {
  shallow(<Login />);
});

it('renders SignUp component without crashing', () => {
  shallow(<SignUpPage />);
});
