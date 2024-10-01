import React, { useState } from 'react';
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
} from './stylesGlobal';

import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const App = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: 'Início', icon: <HiHome style={{ marginRight: '8px' }} /> },
    { text: 'Serviços', icon: <MdDesignServices style={{ marginRight: '8px' }} /> },
    { text: 'Fleet Solutions', icon: <MdAssuredWorkload style={{ marginRight: '8px' }} /> },
    { text: 'Contato', icon: <FaWhatsapp style={{ marginRight: '8px' }} /> },
  ];

  return (
    <Container>
      {/* Seção da imagem de fundo e logomarca */}
      <AreaImgBackground>
        <Header>
          <LogoImg src={LogoImage} alt="Logo da Fleet Solutions" />
          <nav style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            {menuItems.map((item) => (
              <a href={`#${item.text.toLowerCase()}`} style={{ display: 'flex', alignItems: 'center' }} key={item.text}>
                {item.icon} {item.text}
              </a>
            ))}
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
          <IconButton edge="end" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
        </Header>

        <Box flex="1" color="transparent" width="100%" height="100%" direction="column" justify="center" align="flex-end">
          <TextDefault color="#FFFFFF" size="33px" right="50px">Gestão de Frota Avançada</TextDefault>
          <TextDefault color="#FFFFFF" size="21px" right="50px">Economize até 40% e aumente a produtividade da sua equipe em 80%.</TextDefault>
          <TextDefault color="#FFFFFF" size="21px" right="50px">Soluções para empresas com CNPJ ATIVO ou motoristas com CPF ATIVO!</TextDefault>
        </Box>
      </AreaImgBackground>

      {/* Drawer para dispositivos móveis */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <div
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {menuItems.map((item) => (
              <ListItem button key={item.text}>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>

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
          <h1>Gestão de Frotas e Soluções para Motoristas</h1>
          <p>Defesa de Multas, Suspensão de CNH, e mais!</p>
          <p>Tenha um relatório completo na palma de sua mão.</p>
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
              marginRight: '50px',
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
              <h3>Transportadoras</h3>
              <p>Aumente a segurança e diminua custos.</p>
            </motion.div>
          </FleetCard>

          <FleetCard>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <FaCar size={49} /> {/* Ícone para Motoristas */}
              <h3>Motoristas</h3>
              <p>Saiba como evitar a suspensão da CNH.</p>
            </motion.div>
          </FleetCard>

          <FleetCard>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <FaChartLine size={49} /> {/* Ícone para Empresas */}
              <h3>Empresas</h3>
              <p>Garanta a proteção da sua frota.</p>
            </motion.div>
          </FleetCard>
        </div>
      </FleetSection>

      <Footer>
        <p>© 2024 Fleet Solutions. Todos os direitos reservados.</p>
        <div>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedin /></a>
        </div>
      </Footer>
    </Container>
  );
};

export default App;
