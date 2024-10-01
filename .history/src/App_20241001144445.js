import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
//logomarca
import LogoImage from './img/logo.png';
import LogoImagee from './img/logoo.png';
import backgroundImageOne from './img/ImageInitial.jpg';
import backgroundImageTwo from './img/ImageInitiall.jpg';
import backgroundImageTree from './img/ImageInitialllll.jpg';
// Ícones do layout
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { IoShieldCheckmark } from "react-icons/io5";
import { MdOutlineContactMail } from "react-icons/md";
import { FaCar, FaChartLine, FaTasks, FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import { TbMapDollar } from "react-icons/tb";
import { HiHome } from "react-icons/hi";
import { MdDesignServices } from "react-icons/md";
import { MdAssuredWorkload } from "react-icons/md";
import { MdOutlineAttachEmail } from "react-icons/md";
import { HiOutlineLockClosed } from "react-icons/hi2";
import { Drawer, Button } from '@mui/material';
import { HiLockClosed } from "react-icons/hi";
// Efeito de animação
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
// Estilos
import {
  Container,
  Box,
  TextDefault,
  Header,
  LogoImg,
  HeroSection,
  ServicesSection,
  ServiceCard,
  Footer,
  FleetSection,
  FleetCard,
  LinkMenu
} from './stylesGlobal';

const backgroundImages = [backgroundImageOne, backgroundImageTwo, backgroundImageTree];

const AreaImgBackground = styled.div`
  width: 100%;
  height: 600px;
  background-size: cover;
  background-image: url(${(props) => props.currentImage});
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: background-image 3s ease-in-out; /* Adicionando a transição para a troca de imagem */

  @media (max-width: 768px) {
    height: 600px; /* Ajusta a altura da imagem para dispositivos menores */
  }
`;

const App = () => {

  //const [currentImage, setCurrentImage] = useState(backgroundImages[0]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [logoFooter, setLogoFooter] = useState(false);

  const [areaDesktop, setAreaDesktop] = useState(false);
  const [areaMobile, setAreaMobile] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  useEffect(() => {

    if (isMobile) {
      setAreaMobile(true);
      setAreaDesktop(false);
      setLogoFooter(false);
    } else {
      setAreaMobile(false);
      setAreaDesktop(true);
      setLogoFooter(true);
    }

  }, [isMobile]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length); // Altera para o próximo índice
    }, 5000); // Altera a cada 5 segundos

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar
  }, []);



  return (
    <Container>

      {/* Seção da imagem de fundo e logomarca */}
      <AreaImgBackground currentImage={backgroundImages[currentImageIndex]}>
        <Header>
          <LogoImg left={'30px'} src={LogoImage} alt="Logo da Fleet Solutions" />

          {areaDesktop &&
            <nav style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
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
          }

          {areaMobile && (
            <>
              {/* Ícone de menu para abrir o Drawer */}
              <motion.div
                style={{ cursor: 'pointer', top: '20px', left: '20px', marginRight: '20px' }}
                onClick={toggleDrawer}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <FaBars size={30} />
              </motion.div>

              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer}
                PaperProps={{
                  style: { width: '40%', padding: '10px', backgroundColor: '#FF4500' },
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '20px',
                    height: '100%',
                    alignItems: 'flex-start',
                    backgroundColor: 'white',
                  }}
                  role="presentation"
                  onClick={toggleDrawer}
                  onKeyDown={toggleDrawer}
                >
                  <nav style={{ display: 'flex', height: '70%', width: '100%', alignItems: 'flex-end', flexDirection: 'column' }}>
                    <LinkMenu href="#home" >
                      <LogoImg src={LogoImagee} alt="Logo da Fleet Solutions" />
                    </LinkMenu>

                    <LinkMenu href="#acess">
                      <TextDefault weight={'bold'} color="#FFFFFF" size="17px"> Meu acesso <HiLockClosed size={'19px'} style={{ marginLeft:'8px', marginRight: '8px' }} /></TextDefault>
                    </LinkMenu>

                    <LinkMenu href="#home" >
                      <TextDefault color="#FFFFFF" size="19px"><HiHome style={{ marginRight: '8px' }} /> Início</TextDefault>
                    </LinkMenu>

                    <LinkMenu href="#services">
                      <TextDefault color="#FFFFFF" size="19px"> <MdDesignServices style={{ marginRight: '8px' }} /> Serviços</TextDefault>
                    </LinkMenu>

                    <LinkMenu href="#fleet">
                      <TextDefault color="#FFFFFF" size="19px"><MdAssuredWorkload style={{ marginRight: '8px' }} /> Fleet Solutions</TextDefault>
                    </LinkMenu>

                    <LinkMenu href="#contact">
                      <TextDefault color="#FFFFFF" size="19px"><FaWhatsapp style={{ marginRight: '8px' }} /> Contato</TextDefault>
                    </LinkMenu>

                  </nav>
                </Box>
              </Drawer>
            </>
          )}

        </Header>

        <Box flex="1" color="transparent" width="100%" height="100%" direction="column" justify="center" align={isMobile ? 'flex-start' : 'flex-end'}>
          <TextDefault top={'100px'} color="#FFFFFF" size="33px" right="50px" left={'20px'} >Gestão de Frota Avançada</TextDefault>
          <TextDefault top={'10px'} color="#FFFFFF" size="21px" right="50px" left={'20px'}>Economize até 40% e aumente a produtividade da sua equipe em 80%.</TextDefault>
          <TextDefault top={'10px'} color="#FFFFFF" size="21px" right="50px" left={'20px'}>Soluções para empresas com CNPJ ATIVO ou motoristas com CPF ATIVO!</TextDefault>

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
              marginLeft: '20px',
              marginTop: '30px',
            }}
          >
            Economize agora mesmo <FaWhatsapp style={{ marginRight: '8px' }} />
          </motion.button>
        </Box>
      </AreaImgBackground>

      {/* Seção de Serviços */}
      <ServicesSection id="services">
        <LogoImg src={LogoImagee} alt="Logo da Fleet Solutions" />

        <motion.h1
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
        </motion.h1>

        <div className="cards" style={{ marginTop: '70px' }}>

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

        <TextDefault bottom={'20px'} color="#FFFFFF" size={isMobile ? '27px' : '35px'} left={"30px"} weight={'bold'}>Gestão de Frotas e Soluções para Motoristas</TextDefault>
        <TextDefault color="#FFFFFF" size={isMobile ? '19px' : '24px'} left="30px">• Defesa de Multas, Suspensão de CNH, e mais!</TextDefault>
        <TextDefault bottom={'20px'} color="#FFFFFF" size={isMobile ? '19px' : '24px'} left="30px">• Tenha um relatório completo na palma de sua mão.</TextDefault>

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
            marginLeft: '30px',
          }}
        >
          Solicitar contato <FaWhatsapp style={{ marginRight: '8px' }} />
        </motion.button>

      </HeroSection>

      <FleetSection>

        <LogoImg src={LogoImage} alt="Logo da Fleet Solutions" />

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Para quem é a Fleet Solutions?
        </motion.h1>

        <div className="fleet-cards" style={{ marginTop: '70px' }}>
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
              <FaChartLine size={49} /> {/* Ícone para Despachantes */}
              <h3>Despachantes</h3>
            </motion.div>
          </FleetCard>

          <FleetCard>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <FaTasks size={49} /> {/* Ícone para Gestores de Frota */}
              <h3>Gestores de Frota</h3>
            </motion.div>
          </FleetCard>
        </div>
      </FleetSection>

      {/* Footer */}
      <Footer id="contact">


        {logoFooter &&
          <LogoImg src={LogoImagee} alt="Logo da Fleet Solutions" />
        }

        <Box justify={'center'} align={'center'} direction={'column'}>
          <TextDefault top={'5px'} color="#FFFFFF" size="13px" bottom={'5px'}>Contato:</TextDefault>
        </Box>

        <div className="social-icons">
          <FaInstagram size={24} /> {/* Ícone do Instagram */}
          <FaWhatsapp size={24} />  {/* Ícone do WhatsApp */}
          <FaLinkedin size={24} />  {/* Ícone do LinkedIn */}
        </div>

        <TextDefault top={'15px'} color="#FFFFFF" size="17px" bottom={'5px'}><MdOutlineAttachEmail /> fleetsolutions@gmail.com</TextDefault>

        <TextDefault top={'5px'} color="#FFFFFF" size="13px" >© 2024 Fleet Solutions. Todos os direitos reservados.</TextDefault>
      </Footer>
    </Container>
  );
};

export default App;
