import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

const App = () => {
  return (
    <div>
      <h1 style={{ color: '#f33466' }}>Paola's new app</h1>
      <label>Enter name:</label>
      <input type='text'/>
      <button>Submit</button>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))
