import React from 'react';

import Directory from '../../components/directory/directory.component';

import { HomePageContainer, Title } from './homepage.styles';

const HomePage = () => (
  <HomePageContainer>
    <Title>Store Collection</Title>
    <Directory />
  </HomePageContainer>
);

export default HomePage;
