import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import InputMask from 'react-input-mask';
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
  const [expandedCard, setExpandedCard] = useState(null);


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

  const toggleCard = (cardId) => {
    // Altera a expansão do card clicado
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const contactWhats = () => {
    alert("deu!");
  }



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

                </nav>
              </Box>
            </Drawer>

          </>
        )}
      </HeaderWrapper>

      <WelcomeTextWrapper>
        <TextDefault bottom={'10px'} right={'10px'} color="#FFFFFF" size={isMobile ? '27px' : '35px'} left="30px"><IoShieldCheckmark size="25px" /> Recebeu uma multa e deseja recorrer?</TextDefault>
        <TextDefault bottom={'20px'} right={'10px'} color="#FFFFFF" size={isMobile ? '19px' : '24px'} left={"30px"} weight={'bold'}>Preencha o formulário abaixo e fale com o especialista agora!</TextDefault>


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
          {/* Input com máscara de telefone/WhatsApp */}
          <InputMask
            mask="(99) 99999-9999"
            value={formData.phone}
            onChange={handleChange}
          >
            {() => (
              <InputField
                type="tel"
                name="phone"
                placeholder="Seu telefone/WhatsApp"
                required
              />
            )}
          </InputMask>
          <SelectField
            name="option"
            value={formData.option}
            onChange={handleChange}
            required
          >
            <option value="">Selecione uma situação</option>
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

          <SubmitButton type="submit">Solicitar Atendimento</SubmitButton>

          <TextDefault top={'30px'} right={'10px'} color="#FFFFFF" size={'13px'} left="30px">• Prometemos não ultilizar suas informações de contato para enviar qualquer tipo de SPAM.</TextDefault>
        </Box>

      </WelcomeTextWrapper>



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
          {/* Card: Defesa de Multas */}
          <ServiceCard
            onClick={() => toggleCard(1)}
            zIndex={expandedCard === 1 ? 10 : 1}
            style={{ overflow: 'hidden', height: expandedCard === 1 ? 'auto' : '70px' }} // Controla altura diretamente
          >
            <motion.div
              transition={{ duration: 0.9 }}
              whileHover={{ scale: expandedCard === 1 ? 1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h3>
                <IoShieldCheckmark size="25px" /> Defesa de Multas
              </h3>

              {expandedCard === 1 && ( // Apenas exibe o parágrafo se o card 1 estiver expandido
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }} // Texto aparece após a expansão
                >
                  Assistência integral na contestação de multas

                  Receber uma multa de trânsito pode ser uma situação desagradável,
                  mas é fundamental lidar com ela da melhor forma possível.
                  Na Fleet Solutions, oferecemos todo o suporte necessário
                  para buscar a anulação da penalidade de forma eficiente e
                  estratégica. Nossa equipe especializada elabora recursos
                  totalmente personalizados em cada fase do processo, desde
                  a Defesa Prévia até os recursos junto à JARI e ao CETRAN,
                  garantindo que cada detalhe seja considerado. Nosso objetivo
                  é assegurar que seus direitos sejam respeitados e que você
                  tenha a melhor chance de evitar penalidades injustas.

                </motion.p>
              )}
            </motion.div>
          </ServiceCard>

          {/* Card: Suspensão de CNH */}
          <ServiceCard
            onClick={() => toggleCard(2)}
            zIndex={expandedCard === 2 ? 10 : 1}
            style={{ overflow: 'hidden', height: expandedCard === 2 ? 'auto' : '70px' }} // Controla altura diretamente
          >
            <motion.div
              transition={{ duration: 0.5 }}
              whileHover={{ scale: expandedCard === 2 ? 1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h3>
                <MdOutlineContactMail size="25px" /> Suspensão de CNH
              </h3>

              {expandedCard === 2 && ( // Apenas exibe o parágrafo se o card 2 estiver expandido
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }} // Texto aparece após a expansão
                >
                  Evite a suspensão da sua CNH com nossas soluções personalizadas para você

                  Quando a suspensão da CNH é iminente devido a infrações ou ao acúmulo de pontos,
                  a Fleet Solutions oferece um serviço completo de defesa. Nossa equipe
                  especializada elabora estratégias personalizadas para apresentar a
                  defesa nos órgãos competentes, analisando cada detalhe da infração.
                  Com soluções técnicas e embasadas, buscamos alternativas eficazes
                  para manter o seu direito de dirigir, evitando ao máximo a
                  penalidade de suspensão.

                </motion.p>
              )}
            </motion.div>
          </ServiceCard>

          {/* Card: Gestão de Frotas */}
          <ServiceCard
            onClick={() => toggleCard(3)}
            zIndex={expandedCard === 3 ? 10 : 1}
            style={{ overflow: 'hidden', height: expandedCard === 3 ? 'auto' : '70px' }} // Controla altura diretamente
          >
            <motion.div
              transition={{ duration: 1 }}
              whileHover={{ scale: expandedCard === 3 ? 1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              

              <h3 style={{ display: 'flex', alignItems: 'center', justifyContent:'center' }}>
                <TbDeviceDesktopAnalytics size="27px" style={{ marginRight: '8px' }} />Gestão de Frotas
              </h3>

              {expandedCard === 3 && ( // Apenas exibe o parágrafo se o card 3 estiver expandido
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }} // Texto aparece após a expansão
                >
                  Reduza custos e eleve a segurança com a Fleet Solutions

                  A gestão de frotas exige atenção cuidadosa à operação e à
                  conformidade com as regras de trânsito. Na Fleet Solutions,
                  ajudamos sua empresa a monitorar multas, documentos e a
                  conformidade legal dos motoristas. Nosso objetivo é reduzir
                  custos operacionais e melhorar a segurança da frota,
                  oferecendo soluções que mantêm seus veículos e motoristas
                  em conformidade, enquanto minimizamos riscos no trânsito.
                  Com nossa abordagem personalizada, sua frota operará de
                  maneira mais eficiente e segura.

                </motion.p>
              )}
            </motion.div>
          </ServiceCard>
        </div>

        <div className="cards" style={{ marginTop: '35px' }}>

          <ServiceCard
            onClick={() => toggleCard(4)}
            zIndex={expandedCard === 4 ? 10 : 1}
            style={{ overflow: 'hidden', height: expandedCard === 4 ? 'auto' : '70px' }} // Controla altura diretamente
          >
            <motion.div
              transition={{ duration: 0.9 }}
              whileHover={{ scale: expandedCard === 1 ? 1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
             

              <h3 style={{ display: 'flex', alignItems: 'center', justifyContent:'center' }}>
                <RiProhibited2Fill size="25px" style={{ marginRight: '8px' }} />Cassação de CNH
              </h3>

              {expandedCard === 4 && ( // Apenas exibe o parágrafo se o card 1 estiver expandido
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }} // Texto aparece após a expansão
                >
                  Proteja sua CNH! Contamos com soluções feitas especialmente para atender às suas necessidades

                  A cassação da CNH é uma das penalidades mais severas previstas pelo Código de Trânsito,
                  mas a Fleet Solutions está aqui para oferecer as melhores defesas disponíveis.
                  Cada caso é tratado de forma detalhada, desde a análise inicial até a apresentação
                  de recursos nos órgãos competentes. Nosso compromisso é fornecer uma defesa sólida
                  e técnica, respeitando todos os prazos e buscando preservar o seu direito de dirigir,
                  sem promessas irreais de tempo de resolução.
                </motion.p>
              )}
            </motion.div>
          </ServiceCard>


          <ServiceCard
            onClick={() => toggleCard(5)}
            zIndex={expandedCard === 5 ? 10 : 1}
            style={{ overflow: 'hidden', height: expandedCard === 5 ? 'auto' : '70px' }} // Controla altura diretamente
          >
            <motion.div
              transition={{ duration: 0.9 }}
              whileHover={{ scale: expandedCard === 1 ? 1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h3 style={{ display: 'flex', alignItems: 'center', justifyContent:'center' }}>
                <MdAddBusiness size="25px" style={{ marginRight: '8px' }} />
                Soluções Personalizadas para Empresas
              </h3>

              {expandedCard === 5 && ( // Apenas exibe o parágrafo se o card 1 estiver expandido
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }} // Texto aparece após a expansão
                >
                  Descubra nossas soluções personalizadas e veja por que a Fleet Solutions é a parceira ideal para o seu negócio

                  Cada empresa tem necessidades distintas quando se trata de trânsito, e na Fleet Solutions,
                  compreendemos essas especificidades. Desenvolvemos soluções sob medida para atender às suas
                  demandas, seja no controle de multas, gestão de motoristas ou monitoramento de veículos.
                  Atuamos como um verdadeiro parceiro estratégico, ajudando a otimizar os processos e a
                  garantir que sua operação no trânsito seja eficiente, segura e econômica.

                </motion.p>
              )}
            </motion.div>
          </ServiceCard>


          <ServiceCard
            onClick={() => toggleCard(6)}
            zIndex={expandedCard === 6 ? 10 : 1}
            style={{ overflow: 'hidden', height: expandedCard === 6 ? 'auto' : '70px' }} // Controla altura diretamente
          >
            <motion.div
              transition={{ duration: 0.9 }}
              whileHover={{ scale: expandedCard === 1 ? 1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
            >


              <h3 style={{ display: 'flex', alignItems: 'center', justifyContent:'center' }}>
                <TbDeviceDesktopAnalytics size="27px" style={{ marginRight: '8px' }} />Mais informações
              </h3>

              {expandedCard === 6 && ( // Apenas exibe o parágrafo se o card 1 estiver expandido
                <>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }} // Texto aparece após a expansão
                  >
                    Não encontrou o que procurava? Estamos aqui para ajudar! Clique aqui e nos conte suas necessidades

                    Na Fleet Solutions, entendemos que cada cliente possui necessidades únicas e, por isso,
                    estamos sempre prontos para criar soluções personalizadas. Se não encontrou o serviço
                    específico que procurava, entre em contato conosco. Nossa equipe está à disposição
                    para desenvolver um serviço que atenda exatamente às suas demandas, proporcionando
                    uma experiência totalmente personalizada e eficiente.

                  </motion.p>

                  <SubmitButton onClick={contactWhats} >Solicitar Atendimento</SubmitButton>
                </>
              )}
            </motion.div>
          </ServiceCard>

        </div>
      </ServicesSection>





      <FleetSection id="fleet">

        <LogoImgWhite src={LogoImage} alt="Logo da Fleet Solutions" />

        <Box direction={areaDesktop ? 'row' : 'column'} >

          <Box direction={'column'} justify={'flex-start'} align={'center'} leftSpace={'30px'}>
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Quem Somos - Fleet Solutions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              style={{ marginRight: '17px', fontSize: '19px', fontFamily: 'Century Gothic' }}
            >
              Na Fleet Solutions, somos mais do que especialistas em direito de trânsito –
              somos parceiros estratégicos para motoristas e empresas que enfrentam os
              desafios diários do trânsito urbano e rodoviário. Nossa expertise vai desde
              a defesa de multas, cassação e suspensão de CNH, até soluções avançadas e
              personalizadas para a gestão de frotas e motoristas, com foco na redução
              de custos e aumento da segurança. Nossa história começou com a visão de um
              advogado que, durante a graduação, adquiriu sólida experiência em grandes
              transportadoras. A imersão no cotidiano do setor de transporte e logística
              permitiu que ele enxergasse de perto os gargalos enfrentados por empresas
              e motoristas. Foi então que ele identificou uma carência no mercado: a
              necessidade de soluções completas que combinassem consultoria jurídica
              especializada com uma gestão preventiva eficaz.
              Essa lacuna deu origem à Fleet Solutions, uma empresa dedicada a
              oferecer muito mais do que serviços jurídicos. Com atendimento
              humanizado e personalizado, entendemos que cada cliente tem suas
              necessidades específicas. Para empresas, oferecemos soluções como
              monitoramento inteligente de placas, controle e gestão de multas e
              de motoristas, adaptando nossos serviços para atender qualquer
              demanda de forma personalizada e eficiente.
              Já para motoristas, nossa atuação é detalhada e estratégica.
              Analisamos cada infração individualmente, desenvolvendo defesas
              personalizadas – nada de modelos prontos. Nosso objetivo é
              garantir a melhor estratégia de defesa possível, ajudando
              motoristas a enfrentar situações complexas no trânsito com
              o apoio que merecem.
              Na Fleet Solutions, nosso compromisso é superar as expectativas.
              Seja prevenindo infrações, reduzindo custos operacionais ou
              elaborando defesas técnicas, nossa equipe de especialistas
              está preparada para oferecer o suporte que faz a diferença.
              Permitimos que nossos clientes mantenham o foco em seu
              crescimento, enquanto cuidamos de todos os aspectos relacionados ao trânsito.
              A Fleet Solutions é mais que uma prestadora de serviços.
              Somos parceiros que impulsionam empresas e motoristas a
              prosperar no cenário desafiador do trânsito brasileiro.
              Conte conosco para garantir que seu caminho esteja sempre livre para o sucesso.
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
