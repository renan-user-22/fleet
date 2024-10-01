import React from 'react';
import LogoImage from './img/slider/logo.png';
import { motion } from 'framer-motion';
import {
  Container,
  AreaImgBackground,
  Header,
  LogoImg,
  HeroSection,
} from './stylesGlobal';

const App = () => {
  return (
    <Container>

      <AreaImgBackground>
        <Header>
          <LogoImg src={LogoImage} />

        </Header>
      </AreaImgBackground>

      <HeroSection>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h1>Gestão de Frotas e Soluções para Motoristas</h1>
          <p>Defesa de Multas, Suspensão de CNH, e mais!</p>
          <button>Solicitar Consulta</button>
        </motion.div>
      </HeroSection>

    </Container>
  );
}

export default App;