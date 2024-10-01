import React from 'react';
//logomarca
import LogoImage from './img/logo.png';
// Ícones do layout
import { TbMapDollar } from "react-icons/tb";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { LiaUserTieSolid } from "react-icons/lia";
import { IoCarSportOutline } from "react-icons/io5";
// Efeito de animação
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
// Estilos
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

      {/* Seção da imagem de fundo e logomarca */}
      <AreaImgBackground>
        <Header>
          <LogoImg src={LogoImage} alt="Logo da Fleet Solutions" />
        </Header>

        <Box flex="1" color="transparent" width="100%" height="100%" direction="column" justify="center" align="flex-end">
          <TextDefault color="#FFFFFF" size="33px" right="50px">Gestão de Frota Avançada</TextDefault>
          <TextDefault color="#FFFFFF" size="21px" right="50px">Economize até 40% e aumente a produtividade da sua equipe em 80%.</TextDefault>
          <TextDefault color="#FFFFFF" size="21px" right="50px">Soluções para empresas com CNPJ ATIVO ou motoristas com CPF ATIVO!</TextDefault>
        </Box>
      </AreaImgBackground>

      {/* Seção de Serviços */}
      <ServicesSection id="services">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typewriter
            words={['Como podemos te ajudar?']}
            loop={1}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={100}
            delaySpeed={3000}
          />
        </motion.h2>

        <div className="cards">
          <ServiceCard>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <h3>Defesa de Multas</h3>
              <p>Oferecemos suporte completo para defesa de multas.</p>
            </motion.div>
          </ServiceCard>

          <ServiceCard>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <h3>Suspensão de CNH</h3>
              <p>Saiba como evitamos a suspensão da sua carteira de habilitação.</p>
            </motion.div>
          </ServiceCard>

          <ServiceCard>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <h3>Gestão de Frotas</h3>
              <p>Gerencie sua frota com mais eficiência e menos preocupações.</p>
            </motion.div>
          </ServiceCard>
        </div>
      </ServicesSection>

      {/* Seção Hero com ícones e animações */}
      <HeroSection>
        <TextDefault color="#FF4500" size="24px" weight="bold">Para quem é a Fleet Solutions</TextDefault>

        <Box flex="1" color="transparent" width="100%" height="100%" direction="row" justify="space-around" align="center">
          <TextDefault color="#FF4500" size="18px">
            <TbMapDollar size="30px" /> Transportadoras de Carga e Passageiros
          </TextDefault>
          <TextDefault color="#FF4500" size="18px">
            <TbDeviceDesktopAnalytics size="30px" /> Locadoras de Veículos
          </TextDefault>
          <TextDefault color="#FF4500" size="18px">
            <LiaUserTieSolid size="30px" /> Gestores de Frota
          </TextDefault>
          <TextDefault color="#FF4500" size="18px">
            <IoCarSportOutline size="30px" /> Motoristas pessoas físicas
          </TextDefault>
        </Box>
      </HeroSection>

      {/* Hero Section com animação */}
      <HeroSection>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h1>Gestão de Frotas e Soluções para Motoristas</h1>
          <p>Defesa de Multas, Suspensão de CNH, e mais!</p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            Solicitar Consulta
          </motion.button>
        </motion.div>
      </HeroSection>

      {/* Footer */}
      <Footer>
        <p>© 2024 Fleet Solutions. Todos os direitos reservados.</p>
      </Footer>
    </Container>
  );
};

export default App;
