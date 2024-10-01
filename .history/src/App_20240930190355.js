import React from 'react';
// logomarca
import LogoImage from './img/logo.png';
// Icones do layout
import { TbMapDollar } from "react-icons/tb";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { LiaUserTieSolid } from "react-icons/lia";
import { IoCarSportOutline } from "react-icons/io5";
// Animações
import { motion } from 'framer-motion';
// Efeito de digitação
import { Typewriter } from 'react-simple-typewriter';
// Estilos globais
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
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <LogoImg src={LogoImage} />
          </motion.div>
        </Header>

        <Box
          flex={'1'}
          color={'transparent'}
          width={'100%'}
          height={'100%'}
          direction={'column'}
          justify={'center'}
          align={'flex-end'}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <TextDefault color={'#FFFFFF'} left={'10px'} size={'33px'}>
              Gestão de Frota Avançada
            </TextDefault>
            <TextDefault color={'#FFFFFF'} left={'10px'} size={'21px'}>
              Economize até 40% e aumente a produtividade da sua equipe em 80%.
            </TextDefault>
            <TextDefault color={'#FFFFFF'} left={'10px'} size={'21px'}>
              Soluções para empresas com CNPJ ATIVO ou motoristas com CPF ATIVO!
            </TextDefault>
          </motion.div>
        </Box>
      </AreaImgBackground>

      {/* Serviços Section */}
      <ServicesSection id="services">
        <h2>
          <Typewriter
            words={['Como podemos te ajudar?']}
            loop={1}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>
        <div className="cards">
          <ServiceCard>
            <motion.h3 whileHover={{ scale: 1.1 }}>Defesa de Multas</motion.h3>
            <motion.p whileHover={{ scale: 1.05 }}>
              Oferecemos suporte completo para defesa de multas.
            </motion.p>
          </ServiceCard>
          <ServiceCard>
            <motion.h3 whileHover={{ scale: 1.1 }}>
              Suspensão de CNH
            </motion.h3>
            <motion.p whileHover={{ scale: 1.05 }}>
              Saiba como evitamos a suspensão da sua carteira de habilitação.
            </motion.p>
          </ServiceCard>
          <ServiceCard>
            <motion.h3 whileHover={{ scale: 1.1 }}>Gestão de Frotas</motion.h3>
            <motion.p whileHover={{ scale: 1.05 }}>
              Gerencie sua frota com mais eficiência e menos preocupações.
            </motion.p>
          </ServiceCard>
        </div>
      </ServicesSection>

      {/* Hero Section animada */}
      <HeroSection>
        <TextDefault color={'#FF4500'}>
          Para quem é a Fleet Solutions
        </TextDefault>
        <Box
          flex={'1'}
          color={'transparent'}
          width={'100%'}
          height={'100%'}
          direction={'row'}
          justify={'space-around'}
          align={'center'}
        >
          <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
            <TextDefault color={'#FF4500'}>
              <TbMapDollar size={'30px'} /> Transportadoras de Carga e Passageiros
            </TextDefault>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1, rotate: -5 }}>
            <TextDefault color={'#FF4500'}>
              <TbDeviceDesktopAnalytics size={'30px'} /> Locadoras de Veículos
            </TextDefault>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
            <TextDefault color={'#FF4500'}>
              <LiaUserTieSolid size={'30px'} /> Gestores de Frota
            </TextDefault>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1, rotate: -5 }}>
            <TextDefault color={'#FF4500'}>
              <IoCarSportOutline size={'30px'} /> Motoristas pessoas físicas
            </TextDefault>
          </motion.div>
        </Box>
      </HeroSection>

      {/* Hero Section com animação e CTA */}
      <HeroSection>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <h1>Gestão de Frotas e Soluções para Motoristas</h1>
          <p>Defesa de Multas, Suspensão de CNH, e mais!</p>
          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: '#FF4500',
              transition: { duration: 0.3 }
            }}
          >
            Solicitar Consulta
          </motion.button>
        </motion.div>
      </HeroSection>

      {/* Footer */}
      <Footer>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          © 2024 Fleet Solutions. Todos os direitos reservados.
        </motion.div>
      </Footer>
    </Container>
  );
};

export default App;
