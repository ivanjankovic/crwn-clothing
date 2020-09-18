import React from 'react';
import Directory from '../../components/directory/directory.component'

import { HomePageContaineer }from './homepage.styles'

const HomePage = ({history}) => {
  return (
    <HomePageContaineer>
      <Directory />
    </HomePageContaineer>
  );
};

export default HomePage;