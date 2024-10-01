import React from 'react';
import LogoImage from './img/logo.png';
import { motion } from 'framer-motion';
import {
  Container,
  Box,
  TextDefault,

  AreaImgBackground,
  Header,
  LogoImg,

  HeroSection,

  ServicesSection,
  ServiceCard,

  Footer
} from './stylesGlobal';

const App = () => {
  return (
    <Container>

      <AreaImgBackground>
        <Header>
          <LogoImg src={LogoImage} />

        </Header>

        <Box flex={'1'} color={'transparent'} width={'100%'} height={'100%'} direction={'row'} justify={'space-between'} align={'center'}>

          <Box flex={'1'} color={'#eee'} width={'100%'} height={'100%'} direction={'row'} justify={'space-between'} align={'center'}>

          </Box>


          <Box flex={'1'} color={'#888'} width={'100%'} height={'100%'} direction={'row'} justify={'space-between'} align={'center'}>
            <TextDefault left={'10px'} top={'10px'} bottom={'10px'} size={'22px'}>Gestão de Frota Avançada</TextDefault>

          </Box>

        </Box>

      </AreaImgBackground>

      {/* Serviços Section */}
      <ServicesSection id="services">
        <h2>Como podemos te ajudar?</h2>
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


      {/* Footer */}
      <Footer>
        © 2024 Fleet Solutions. Todos os direitos reservados.
      </Footer>

    </Container>
  );
}

export default App;