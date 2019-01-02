/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import App from '../index';

it('renders Footer component without crashing', () => {
  shallow(<App />);
});
