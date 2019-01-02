import React from 'react';
import PropTypes from 'prop-types';
import { Container, Visibility } from 'semantic-ui-react';
import Menu from '../../components/Menu';
import FixedMenu from '../../components/Menu/FixedMenu';
import Logo from '../../components/Menu/Logo';
import SidebarMenu from '../../components/Menu/SidebarMenu';
import Footer from '../../components/Footer';
import Intro from '../../components/Intro';

const onOnScreen = () => {
  const banner = document.querySelectorAll('.top.fixed');
  banner[0].classList.add('hidden');
};

const offScreen = () => {
  const banner = document.querySelectorAll('.top.fixed');
  banner[0].classList.remove('hidden');
};
const TemplateDefault = ({ children }) => (
  <React.Fragment>
    <FixedMenu />
    <SidebarMenu />
    <div className="pusher">
      <Logo />
      <Visibility
        continuous
        onOnScreen={onOnScreen}
        onOffScreen={offScreen}
      >
        <div className="ui inverted vertical banner center aligned segment" id="banner">
          <Container>
            <Menu />
          </Container>
          <Intro />
        </div>
      </Visibility>
      {children}
      <Footer />
    </div>
  </React.Fragment>
);

TemplateDefault.propTypes = { children: PropTypes.element.isRequired };

export default TemplateDefault;
