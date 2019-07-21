import React from 'react'
import { Container, Divider, Grid, Header, Menu, Message, Segment, Table } from 'semantic-ui-react'

const ResultTable = () => (
  <div>
    <Container style={{ padding: '5em 0em' }}>
      <Header as='h2'>Attached Content</Header>
      <Grid columns={1}>
        <Grid.Column>          
          <Menu attached tabular widths={3}>
            <Menu.Item active as='a'>
              Active Item
            </Menu.Item>
            <Menu.Item as='a'>Item</Menu.Item>
            <Menu.Item as='a'>Item</Menu.Item>
          </Menu>
          <Segment attached>Segment</Segment>
        </Grid.Column>
      </Grid>
    </Container>
  </div>
)

export default ResultTable