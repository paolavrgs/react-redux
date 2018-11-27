import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

const App = () => {
  const buttonText = 'Click me!'
  return (
    <div>
      <h1 style={{ color: '#f33466' }}>Paola's new app</h1>
      <label htmlFor='name'>Enter name:</label>
      <input id='name' type='text'/>
      <button>{buttonText}</button>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))

