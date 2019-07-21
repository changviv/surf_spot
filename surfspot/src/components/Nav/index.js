import React, {Component} from 'react'
import { Header, Image } from 'semantic-ui-react'

// css styling ------------------------------------------------
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

// React code ------------------------------------------------

class NavBar extends Component {

  render() {
    return (
      <div>
            <Header as="h2" style={navStyle}>
            {/* {this.renderRedirect()} */}
              <Image
                href="/"
                circular
                src="..Nav/..components/images/wave.png"
                // onClick={this.imgRedirect}
                style={imgStyle}s
              />{" "}
              Surf Spot
              <Header as="h2" style={condStyle}>
                Check Surf Conditions
              </Header>
            </Header>
      </div>
    );
  }
}

export default NavBar;