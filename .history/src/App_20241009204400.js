import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
//logomarca
import LogoImage from './img/logo.png';
import LogoImagee from './img/logoo.png';
// Ícones do layout
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { IoShieldCheckmark } from "react-icons/io5";
import { MdOutlineContactMail } from "react-icons/md";
import { RiProhibited2Fill } from "react-icons/ri";
import { FaCar, FaChartLine, FaTasks, FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import { TbMapDollar } from "react-icons/tb";
import { HiHome } from "react-icons/hi";
import { MdDesignServices } from "react-icons/md";
import { MdAssuredWorkload } from "react-icons/md";
import { MdOutlineAttachEmail } from "react-icons/md";
import { Drawer } from '@mui/material';
import { HiLockClosed } from "react-icons/hi";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdAddBusiness } from "react-icons/md";
// Efeito de animação
import { motion } from 'framer-motion';
import { Typewriter as SimpleTypewriter } from 'react-simple-typewriter';
import Typewriter from 'typewriter-effect'; // Mantém a importação do typewriter-effect como Typewriter
// Estilos
import {
  Container,
  Box,
  TextDefault,
  Header,
  NavBar,
  HeaderWrapper,
  WelcomeTextWrapper,
  WelcomeTextWrapperLogo,
  WelcomeText,
  BackgroundImage,
  LogoImg,
  LogoImgWhite,
  LogoImgAnemated,
  HeroSection,
  ServicesSection,
  ServiceCard,
  Footer,
  FleetSection,
  FleetCard,
  LinkMenu
} from './stylesGlobal';

const App = () => {

  const [scrolled, setScrolled] = useState(false);
  const [startTyping, setStartTyping] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [logoFooter, setLogoFooter] = useState(false);

  const [areaDesktop, setAreaDesktop] = useState(false);
  const [areaMobile, setAreaMobile] = useState(false);


  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleScroll = () => {
    const isScrolled = window.scrollY > 50; // Muda a cor após 50px de rolagem
    setScrolled(isScrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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


  return (
    <Container>

      {/* Background com Parallax e Zoom */}
      <BackgroundImage id="home" />

      {/* Header fixo */}
      <HeaderWrapper scrolled={scrolled} >
        <LogoImg left={'30px'} src={LogoImage} alt="Logo da Fleet Solutions" />

        {areaDesktop &&
          <NavBar style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
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
              Consulte o andamento dos seus serviços
            </motion.button>
          </NavBar>
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

                  <LinkMenu
                    href="#services"
                    onClick={() => setStartTyping(true)} // Inicia a digitação ao clicar
                  >
                    <TextDefault color="#FFFFFF" size="19px">
                      Serviços <MdDesignServices style={{ marginRight: '8px' }} />
                    </TextDefault>
                  </LinkMenu>

                  <LinkMenu href="#services">
                    <TextDefault color="#FFFFFF" size="19px">Serviços <MdDesignServices style={{ marginRight: '8px' }} /></TextDefault>
                  </LinkMenu>

                  <LinkMenu href="#fleet">
                    <TextDefault color="#FFFFFF" size="19px">Fleet Solutions <MdAssuredWorkload style={{ marginRight: '8px' }} /></TextDefault>
                  </LinkMenu>

                  <LinkMenu href="#contact">
                    <TextDefault color="#FFFFFF" size="19px">Contato <IoLogoWhatsapp style={{ marginRight: '8px' }} /></TextDefault>
                  </LinkMenu>

                  <LinkMenu href="#acess">
                    <TextDefault weight={'bold'} color="#FFFFFF" size="17px">Meu acesso <HiLockClosed size={'19px'} style={{ marginRight: '8px' }} /></TextDefault>
                  </LinkMenu>

                </nav>
              </Box>
            </Drawer>
          </>
        )}
      </HeaderWrapper>

      <WelcomeTextWrapper>

        <TextDefault size={'33px'} color={'#FF4500'} weight={'bold'} bottom={'10px'}>Fleet Solutions</TextDefault>
        <TextDefault size={'22px'} color={'#FFFFFF'} top={'10px'} bottom={'10px'}><IoShieldCheckmark size="25px" /> Defesa de Multas</TextDefault>
        <TextDefault size={'22px'} color={'#FFFFFF'} top={'10px'} bottom={'10px'}><MdOutlineContactMail size="25px" /> Suspensão de CNH</TextDefault>
        <TextDefault size={'22px'} color={'#FFFFFF'} top={'10px'} bottom={'10px'}><TbDeviceDesktopAnalytics size="27px" /> Gestão de Frotas</TextDefault>
        <TextDefault size={'22px'} color={'#FFFFFF'} top={'10px'} bottom={'10px'}><RiProhibited2Fill size="25px" /> Cassação de CNH</TextDefault>
        <TextDefault size={'22px'} color={'#FFFFFF'} top={'10px'} bottom={'25px'}><MdAddBusiness size="25px" /> Soluções Personalizadas para Empresas</TextDefault>


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
            //marginLeft: '30px',
          }}
        >
          <TextDefault size={'17px'} color={'#FFFFFF'} >Recebeu multa e quer recorrer ?</TextDefault>
          <TextDefault size={'13px'} color={'#FFFFFF'} top={'5px'} bottom={'5px'} >Clique aqui</TextDefault>
        </motion.button>

      </WelcomeTextWrapper>

      {areaDesktop &&
        <WelcomeTextWrapperLogo>
          <LogoImgAnemated width={'300px'} right={'30px'} src={LogoImage} alt="Logo da Fleet Solutions" />
        </WelcomeTextWrapperLogo>
      }

      {/* Seção de Serviços */}
      <ServicesSection id="services">
        <LogoImgWhite src={LogoImagee} alt="Logo da Fleet Solutions" />

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/** Aguarda 3 segundos antes de iniciar o efeito de digitação */}
          {startTyping && ( // Exibe o Typewriter somente se startTyping for true
            <Typewriter
              words={['Como podemos te ajudar?']}
              loop={3}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={5000}
              onInit={(typewriter) => {
                typewriter.start(); // Inicia o efeito de digitação
              }}
            />
          )}
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

        <div className="cards" style={{ marginTop: '70px' }}>

          <ServiceCard>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <h3><RiProhibited2Fill size="25px" /> Cassação de CNH</h3>
              <p>Proteja sua CNH! Contamos com soluçõesrápidas e feitas especialmente paraatender às suas necessidades.</p>
            </motion.div>
          </ServiceCard>

          <ServiceCard>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <h3><MdAddBusiness size="25px" /> Soluções Personalizadas para Empresas</h3>
              <p>Descubra nossas soluções personalizadas e veja por que a Fleet Solutions é a parceira ideal para o seu negócio.</p>
            </motion.div>
          </ServiceCard>

          <ServiceCard>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <h3><TbDeviceDesktopAnalytics size="27px" />Mais informações</h3>
              <p>Não encontrou o que procurava?Estamos aqui para ajudar! Cliqueaqui e nos conte suas necessidades.</p>
            </motion.div>
          </ServiceCard>
        </div>
      </ServicesSection>

      {/* Hero Section */}
      <HeroSection>

        <TextDefault bottom={'20px'} color="#FFFFFF" size={isMobile ? '27px' : '35px'} left={"30px"} weight={'bold'}>Gestão de Frotas e Soluções para Motoristas</TextDefault>
        <TextDefault color="#FFFFFF" size={isMobile ? '19px' : '24px'} left="30px">• Defesa de Multas, Controle do veículo, e mais!</TextDefault>
        <TextDefault bottom={'20px'} color="#FFFFFF" size={isMobile ? '19px' : '24px'} left="30px">• Tenha um relatório completo na palma da sua mão.</TextDefault>

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
          <TextDefault size={'17px'} color={'#FFFFFF'} ><TbDeviceDesktopAnalytics size="22px" />  Mais informações</TextDefault>
        </motion.button>

      </HeroSection>




      <FleetSection id="fleet">

        <LogoImgWhite src={LogoImage} alt="Logo da Fleet Solutions" />

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Quem somos?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ marginRight: '13px', marginLeft: '13px' }}
        >
          Na Fleet Solutions, somos especialistas em direito de trânsito,
          oferecendo uma ampla gama de serviços tanto para motoristas quanto
          para empresas (B2B e B2C).Atuamos na defesa de multas, cassação e suspensão de CNH,
          além de fornecer soluções personalizadas e avançadas para a gestão de frotas e motoristas,
          com foco na redução de custos e aumento da segurança. A Fleet Solutions nasceu da visão de um
          advogado que, durante sua graduação, trabalhou e adquiriu sólida vivência em transportadoras.
          Essa experiência permitiu que ele enxergasse uma lacuna no mercado e fundasse a Fleet Solutions,
          uma empresa criada para oferecer, com excelência, suporte e soluções para todos que vivem
          o trânsito, seja pessoa física ou jurídica.
        </motion.p>

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
              <MdOutlineContactMail size={49} /> {/* Ícone para Despachantes */}
              <h3>Motoristas</h3>
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
