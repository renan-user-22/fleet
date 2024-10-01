import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive'; // Para detectar o tamanho da tela
import { Drawer, IconButton } from '@mui/material'; // Biblioteca Material UI para o Drawer
import MenuIcon from '@mui/icons-material/Menu'; // Ícone de Menu
//logomarca
import LogoImage from './img/logo.png';
import LogoImagee from './img/logoo.png';
// Ícones do layout
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { IoShieldCheckmark } from "react-icons/io5";
import { MdOutlineContactMail } from "react-icons/md";
import { FaCar, FaChartLine, FaTasks, FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import { TbMapDollar } from "react-icons/tb";
import { HiHome } from "react-icons/hi";
import { MdDesignServices } from "react-icons/md";
import { MdAssuredWorkload } from "react-icons/md";
import { MdOutlineAttachEmail } from "react-icons/md";
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
  StyledDrawer,
} from './stylesGlobal';

const App = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 }); // Verifica se é um dispositivo mobile

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = (
    <>
      <a href="#home" style={{ display: 'flex', alignItems: 'center' }}>
        <HiHome style={{ marginRight: '8px' }} /> Início
      </a>
      <a href="#services" style={{ display: 'flex', alignItems: 'center' }}>
        <MdDesignServices style={{ marginRight: '8px' }} /> Serviços
      </a>
      <a href="#fleet" style={{ display: 'flex', alignItems: 'center' }}>
        <MdAssuredWorkload style={{ marginRight: '8px' }} /> Fleet Solutions
      </a>
      <a href="#contact" style={{ display: 'flex', alignItems: 'center' }}>
        <FaWhatsapp style={{ marginRight: '8px' }} /> Contato
      </a>
      <motion.button
        style={{
          backgroundColor: '#FF4500',
          color: '#FFFFFF',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        Acesso do Cliente
      </motion.button>
    </>
  );

  return (
    <Container>

      {/* Seção da imagem de fundo e logomarca */}
      <AreaImgBackground>
        <Header>
          <LogoImg src={LogoImage} alt="Logo da Fleet Solutions" />
          {isMobile ? (
            <>
              {/* Ícone para abrir o Drawer em mobile */}
              <IconButton onClick={toggleDrawer} style={{ color: '#FFF' }}>
                <MenuIcon />
              </IconButton>
              {/* Drawer com o menu para mobile */}
              <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
                <Box
                  sx={{ width: 250, padding: '20px' }}
                  role="presentation"
                  onClick={toggleDrawer}
                  onKeyDown={toggleDrawer}
                >
                  {menuItems}
                </Box>
              </Drawer>
            </>
          ) : (
            // Menu normal em dispositivos desktop
            <nav style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              {menuItems}
            </nav>
          )}
        </Header>

        <Box flex="1" color="transparent" width="100%" height="100%" direction="column" justify="center" align="flex-end">
          <TextDefault color="#FFFFFF" size="33px" right={"50px"}>Gestão de Frota Avançada</TextDefault>
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
              <h3><IoShieldCheckmark size="25px" /> Defesa de Multas</h3>
              <p>Oferecemos suporte completo para defesa de multas.</p>
            </motion.div>
          </ServiceCard>

          <ServiceCard>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <h3> <MdOutlineContactMail size="25px" /> Suspensão de CNH</h3>
              <p>Saiba como evitamos a suspensão da sua carteira de habilitação.</p>
            </motion.div>
          </ServiceCard>

          <ServiceCard>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <h3><TbDeviceDesktopAnalytics size="27px" /> Gestão de Frotas</h3>
              <p>Monitore seus motoristas, controle as revisões e gerencie sua frota com mais eficiência e tranquilidade.</p>
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
          <h1 style={{ marginLeft: '50px' }}>Gestão de Frotas e Soluções para Motoristas</h1>
          <p style={{ marginLeft: '50px' }}>Defesa de Multas, Suspensão de CNH, e mais!</p>
          <p style={{ marginLeft: '50px' }}>Tenha um relatório completo na palma de sua mão.</p>

          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            style={{
              backgroundColor: '#FF4500',
              color: '#FFFFFF',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer',
              marginLeft: '50px',
            }}
          >
            Solicitar contato <FaWhatsapp style={{ marginRight: '8px' }} />
          </motion.button>
        </motion.div>
      </HeroSection>

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
              <TbMapDollar size={49} /> {/* Ícone para Transportadoras */}
              <h3>Transportadoras de Carga e Passageiros</h3>
            </motion.div>
          </FleetCard>

          <FleetCard>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <FaCar size={49} /> {/* Ícone para Locadoras */}
              <h3>Locadoras de Veículos</h3>
            </motion.div>
          </FleetCard>

          <FleetCard>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <FaChartLine size={49} /> {/* Ícone para Empresa */}
              <h3>Empresas com Frota Própria</h3>
            </motion.div>
          </FleetCard>
        </div>
      </FleetSection>

      <Footer>
        <LogoImg src={LogoImagee} alt="Logo da Fleet Solutions" />
        <nav>
          <a href="#home">Início</a>
          <a href="#services">Serviços</a>
          <a href="#fleet">Fleet Solutions</a>
          <a href="#contact">Contato</a>
        </nav>
        <div>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </Footer>
    </Container>
  );
};

export default App;
