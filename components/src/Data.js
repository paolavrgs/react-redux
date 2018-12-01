import React from 'react';

class Data extends React.Component {
  constructor() {
    super();
    this.state = {
      names: []
    }
  }

  componentWillMount() {
    fetch('https://bigwave-api.herokuapp.com/v1/users')
    .then(results => {
      return results.json();
    }).then(data => {
      // debugger
      let names = data.data.map((name) => {
        return (
          <div key={name.results}>
            <span>{ name.attributes.name }</span>
          </div>
        )
      })

      this.setState({names: names})
      console.log('name', this.state.names)
    })
  }

  render() {
    return (
      <div>
        {this.state.names}
      </div>
    )
  }
}

export default Data;