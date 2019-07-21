import React, {Component} from "react";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import SearchBar from './components/SearchBar';


class App extends Component {
    state = {
        
    }

    render() {
      return ( 
        <div>
          <Nav />
          <SearchBar />
          <Jumbotron />
        </div>

      )
    }
} 

export default App;
