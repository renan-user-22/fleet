import React from 'react';
import { Container, Header, HeroSection, ServicesSection, ServiceCard, Footer } from './stylesGlobal';
import { motion } from 'framer-motion'; // Biblioteca para animações

const App = () => {
  return (
    <Container>
      {/* Slider de fundo cobrindo toda a largura*/}


      {/* Header */}
      <Header>
        <h1>Fleet Solutions</h1>
        <nav>
          <a href="#services">Serviços</a>
          <a href="#about">Sobre Nós</a>
          <a href="#contact">Contato</a>
        </nav>
      </Header>

      {/* Hero Section com animação */}
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

      {/* Termino da altura do Slider de fundo */}

      {/* Serviços Section */}
      <ServicesSection id="services">
        <h2>Nossos Serviços</h2>
        <div className="cards">
          <ServiceCard>
            <h3>Defesa de Multas</h3>
            <p>Oferecemos suporte completo para defesa de multas.</p>
          </ServiceCard>
          <ServiceCard>
            <h3>Suspensão de CNH</h3>
            <p>Saiba como evitamos a suspensão da sua carteira de habilitação.</p>
          </ServiceCard>
          <ServiceCard>
            <h3>Gestão de Frotas</h3>
            <p>Gerencie sua frota com mais eficiência e menos preocupações.</p>
          </ServiceCard>
        </div>
      </ServicesSection>

      {/* Footer */}
      <Footer>
        <p>© 2024 Fleet Solutions. Todos os direitos reservados.</p>
      </Footer>
    </Container>
  );
}

export default App;
