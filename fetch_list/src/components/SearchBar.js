import React from 'react';

export default class SearchBar extends React.Component {
  state = { term : '' }

  onFormSubmit = ev => {
    ev.preventDefault()
    this.props.onSubmit(this.state.term)
  }
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input type="text" value={this.state.term} onChange={ev => this.setState({term: ev.target.value}) }/>
          </div>
        </form>
        <h1>{this.state.term}</h1>
      </div>
    );
  }
}