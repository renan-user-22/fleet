import React from 'react';
//logomarca
import LogoImage from './img/logo.png';
// Ícones do layout
import { TbMapDollar, TbDeviceDesktopAnalytics } from "react-icons/tb";
import { LiaUserTieSolid } from "react-icons/lia";
import { IoCarSportOutline } from "react-icons/io5";
import { MdOutlineContactMail } from "react-icons/md";
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
  Footer,
  FleetSection,
  FleetCard,
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
            typeSpeed={100}
            deleteSpeed={100}
            delaySpeed={5000}
          />
        </motion.h2>

        <div className="cards">
          <ServiceCard>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <h3><TbMapDollar size="20px" /> Defesa de Multas</h3>  {/* Ícone adicionado */}
              <p>Oferecemos suporte completo para defesa de multas.</p>
            </motion.div>
          </ServiceCard>

          <ServiceCard>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <h3> <MdOutlineContactMail  size="20px" /> Suspensão de CNH</h3>  {/* Ícone adicionado */}
              <p>Saiba como evitamos a suspensão da sua carteira de habilitação.</p>
            </motion.div>
          </ServiceCard>

          <ServiceCard>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <h3><IoCarSportOutline size="20px" /> Gestão de Frotas</h3>  {/* Ícone adicionado */}
              <p>Gerencie sua frota com mais eficiência e menos preocupações.</p>
            </motion.div>
          </ServiceCard>
        </div>
      </ServicesSection>

      {/* Hero Section */}
      <HeroSection>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h1>Gestão de Frotas e Soluções para Motoristas</h1>
          <p>Defesa de Multas, Suspensão de CNH, e mais!</p>
          <p>Tenha um relatório completo na palma de sua mão.</p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            Solicitar contato
          </motion.button>
        </motion.div>
      </HeroSection>


      {/* Nova Seção: Para quem é a Frota 162? */}
      <FleetSection>

        <LogoImg src={LogoImage} alt="Logo da Fleet Solutions" />

        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Para quem é a Fleet Solutions?
        </motion.h2>

        <div className="fleet-cards">
          <FleetCard>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <h3>Transportadoras de Carga e Passageiros</h3>

            </motion.div>
          </FleetCard>

          <FleetCard>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <h3>Locadoras de Veículos</h3>

            </motion.div>
          </FleetCard>

          <FleetCard>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <h3>Despachantes</h3>

            </motion.div>
          </FleetCard>

          <FleetCard>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <h3>Gestores de Frota</h3>

            </motion.div>
          </FleetCard>
        </div>
      </FleetSection>

      {/* Footer */}
      <Footer>
        <p>© 2024 Fleet Solutions. Todos os direitos reservados.</p>
      </Footer>
    </Container>
  );
};

export default App;
