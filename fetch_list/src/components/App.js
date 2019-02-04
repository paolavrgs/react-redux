import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar'

class App extends React.Component {
  onSearchSubmit(term) {
    axios.get('https://api.unsplash.com//search/photos/', {
      params: {
        query: term
      },
      headers: {
        Authorization: 'Client-ID 682fdf00d2866c94bb93c32fd201c6ac3598cfca565b15ac6ec5c2cad0d429e5'
      }
    })
    .then(response => {
      console.log(response.data.results)
    })
    .catch(error => {
      console.log(error)
    })
  }

  render () {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;