/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import App from '../SidebarMenu';

it('renders Sidebar component without crashing', () => {
  shallow(<App />);
});
