import React, { Component } from 'react';
import { Segment, Form } from 'semantic-ui-react';

class SearchBar extends Component {
  state = { term: '' };

  // this goes first so we set the term
  onInputChange = e => {
    this.setState({ term: e.target.value })
  }

  // when the user submits the form - whatever the term is that is what full term is
  // this gets sent up to the parent?
  // this is a callback from the parent component
  onFormSubmit = e => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
  }
  
  render() {
    return(
      <Segment>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Field>
            <label>Video Search</label>
            <input 
              type='text'
              placeholder='Search for a video'
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </Form.Field>
        </Form>
      </Segment>
      )
  }
}

export default SearchBar;