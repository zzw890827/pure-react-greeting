import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Greeting() {
  let username;
  return (
    <span>
      {(username === undefined || username === 'null') ?
        'Not logged in.' : 'Hello ' + username}
    </span>
  )
}

ReactDOM.render(<Greeting/>, document.getElementById('root'));
