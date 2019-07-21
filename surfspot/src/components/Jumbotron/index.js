import React from 'react'
import { Container, Divider } from 'semantic-ui-react'

const jumboStyle = {
  boxSizing: "border-box",
  width: "100%",
  border: "solid #5B6DCD 10px",
  padding: "5px"
}

const ContainerExampleAlignment = (props) => (
  <div>
    <Container style={jumboStyle} textAlign='justified'>
      {/* <b>Justified</b> */}
      {props.children}
      <Divider />
      <p>
        Hello, this is Surf Spot. Find your ideal shredding conditions below! Type in a Location.
      </p>
    </Container>
  </div>
)

export default ContainerExampleAlignment