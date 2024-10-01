import React from 'react';
import LogoImage from './img/slider/logo.png';
import { motion } from 'framer-motion';
import {
  Container,

  AreaImgBackground,
  Header,
  LogoImg,

  HeroSection,

  ServicesSection,
  ServiceCard
} from './stylesGlobal';

const App = () => {
  return (
    <Container>

      <AreaImgBackground>
        <Header>
          <LogoImg src={LogoImage} />

        </Header>
      </AreaImgBackground>

     

     

    </Container>
  );
}

export default App;