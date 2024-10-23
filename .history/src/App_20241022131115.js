import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import InputMask from 'react-input-mask';
import emailjs from 'emailjs-com'; // Importa a biblioteca EmailJS
import Swal from 'sweetalert2';
//logomarca
import LogoImage from './img/logo.png';
import LogoMarca from './img/logomarca.png';
import LogoName from './img/logomarcaName.png';
import LogoImagee from './img/logoo.png';
import WhatsImg from './img/whatsapp.png';
// Ícones do layout
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { IoShieldCheckmark } from "react-icons/io5";
import { MdOutlineContactMail } from "react-icons/md";
import { RiProhibited2Fill } from "react-icons/ri";
import { FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import { HiHome } from "react-icons/hi";
import { MdDesignServices } from "react-icons/md";
import { MdAssuredWorkload } from "react-icons/md";
import { Drawer } from '@mui/material';
import { IoLogoWhatsapp } from "react-icons/io";
import { MdAddBusiness } from "react-icons/md";
import { BiLogoGmail } from "react-icons/bi";
// Efeito de animação
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import {
  Container,
  Box,
  TextDefault,
  Whats,
  Header,
  NavBar,
  HeaderWrapper,
  WelcomeTextWrapper,
  WelcomeTextWrapperLogo,
  WelcomeTextWrapperLogoTwo,
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

  const actionHelloWhatsApp = () => {
    const phoneNumber = '+5532998195571';
    const message = 'Olá, gostaria de solicitar um atendimento.';
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  const sendEmail = (e) => {
    e.preventDefault(); // Evita o envio padrão do formulário

    const { name, email, phone, option } = formData;

    // Verifica se todos os campos estão preenchidos
    if (!name || !email || !phone || option === 'vazio') {
      Swal.fire({
        icon: 'warning',
        title: 'Campos obrigatórios',
        text: 'Por favor, preencha todos os campos antes de enviar.',
      });
      return;
    }

    emailjs.send('service_vzwwf1r', 'template_u4v0g9j', {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      option: formData.option,
    }, 'REhxUt4Tlu2XQu8WT')
      .then((response) => {
        console.log('Solicitação enviada com sucesso! Entraremos em contato em breve.', response.status, response.text);

        // Exibe uma mensagem de sucesso usando SweetAlert2
        Swal.fire({
          icon: 'success',
          title: 'Sucesso!',
          text: 'Solicitação enviada com sucesso!',
        });

        // Limpa os campos do formulário
        setFormData({
          name: '',
          email: '',
          phone: '',
          option: 'vazio',
        });
      })
      .catch((error) => {
        console.error('Falha ao enviar solicitação:', error);

        // Exibe uma mensagem de erro usando SweetAlert2
        Swal.fire({
          icon: 'error',
          title: 'Erro',
          text: 'Erro ao enviar o solicitação. Tente novamente mais tarde.',
        });
      });
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
      <BackgroundImage id="home" height={areaDesktop ? '120vh' : '100vh'} />

      <Whats onClick={actionHelloWhatsApp}>
        <LogoImg left={'30px'} src={WhatsImg} alt="WhatsApp" />
      </Whats>

      {/* Header fixo */}
      <HeaderWrapper scrolled={scrolled} >
        <LogoImg width={areaDesktop ? '300px' : '230px'} left={'30px'} src={LogoMarca} alt="Logo da Fleet Solutions" />

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
            <a href="#contact" onClick={() => actionHelloWhatsApp()} style={{ display: 'flex', alignItems: 'center' }}>
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

                  <LinkMenu onClick={() => actionHelloWhatsApp()}>
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

      <WelcomeTextWrapper width={areaDesktop ? '50%' : '85%'}>

        <Box direction={'column'} width={areaDesktop ? '90%' : '100%'} justify={'center'} align={'flex-start'}>
          <TextDefault bottom={'10px'} right={'10px'} color="#f5f5f5" size={isMobile ? '22px' : '35px'} left="30px">Precisando de assistência especializada?</TextDefault>
          <TextDefault bottom={'30px'} right={'10px'} color="#f5f5f5" size={isMobile ? '14px' : '19px'} left={"30px"}>Preencha o formulário abaixo e fale com o especialista agora!</TextDefault>
        </Box>

        <Box direction={'column'} width={areaDesktop ? '90%' : '100%'} justify={'center'} align={'flex-start'}>

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

          <TextDefault bottom={'20px'} color="#f5f5f5" size={isMobile ? '19px' : '19px'} left={"27px"}>Como podemos te ajudar?</TextDefault>

          <SelectField
            name="option"
            value={formData.option}
            onChange={handleChange}
            required
          >
            <option value="vazio">Selecione uma situação</option>
            <option value="Art. 165 - Dirigir sob a influência de álcool ou drogas (Lei Seca)">Art. 165 - Dirigir sob a influência de álcool ou drogas (Lei Seca)</option>
            <option value="Art. 165-A - Recusar-se a realizar o teste do bafômetro">Art. 165-A - Recusar-se a realizar o teste do bafômetro</option>
            <option value="Art. 175 - Participar de manobras perigosas (arrancadas bruscas ou derrapagens)">Art. 175 - Participar de manobras perigosas (arrancadas bruscas ou derrapagens)</option>
            <option value="Art. 203, V - Ultrapassar pela contramão em local com faixa contínua">Art. 203, V - Ultrapassar pela contramão em local com faixa contínua</option>
            <option value="Art. 208 - Avançar o sinal vermelho do semáforo">Art. 208 - Avançar o sinal vermelho do semáforo</option>
            <option value="Art. 218, III - Exceder a velocidade em mais de 50% do limite permitido">Art. 218, III - Exceder a velocidade em mais de 50% do limite permitido</option>
            <option value="Art. 230, V - Conduzir veículo sem registro ou licenciamento">Art. 230, V - Conduzir veículo sem registro ou licenciamento</option>
            <option value="Art. 252, VI - Utilizar celular durante a condução do veículo">Art. 252, VI - Utilizar celular durante a condução do veículo</option>
            <option value="Art. 244, I - Conduzir motocicleta sem capacete">Art. 244, I - Conduzir motocicleta sem capacete</option>
            <option value="Art. 261 - Acumular pontuação para suspensão da CNH ">Art. 261 - Acumular pontuação para suspensão da CNH</option>
            <option value="Art. 148, §3º - Cometer infração com Permissão para Dirigir (PPD)">Art. 148, §3º - Cometer infração com Permissão para Dirigir (PPD)</option>
            <option value="outros">Outros</option>
          </SelectField>

          <SubmitButton onClick={(e) => sendEmail(e)}>
            <TextDefault color="#f5f5f5" size={isMobile ? '19px' : '19px'}>Falar com um especialista</TextDefault>
          </SubmitButton>

        </Box>

      </WelcomeTextWrapper>

      {areaDesktop &&
        <WelcomeTextWrapperLogo>
          <LogoImg src={LogoImage} width={'400px'} />
        </WelcomeTextWrapperLogo>
      }

      {areaDesktop &&
        <WelcomeTextWrapperLogoTwo>
          <LogoImg src={LogoName} width={'60%'} />
        </WelcomeTextWrapperLogoTwo>
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

              <h3 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <IoShieldCheckmark size="25px" style={{ marginRight: '8px' }} /> Defesa de Multas
              </h3>

              {expandedCard === 1 && ( // Apenas exibe o parágrafo se o card 1 estiver expandido
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }} // Texto aparece após a expansão
                  style={{ fontSize: '19px', fontFamily: 'Century Gothic' }}
                >
                  Assistência integral na contestação de multas
                  <hr />

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

              <h3 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <MdOutlineContactMail size="25px" style={{ marginRight: '8px' }} /> Suspensão de CNH
              </h3>

              {expandedCard === 2 && ( // Apenas exibe o parágrafo se o card 2 estiver expandido
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }} // Texto aparece após a expansão
                  style={{ fontSize: '19px', fontFamily: 'Century Gothic' }}
                >
                  Evite a suspensão da sua CNH com nossas soluções personalizadas para você
                  <hr />
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

              <h3 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <TbDeviceDesktopAnalytics size="27px" style={{ marginRight: '8px' }} />Gestão de Frotas
              </h3>

              {expandedCard === 3 && ( // Apenas exibe o parágrafo se o card 3 estiver expandido
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }} // Texto aparece após a expansão
                  style={{ fontSize: '19px', fontFamily: 'Century Gothic' }}
                >
                  Reduza custos e eleve a segurança com a Fleet Solutions
                  <hr />
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

        <div className="cards" style={{ marginTop: areaDesktop ? '35px' : '0px' }}>

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

              <h3 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <RiProhibited2Fill size="25px" style={{ marginRight: '8px' }} />Cassação de CNH
              </h3>

              {expandedCard === 4 && ( // Apenas exibe o parágrafo se o card 1 estiver expandido
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }} // Texto aparece após a expansão
                  style={{ fontSize: '19px', fontFamily: 'Century Gothic' }}
                >
                  Proteja sua CNH! Contamos com soluções feitas especialmente para atender às suas necessidades
                  <hr />
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
              <h3 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <MdAddBusiness size="25px" style={{ marginRight: '8px' }} />
                Para a sua empresa
              </h3>

              {expandedCard === 5 && ( // Apenas exibe o parágrafo se o card 1 estiver expandido
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }} // Texto aparece após a expansão
                  style={{ fontSize: '19px', fontFamily: 'Century Gothic' }}
                >
                  Descubra nossas soluções personalizadas e veja por que a Fleet Solutions é a parceira ideal para o seu negócio
                  <hr />
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


              <h3 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <TbDeviceDesktopAnalytics size="27px" style={{ marginRight: '8px' }} />Mais informações
              </h3>

              {expandedCard === 6 && ( // Apenas exibe o parágrafo se o card 1 estiver expandido
                <>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }} // Texto aparece após a expansão
                    style={{ fontSize: '19px', fontFamily: 'Century Gothic' }}
                  >
                    Não encontrou o que procurava? Estamos aqui para ajudar! Clique aqui e nos conte suas necessidades
                    <hr />
                    Na Fleet Solutions, entendemos que cada cliente possui necessidades únicas e, por isso,
                    estamos sempre prontos para criar soluções personalizadas. Se não encontrou o serviço
                    específico que procurava, entre em contato conosco. Nossa equipe está à disposição
                    para desenvolver um serviço que atenda exatamente às suas demandas, proporcionando
                    uma experiência totalmente personalizada e eficiente.

                  </motion.p>

                  <SubmitButton onClick={actionHelloWhatsApp} >Solicitar Atendimento</SubmitButton>
                </>
              )}
            </motion.div>
          </ServiceCard>

        </div>
      </ServicesSection>

      <FleetSection id="fleet">

        <LogoImgWhite src={LogoImage} alt="Logo da Fleet Solutions" />

        <Box direction={'column'} justify={'center'} align={'center'} width={'90%'}>
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{ color: '#f5f5f5', marginRight: '17px', marginLeft: '17px', textAlign: 'left', fontFamily: 'Century Gothic' }}
          >
            Quem Somos - Fleet Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{ color: '#f5f5f5', marginRight: '17px', marginLeft: '17px', textAlign: 'left', fontSize: '19px', fontFamily: 'Century Gothic' }}
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
            especializada com uma gestão preventiva eficaz. <hr />
            Essa lacuna deu origem à Fleet Solutions, uma empresa dedicada a
            oferecer muito mais do que serviços jurídicos. Com atendimento
            humanizado e personalizado, entendemos que cada cliente tem suas
            necessidades específicas. Para empresas, oferecemos soluções como
            monitoramento inteligente de placas, controle e gestão de multas e
            de motoristas, adaptando nossos serviços para atender qualquer
            demanda de forma personalizada e eficiente.
            <hr />
            Já para motoristas, nossa atuação é detalhada e estratégica.
            Analisamos cada infração individualmente, desenvolvendo defesas
            personalizadas – nada de modelos prontos. Nosso objetivo é
            garantir a melhor estratégia de defesa possível, ajudando
            motoristas a enfrentar situações complexas no trânsito com
            o apoio que merecem.
            <hr />
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

      </FleetSection>

      {/* Footer */}
      <Footer >

        {logoFooter &&
          <LogoImg src={LogoImagee} alt="Logo da Fleet Solutions" />
        }

        <Box justify={'center'} align={'center'} direction={'column'}>
          <TextDefault top={'5px'} color="#FFFFFF" size="13px" bottom={'5px'}>Fale conosco:</TextDefault>
        </Box>

        <div className="social-icons">

          <LinkMenu href="https://www.instagram.com/_fleet.solutions/" >
            <FaInstagram size={24} /> {/* Ícone do Instagram */}
          </LinkMenu>

          <LinkMenu href="#contact" onClick={() => actionHelloWhatsApp()} >
            <FaWhatsapp size={24} />  {/* Ícone do WhatsApp */}
          </LinkMenu>

          <LinkMenu href="https://www.linkedin.com/company/solutionsfleet/?viewAsMember=true" >
            <FaLinkedin size={24} />  {/* Ícone do LinkedIn */}
          </LinkMenu>

          <LinkMenu href="mailto:contato.fleetsolutions@gmail.com?subject=Atendimento%20personalizado%20Fleet%20Solutions&body=Ol%C3%A1%2C%20informe%20abaixo%20o%20seu%20nome%20completo%2C%20WhatsApp%2C%20e%20o%20problema%20que%20est%C3%A1%20enfrentando%3A%20" >
            <BiLogoGmail size={24} />
          </LinkMenu>

        </div>

        <TextDefault top={'5px'} color="#FFFFFF" size="13px" >© 2024 Fleet Solutions. Todos os direitos reservados.</TextDefault>
      </Footer>
    </Container>
  );
};
export default App;
