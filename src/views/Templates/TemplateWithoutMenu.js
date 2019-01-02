import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid } from 'semantic-ui-react';

const TemplateWithoutMenu = ({ children }) => (
  <Container>
    <Grid.Row>
      <Grid.Column>
        {children}
      </Grid.Column>
    </Grid.Row>
  </Container>
);

TemplateWithoutMenu.propTypes = { children: PropTypes.element.isRequired };

export default TemplateWithoutMenu;
