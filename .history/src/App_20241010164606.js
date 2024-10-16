import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
//logomarca
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
//import Typewriter from 'typewriter-effect'; // Mantém a importação do typewriter-effect como Typewriter
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


  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleScroll = () => {
    const isScrolled = window.scrollY > 50; // Muda a cor após 50px de rolagem
    setScrolled(isScrolled);
  };

  const handleClick = () => {
    setShowTypewriter(false); // Esconde o efeito de digitação
    setTimeout(() => {
      setShowTypewriter(true); // Reinicia o efeito de digitação após um breve atraso
    }, 70); // Ajuste o tempo se necessário
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Form data submitted:', formData);
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
              PaperProps={{
                style: { width: '50%', padding: '10px', backgroundColor: '#FF4500' },
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

                  <LinkMenu onClick={handleClick} id="home" smooth={true} duration={500}>
                    <TextDefault color="#FFFFFF" size="19px">
                      Início <HiHome style={{ marginRight: '8px', color: '#FFF' }} />
                    </TextDefault>
                  </LinkMenu>

                  <LinkMenu href="#services">
                    <TextDefault color="#FFFFFF" size="19px">
                      Serviços <MdDesignServices style={{ marginRight: '8px', color: '#FFF' }} />
                    </TextDefault>
                  </LinkMenu>

                  <LinkMenu href="#fleet">
                    <TextDefault color="#FFFFFF" size="19px">
                      Fleet Solutions <MdAssuredWorkload style={{ marginRight: '8px', color: '#FFF' }} />
                    </TextDefault>
                  </LinkMenu>

                  <LinkMenu href="#contact">
                    <TextDefault color="#FFFFFF" size="19px">
                      Contato <IoLogoWhatsapp style={{ marginRight: '8px', color: '#FFF' }} />
                    </TextDefault>
                  </LinkMenu>

                  <LinkMenu href="#acess">
                    <TextDefault weight={'bold'} color="#FFFFFF" size="17px">
                      Meu acesso <HiLockClosed size={'19px'} style={{ marginRight: '8px', color: '#FFF' }} />
                    </TextDefault>
                  </LinkMenu>

                </nav>
              </Box>
            </Drawer>

          </>
        )}
      </HeaderWrapper>

      <WelcomeTextWrapper>

        <TextDefault bottom={'20px'} right={'10px'} color="#FFFFFF" size={isMobile ? '27px' : '35px'} left={"30px"} weight={'bold'}><IoShieldCheckmark size="25px" /> Preencha o formulário abaixo e fale com o especialista agora!</TextDefault>
        <TextDefault bottom={'30px'} right={'10px'} color="#FFFFFF" size={isMobile ? '19px' : '24px'} left="30px">• Recebeu uma multa e quer recorrer?</TextDefault>

        <Box direction={'column'} width={areaDesktop ? '600px' : '80%'} justify={'center'} align={'flex-start'}>


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
          <InputField
            type="tel"
            name="phone"
            placeholder="Seu telefone/WhatsApp"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <SelectField
            name="option"
            value={formData.option}
            onChange={handleChange}
            required
          >
            <option value="">Selecione uma opção</option>
            <option value="sem_cnh">Fui pego sem CNH</option>
            <option value="lei_seca">Fui pego na Lei Seca</option>
            <option value="sinal_vermelho">Avancei o sinal vermelho</option>
            <option value="sinal_vermelho">Ultrapassei na contra mão em faixa continua</option>
            <option value="sinal_vermelho">Conduzir veículo não registrado</option>
            <option value="sinal_vermelho">Excesso de velocidade</option>
            <option value="sinal_vermelho">Ultilizei p telefone celular ao dirigir</option>
            <option value="sinal_vermelho">Sou permissionário</option>
            <option value="sinal_vermelho">Estou prestes a perder minha CNH</option>
            <option value="sinal_vermelho">Outros</option>
          </SelectField>

          <SubmitButton type="submit">Recorrer agora mesmo</SubmitButton>

          <TextDefault top={'30px'} right={'10px'} color="#FFFFFF" size={'13px'} left="30px">• Prometemos não ultilizar suas informações de contato para enviar qualquer tipo de SPAM.</TextDefault>
        </Box>

        
          

      </WelcomeTextWrapper>

      {areaDesktop &&
        <WelcomeTextWrapperLogo>
          <LogoImgAnemated width={'400px'} right={'30px'} src={LogoImage} alt="Logo da Fleet Solutions" />
        </WelcomeTextWrapperLogo>
      }

      {/* Seção de Serviços */}
      <ServicesSection id="services">
        <LogoImgWhite src={LogoImagee} alt="Logo da Fleet Solutions" />

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          id="services"
        >
          {/** Aguarda 3 segundos antes de iniciar o efeito de digitação */}
          {showTypewriter && (
            <Typewriter
              words={['Como podemos te ajudar?']}
              loop={3}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={5000}
              onInit={(typewriter) => {
                typewriter.start();
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

        <TextDefault right={'10px'} bottom={'20px'} color="#FFFFFF" size={isMobile ? '27px' : '35px'} left={"30px"} weight={'bold'}>Gestão de Frotas e Soluções para Motoristas</TextDefault>
        <TextDefault right={'10px'} bottom={'10px'} color="#FFFFFF" size={isMobile ? '19px' : '24px'} left="30px">• Gestão de Multas, Controle do veículo, Gestão do motorista como controle de ponto, tempo ao volante e mais!</TextDefault>
        <TextDefault right={'10px'} bottom={'20px'} color="#FFFFFF" size={isMobile ? '19px' : '24px'} left="30px">• Tenha um relatório completo na palma da sua mão.</TextDefault>

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

        <Box direction={areaDesktop ? 'row' : 'column'} >

          <Box direction={'column'} justify={'center'} align={'center'}>
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
          </Box>

          <Box direction={'column'} justify={'center'} align={'center'}>
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Para quem é a Fleet Solutions?
            </motion.h1>

            <PraQuemImg src={PraQuem} />
          </Box>

        </Box>

      </FleetSection>


      <ServicesSectionImg id="contact">

        <TextDefault bottom={'20px'} right={'10px'} color="#FFFFFF" size={isMobile ? '27px' : '35px'} left={"30px"} weight={'bold'}><IoShieldCheckmark size="25px" /> Preencha o formulário abaixo e fale com o especialista agora!</TextDefault>
        <TextDefault bottom={'30px'} right={'10px'} color="#FFFFFF" size={isMobile ? '19px' : '24px'} left="30px">• Recebeu uma multa e quer recorrer?</TextDefault>

        <Box direction={'column'} width={areaDesktop ? '600px' : '80%'} justify={'center'} align={'flex-start'}>


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
          <InputField
            type="tel"
            name="phone"
            placeholder="Seu telefone/WhatsApp"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <SelectField
            name="option"
            value={formData.option}
            onChange={handleChange}
            required
          >
            <option value="">Selecione uma opção</option>
            <option value="sem_cnh">Fui pego sem CNH</option>
            <option value="lei_seca">Fui pego na Lei Seca</option>
            <option value="sinal_vermelho">Avancei o sinal vermelho</option>
            <option value="sinal_vermelho">Ultrapassei na contra mão em faixa continua</option>
            <option value="sinal_vermelho">Conduzir veículo não registrado</option>
            <option value="sinal_vermelho">Excesso de velocidade</option>
            <option value="sinal_vermelho">Ultilizei p telefone celular ao dirigir</option>
            <option value="sinal_vermelho">Sou permissionário</option>
            <option value="sinal_vermelho">Estou prestes a perder minha CNH</option>
            <option value="sinal_vermelho">Outros</option>
          </SelectField>

          <SubmitButton type="submit">Recorrer agora mesmo</SubmitButton>

          <TextDefault top={'30px'} right={'10px'} color="#FFFFFF" size={'13px'} left="30px">• Prometemos não ultilizar suas informações de contato para enviar qualquer tipo de SPAM.</TextDefault>
        </Box>




      </ServicesSectionImg>

      {/* Footer */}
      <Footer >

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
