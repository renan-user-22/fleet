import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

// Cabeçalho com logomarca
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px 50px;
  background-color: #f8f8f8;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

// Seção principal (Hero Section)
const HeroSection = styled.section`
  background-image: url('/path/to/your/image.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
`;

const HeroContent = styled.div`
  max-width: 800px;
  h1 {
    font-size: 3rem;
    margin-bottom: 20px;
  }
  p {
    font-size: 1.5rem;
    margin-bottom: 40px;
  }
  button {
    padding: 10px 20px;
    font-size: 1.2rem;
    background-color: #ff4500;
    border: none;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;
    
    &:hover {
      background-color: #ff5700;
    }
  }
`;

// Cards de serviços
const ServicesSection = styled.section`
  display: flex;
  justify-content: space-around;
  padding: 50px;
  background-color: #f0f0f0;
`;

const ServiceCard = styled.div`
  background-color: white;
  padding: 30px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s;
  
  &:hover {
    transform: scale(1.05);
  }
  h3 {
    margin-bottom: 10px;
    font-size: 1.2rem;
  }
  p {
    color: #666;
  }
`;

const App = () => {
  return (
    <>
      {/* Cabeçalho com logotipo */}
      <Header>
        <img src="/path/to/logo.png" alt="Logo" />
        <nav>
          <a href="#services">Serviços</a>
          <a href="#about">Sobre</a>
          <a href="#contact">Contato</a>
        </nav>
      </Header>

      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            Gestão de Frotas Inteligente
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            Aumente a produtividade da sua frota e economize até 40%.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            Solicitar contato
          </motion.button>
        </HeroContent>
      </HeroSection>

      {/* Seção de Serviços */}
      <ServicesSection id="services">
        <ServiceCard>
          <h3>Defesa de Multas</h3>
          <p>Oferecemos suporte completo para defesa de multas.</p>
        </ServiceCard>
        <ServiceCard>
          <h3>Gestão de Frotas</h3>
          <p>Gerencie sua frota com mais eficiência e menos preocupações.</p>
        </ServiceCard>
        <ServiceCard>
          <h3>Suspensão de CNH</h3>
          <p>Saiba como evitamos a suspensão da sua CNH.</p>
        </ServiceCard>
      </ServicesSection>
    </>
  );
};

export default App;
