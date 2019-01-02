import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid } from 'semantic-ui-react';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

const TemplateWithoutMenu = ({ children }) => (
  <Container>
    <Grid.Row>
      <Grid.Column>
        <Menu />
        {children}
        <Footer />
      </Grid.Column>
    </Grid.Row>
  </Container>
);

TemplateWithoutMenu.propTypes = { children: PropTypes.element.isRequired };

export default TemplateWithoutMenu;
