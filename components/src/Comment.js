import React from 'react';

class Comment extends React.Component {
  render () {
    return (
      <div className='comment'>
        <a href='/' className='avatar'>
          <img alt='avatar' src={ this.props.avatar } />
        </a>
        <div className='content'>
          <a href='/' className='author'>{ this.props.author }</a>
          <div className='metadata'>
            <span className='date'>Today at 6:00pm</span>
          </div>
          <div className='text'>Hello, text comment here</div>
        </div>
      </div>
    )
  }
}

export default Comment;