import React from 'react'
import { Header, Image } from 'semantic-ui-react'

const navStyle = {
    paddingTop: "25px",
    paddingLeft: "100px",
    marginBottom: "65px"
  };

  const condStyle = {
    display: "inline",
    float: "right",
    marginTop: "0px",
    paddingRight: "100px"
  }

  const imgStyle = {
    display: "inline-block",
    margin: "0 auto"
  }
  

const NavBar = () => (
    <div>
        <Header as='h2' style={navStyle}>
            <Image circular src='../components/images/wave.png' style={imgStyle} /> Surf Spot
            <Header as="h2" style={condStyle}>Check Surf Conditions</Header>
        </Header>
    </div>
)

export default NavBar;