/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import App from '../Logo';

it('renders Logo component without crashing', () => {
  shallow(<App />);
});
