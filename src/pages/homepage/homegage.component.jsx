import React from 'react';

import './homepage.styles.scss'
import Directory from '../../componenets/directory/directory.component'

import './homepage.styles.scss'

const HomePage = () => {
  return (
    <div className='homepage'>
      <h1>Welcome to my Homepage</h1>
      <Directory />
    </div>
  );
};

export default HomePage;