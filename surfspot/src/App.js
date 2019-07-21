import React, {Component} from "react";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import SearchBar from './components/SearchBar';
import ResultTable from "./components/ResultTable";


class App extends Component {
    state = {
        
    }

    render() {
      return ( 
        <div>
          <Nav />
          <Jumbotron>
            <SearchBar />
          </Jumbotron>
          <ResultTable />
        </div>

      )
    }
} 

export default App;
