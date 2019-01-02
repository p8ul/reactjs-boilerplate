/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import App from '../index';
import FixedMenu from '../FixedMenu';

it('renders Menu component without crashing', () => {
  shallow(<FixedMenu />);
});

it('renders Fixed Menu component without crashing', () => {
  shallow(<App />);
});
