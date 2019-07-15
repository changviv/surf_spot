import React from 'react'
import { Header, Image } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const navStyle = {
    padding: "25px 0 25px 100px"
  };

  const condStyle = {
    display: "inline",
    float: "right",
    marginTop: "0px",
    paddingRight: "100px"
  }

  const imgStyle = {
    left: "50%",
    right: "50%",
    top: "25px",
    position: "absolute",
  } 

const NavBar = () => (
    <div>
        <Router>
            <Header as='h2' style={navStyle}>
                <Route path="/">
                <Image circular src='../../components/images/wave.png' style={imgStyle}/>
                <Link to="/"></Link></Route> Surf Spot
                <Header as="h2" style={condStyle}>Check Surf Conditions</Header>
            </Header>
        </Router>
    </div>
)

export default NavBar;