import React from 'react';
import './index.scss';

const Loader = props => {
  return (
    <div className='box'>
      <i class="big spinner loading icon"></i>
      <h2>{props.message}</h2>
    </div>
  );
}

Loader.defaultProps = {
  message: 'Loading...'
}

export default Loader;