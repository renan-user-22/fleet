import React, { useState } from 'react';
import LogoImage from './img/logo.png';
import LogoImagee from './img/logoo.png';
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { IoShieldCheckmark } from "react-icons/io5";
import { MdOutlineContactMail } from "react-icons/md";
import { FaCar, FaChartLine, FaTasks, FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import { TbMapDollar } from "react-icons/tb";
import { HiHome } from "react-icons/hi";
import { MdDesignServices } from "react-icons/md";
import { MdAssuredWorkload } from "react-icons/md";
import { MdOutlineAttachEmail } from "react-icons/md";
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Container, Box, TextDefault, AreaImgBackground, Header, LogoImg, HeroSection, ServicesSection, ServiceCard, Footer, FleetSection, FleetCard } from './stylesGlobal';

// Importando Drawer e IconButton
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const App = () => {
  // Estado para controlar o Drawer
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Funções para abrir e fechar o Drawer
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDrawerOpen(open);
  };

  const drawerContent = (
    <div role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <nav style={{ display: 'flex', flexDirection: 'column', padding: '16px' }}>
        <a href="#home" style={{ display: 'flex', alignItems: 'center', margin: '8px 0' }}>
          <HiHome style={{ marginRight: '8px' }} /> Início
        </a>
        <a href="#services" style={{ display: 'flex', alignItems: 'center', margin: '8px 0' }}>
          <MdDesignServices style={{ marginRight: '8px' }} /> Serviços
        </a>
        <a href="#fleet" style={{ display: 'flex', alignItems: 'center', margin: '8px 0' }}>
          <MdAssuredWorkload style={{ marginRight: '8px' }} /> Fleet Solutions
        </a>
        <a href="#contact" style={{ display: 'flex', alignItems: 'center', margin: '8px 0' }}>
          <FaWhatsapp style={{ marginRight: '8px' }} /> Contato
        </a>
      </nav>
    </div>
  );

  return (
    <Container>
      <AreaImgBackground>
        <Header>
          <LogoImg src={LogoImage} alt="Logo da Fleet Solutions" />
          
          {/* Botão de Menu para abrir o Drawer */}
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)} sx={{ display: { xs: 'block', md: 'none' } }}>
            <MenuIcon />
          </IconButton>

          <nav style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            {/* Menu Desktop */}
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
                marginLeft: 'auto',
                marginRight: '50px',
              }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              Acesso do Cliente
            </motion.button>
          </nav>
        </Header>

        <Box flex="1" color="transparent" width="100%" height="100%" direction="column" justify="center" align="flex-end">
          <TextDefault color="#FFFFFF" size="33px" right={"50px"}>Gestão de Frota Avançada</TextDefault>
          <TextDefault color="#FFFFFF" size="21px" right="50px">Economize até 40% e aumente a produtividade da sua equipe em 80%.</TextDefault>
          <TextDefault color="#FFFFFF" size="21px" right="50px">Soluções para empresas com CNPJ ATIVO ou motoristas com CPF ATIVO!</TextDefault>
        </Box>
      </AreaImgBackground>

      {/* Implementando o Drawer */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerContent}
      </Drawer>

      {/* Resto do código permanece o mesmo... */}

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

      {/* O resto do seu componente continua igual... */}

      <Footer id="contact">
        <LogoImg src={LogoImagee} alt="Logo da Fleet Solutions" />
        <Box justify={'center'} align={'center'} direction={'column'}>
          <p>© 2024 Fleet Solutions. Todos os direitos reservados.</p>
          <p><MdOutlineAttachEmail /> fleetsolutions@gmail.com</p>
        </Box>

        <div className="social-icons" style={{ marginRight: '50px' }}>
          <FaInstagram size={24} /> {/* Ícone do Instagram */}
          <FaWhatsapp size={24} />  {/* Ícone do WhatsApp */}
          <FaLinkedin size={24} />  {/* Ícone do LinkedIn */}
        </div>
      </Footer>
    </Container>
  );
};

export default App;
