import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import InputMask from 'react-input-mask';

// Logomarca
import LogoImage from './img/logo.png';
import LogoImagee from './img/logoo.png';
import PraQuem from './img/praquem.png';

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
import { Typewriter } from 'react-simple-typewriter';

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
  PraQuemImg,
  HeroSection,
  ServicesSection,
  ServiceCard,
  Footer,
  FleetSection,
  FormTitle,
  FormHeader,
  Form,
  InputField,
  SelectField,
  SubmitButton,
  FleetCard,
  LinkMenu,
  ServicesSectionImg,
} from './stylesGlobal';

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showTypewriter, setShowTypewriter] = useState(true);
  const [expandedCards, setExpandedCards] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    option: '',
  });
  
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [logoFooter, setLogoFooter] = useState(false);
  const [areaDesktop, setAreaDesktop] = useState(false);
  const [areaMobile, setAreaMobile] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const toggleCard = (cardIndex) => setExpandedCards((prev) => ({
    ...prev,
    [cardIndex]: !prev[cardIndex],
  }));

  const handleScroll = () => {
    const isScrolled = window.scrollY > 50;
    setScrolled(isScrolled);
  };

  const handleClick = () => {
    setShowTypewriter(false);
    setTimeout(() => setShowTypewriter(true), 70);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
      <BackgroundImage id="home" />
      <HeaderWrapper scrolled={scrolled}>
        <LogoImg left={'30px'} src={LogoImage} alt="Logo da Fleet Solutions" />

        {areaDesktop && (
          <NavBar>
            <a href="#home"><HiHome /> Início</a>
            <a href="#services"><MdDesignServices /> Serviços</a>
            <a href="#fleet"><MdAssuredWorkload /> Fleet Solutions</a>
            <a href="#contact"><FaWhatsapp /> Contato</a>
          </NavBar>
        )}

        {areaMobile && (
          <>
            <motion.div
              style={{ cursor: 'pointer', top: '20px', left: '20px', marginRight: '25px' }}
              onClick={toggleDrawer}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <FaBars size={35} style={{ color: '#FF4500' }} />
            </motion.div>

            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer}
              PaperProps={{ style: { width: '50%', backgroundColor: '#FF4500' } }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '20px',
                  alignItems: 'flex-start',
                  backgroundColor: 'white',
                }}
                role="presentation"
                onClick={toggleDrawer}
              >
                <nav>
                  <LinkMenu href="#home">
                    <LogoImg src={LogoImagee} alt="Logo da Fleet Solutions" />
                  </LinkMenu>
                  <LinkMenu href="#services">Serviços</LinkMenu>
                  <LinkMenu href="#fleet">Fleet Solutions</LinkMenu>
                  <LinkMenu href="#contact">Contato</LinkMenu>
                </nav>
              </Box>
            </Drawer>
          </>
        )}
      </HeaderWrapper>

      <WelcomeTextWrapper>
        <TextDefault color="#FFFFFF" size={isMobile ? '27px' : '35px'} left="30px">
          <IoShieldCheckmark size="25px" /> Recebeu uma multa e quer recorrer?
        </TextDefault>
        <TextDefault color="#FFFFFF" size={isMobile ? '19px' : '24px'} left="30px" weight="bold">
          Preencha o formulário abaixo e fale com o especialista agora!
        </TextDefault>

        <Box direction="column" width={areaDesktop ? '600px' : '80%'}>
          <InputField
            type="text"
            name="name"
            placeholder="Seu nome"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <InputField
            type="email"
            name="email"
            placeholder="Seu e-mail"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <InputMask mask="(99) 99999-9999" value={formData.phone} onChange={handleChange}>
            {() => (
              <InputField
                type="tel"
                name="phone"
                placeholder="Seu telefone/WhatsApp"
                required
              />
            )}
          </InputMask>
          <SelectField name="option" value={formData.option} onChange={handleChange} required>
            <option value="">Selecione uma opção</option>
            <option value="sem_cnh">Fui pego sem CNH</option>
            <option value="lei_seca">Fui pego na Lei Seca</option>
            <option value="sinal_vermelho">Avancei o sinal vermelho</option>
            <option value="ultrapassei_faixa">Ultrapassei na contra mão em faixa contínua</option>
            <option value="veiculo_nao_registrado">Conduzir veículo não registrado</option>
            <option value="excesso_velocidade">Excesso de velocidade</option>
            <option value="celular_dirigindo">Utilizei o telefone celular ao dirigir</option>
            <option value="permissionario">Sou permissionário</option>
            <option value="perder_cnh">Estou prestes a perder minha CNH</option>
            <option value="outros">Outros</option>
          </SelectField>
          <SubmitButton type="submit">Solicitar Atendimento</SubmitButton>

          <TextDefault top="30px" color="#FFFFFF" size="13px" left="30px">
            • Prometemos não utilizar suas informações de contato para enviar qualquer tipo de SPAM.
          </TextDefault>
        </Box>
      </WelcomeTextWrapper>

      {/* Seção de Serviços */}
      <ServicesSection id="services">
        <LogoImgWhite src={LogoImagee} alt="Logo da Fleet Solutions" />
        <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          {showTypewriter && (
            <Typewriter
              words={['Como podemos te ajudar?']}
              loop={3}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={5000}
              onInit={(typewriter) => typewriter.start()}
            />
          )}
        </motion.h1>

        <div className="cards" style={{ marginTop: '70px' }}>
          <ServiceCard onClick={() => toggleCard(1)}>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <FaTasks size={80} />
            </motion.div>
            <h2>CNH Suspensa ou Cassada</h2>
          </ServiceCard>
          <ServiceCard onClick={() => toggleCard(2)}>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <MdOutlineContactMail size={80} />
            </motion.div>
            <h2>Defesas e Recursos de Multa</h2>
          </ServiceCard>
          <ServiceCard onClick={() => toggleCard(3)}>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <FaCar size={80} />
            </motion.div>
            <h2>Recuperação de Pontos</h2>
          </ServiceCard>
        </div>
      </ServicesSection>

      <FleetSection id="fleet">
        <h2>Fleet Solutions</h2>
        <FleetCard>
          <TbDeviceDesktopAnalytics size={80} />
          <h2>Gerenciamento de Frota</h2>
          <p>Maximize a eficiência da sua frota com a nossa plataforma de gestão personalizada.</p>
        </FleetCard>
        <FleetCard>
          <MdAddBusiness size={80} />
          <h2>Locação de Veículos</h2>
          <p>Oferecemos opções flexíveis de locação para atender às suas necessidades empresariais.</p>
        </FleetCard>
        <FleetCard>
          <FaChartLine size={80} />
          <h2>Consultoria em Logística</h2>
          <p>Nossa equipe especializada oferece soluções estratégicas para otimizar sua logística.</p>
        </FleetCard>
      </FleetSection>

      <Footer>
        <div>
          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
            {logoFooter && (
              <PraQuemImg src={PraQuem} alt="Pra Quem? Fleet Solutions" />
            )}
          </motion.div>
        </div>
        <div className="social-links">
          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
            <FaInstagram size={35} />
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
            <FaWhatsapp size={35} />
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
            <FaLinkedin size={35} />
          </motion.div>
        </div>
      </Footer>
    </Container>
  );
};

export default App;
