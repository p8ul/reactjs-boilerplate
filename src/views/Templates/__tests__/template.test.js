/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import TemplateDefault from '../TemplateDefault';
import TemplateWithMenu from '../TemplateWithMenu';
import TemplateWithoutMenu from '../TemplateWithoutMenu';

it('renders Default template component without crashing', () => {
  shallow(
    <TemplateDefault>
      <div className="hello">Hello world</div>
    </TemplateDefault>,
  );
});

it('renders Template with menu component without crashing', () => {
  shallow(
    <TemplateWithMenu>
      <div className="hello">Hello world</div>
    </TemplateWithMenu>,
  );
});

it('renders Template with menu component without crashing', () => {
  shallow(
    <TemplateWithoutMenu>
      <div className="hello">Hello world</div>
    </TemplateWithoutMenu>,
  );
});
