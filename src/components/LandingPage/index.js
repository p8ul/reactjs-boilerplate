import React from 'react';
import { Container, Grid, Image } from 'semantic-ui-react';

const GridRow = () => (
  <Grid.Row>
    <Grid.Column width={3}>
      <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
    </Grid.Column>
    <Grid.Column width={10}>
      <Image src="https://react.semantic-ui.com/images/wireframe/centered-paragraph.png" />
    </Grid.Column>
    <Grid.Column width={3}>
      <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
    </Grid.Column>
  </Grid.Row>
);
const GridExampleCelledInternally = () => (
  <Container>
    <Grid celled="internally">
      <GridRow />
    </Grid>
  </Container>
);

export default GridExampleCelledInternally;
