import React from 'react';
// Logomarca
import LogoImage from './img/logo.png';
import LogoImagee from './img/logoo.png';
// Ícones do layout
import {
  TbDeviceDesktopAnalytics,
  TbMapDollar
} from "react-icons/tb";
import {
  IoShieldCheckmark,
  MdOutlineContactMail,
  MdDesignServices,
  MdAssuredWorkload
} from "react-icons/md";
import {
  FaCar,
  FaChartLine,
  FaTasks,
  FaInstagram,
  FaWhatsapp,
  FaLinkedin
} from 'react-icons/fa';
import { HiHome } from "react-icons/hi";
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
          <nav style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <NavLink href="#home" icon={<HiHome />}>Início</NavLink>
            <NavLink href="#services" icon={<MdDesignServices />}>Serviços</NavLink>
            <NavLink href="#fleet" icon={<MdAssuredWorkload />}>Fleet Solutions</NavLink>
            <NavLink href="#contact" icon={<FaWhatsapp />}>Contato</NavLink>
            <CustomerAccessButton />
          </nav>
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
            <ServiceCardContent
              icon={<IoShieldCheckmark size="25px" />}
              title="Defesa de Multas"
              description="Oferecemos suporte completo para defesa de multas."
            />
          </ServiceCard>

          <ServiceCard>
            <ServiceCardContent
              icon={<MdOutlineContactMail size="25px" />}
              title="Suspensão de CNH"
              description="Saiba como evitamos a suspensão da sua carteira de habilitação."
            />
          </ServiceCard>

          <ServiceCard>
            <ServiceCardContent
              icon={<TbDeviceDesktopAnalytics size="27px" />}
              title="Gestão de Frotas"
              description="Monitore seus motoristas, controle as revisões e gerencie sua frota com mais eficiência e tranquilidade."
            />
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
          <ContactButton />
        </motion.div>
      </HeroSection>

      {/* Seção de Fleet */}
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
          {fleetData.map((item, index) => (
            <FleetCard key={index}>
              <FleetCardContent icon={item.icon} title={item.title} />
            </FleetCard>
          ))}
        </div>
      </FleetSection>

      {/* Footer */}
      <Footer id="contact">
        <LogoImg src={LogoImagee} alt="Logo da Fleet Solutions" />
        <p>© 2024 Fleet Solutions. Todos os direitos reservados.</p>
        <div className="social-icons" style={{ marginRight: '50px' }}>
          <SocialIcon icon={<FaInstagram />} />
          <SocialIcon icon={<FaWhatsapp />} />
          <SocialIcon icon={<FaLinkedin />} />
        </div>
      </Footer>
    </Container>
  );
};

// Componentes adicionais
const NavLink = ({ href, icon, children }) => (
  <a href={href} style={{ display: 'flex', alignItems: 'center' }}>
    {icon && <span style={{ marginRight: '8px' }}>{icon}</span>}
    {children}
  </a>
);

const CustomerAccessButton = () => (
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
);

const ServiceCardContent = ({ icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.3 }}
  >
    <h3>{icon} {title}</h3>
    <p>{description}</p>
  </motion.div>
);

const ContactButton = () => (
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
);

const FleetCardContent = ({ icon, title }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.3 }}
  >
    {icon}
    <h3>{title}</h3>
  </motion.div>
);

const SocialIcon = ({ icon }) => (
  <span style={{ marginRight: '10px' }}>
    {icon}
  </span>
);

// Dados para a seção Fleet
const fleetData = [
  { icon: <TbMapDollar size={49} />, title: "Transportadoras de Carga e Passageiros" },
  { icon: <FaCar size={49} />, title: "Locadoras de Veículos" },
  { icon: <FaChartLine size={49} />, title: "Despachantes" },
  { icon: <FaTasks size={49} />, title: "Gestores de Frota" }
];

export default App;
