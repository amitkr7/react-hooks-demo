import React, { useState } from 'react';
import Resourcelist from './ResourceList';

const App = () => {
  const [resource, setResource] = useState('posts');

  return (
    <div className='ui container'>
      <div>
        <button
          className='ui primary button'
          onClick={() => setResource('posts')}>
          Posts
        </button>
        <button className='ui red button' onClick={() => setResource('todos')}>
          ToDos
        </button>
      </div>
      <div className='ui message'>
        <div className='header'>
          <Resourcelist resource={resource} />
        </div>
      </div>
    </div>
  );
};

export default App;
