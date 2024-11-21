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
import FoiMultado from './img/foiMultado.jpg';
import ImgEmpresas from './img/empresas.jpg';
import ImgMotoristas from './img/motoristas.jpg';
import ImgFrotas from './img/frotass.png';
import Ns from './img/nsTwo.png';
import One from './img/1.png';
import Two from './img/2.png';
import Three from './img/3.png';
import Four from './img/4.png';
import Five from './img/5.png';
import Six from './img/6.png';

// Ícones do layout
import { FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import { HiHome } from "react-icons/hi";
import { MdDesignServices } from "react-icons/md";
import { MdAssuredWorkload } from "react-icons/md";
import { Drawer } from '@mui/material';
import { IoLogoWhatsapp } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";
// Efeito de animação
import { motion } from 'framer-motion';
import {
  Container,
  Box,
  TextDefault,
  SubmitButtonTwo,
  Whats,
  NavBar,
  HeaderWrapper,
  WelcomeTextWrapper,
  WelcomeTextWrapperLogo,
  WelcomeTextWrapperLogoTwo,
  BackgroundImage,
  LogoImg,
  HeroSection,
  Footer,
  FleetSection,
  InputField,
  SelectField,
  SubmitButton,
  LinkMenu,
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

  const isMobile = useMediaQuery({ maxWidth: 968 });
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [logoFooter, setLogoFooter] = useState(false);

  const [areaDesktop, setAreaDesktop] = useState(false);
  const [areaMobile, setAreaMobile] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const actionHelloWhatsApp = () => {
    const phoneNumber = '+5532998195571';
    const message = 'Olá, gostaria de solicitar um atendimento.';
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  const actionHelloWhatsAppAssunt = (buttonText) => {
    const phoneNumber = '+5532998195571';
    const message = `Olá, gostaria de solicitar um atendimento sobre: ${buttonText}.`;
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

    emailjs.send('service_nj5pqhb', 'template_cf31bq9', {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      option: formData.option,
    }, 'jbHWT76pHcmHCdC1s')
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
      <BackgroundImage
        id="home"
        loading="lazy"
        height={
          areaDesktop
            ? '100vh'  // Para desktop, sempre 100vh
            : window.matchMedia("(orientation: landscape)").matches
              ? '140vh' // Para dispositivos móveis na horizontal
              : '100vh' // Para dispositivos móveis na vertical
        }
      />

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
              <FaBars size={35} style={{ color: '#f26b2b' }} />
            </motion.div>

            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer}
              PaperProps={{
                style: { width: '60%', padding: '10px', backgroundColor: '#f26b2b' },
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
                    <TextDefault color="#FFFFFF" size="19px" align={'right'}>
                      Início <HiHome style={{ marginRight: '8px', color: '#FFF' }} />
                    </TextDefault>
                  </LinkMenu>

                  <LinkMenu href="#services">
                    <TextDefault color="#FFFFFF" size="19px" align={'right'}>
                      Serviços <MdDesignServices style={{ marginRight: '8px', color: '#FFF' }} />
                    </TextDefault>
                  </LinkMenu>

                  <LinkMenu href="#fleet">
                    <TextDefault color="#FFFFFF" size="19px" align={'right'}>
                      Fleet Solutions <MdAssuredWorkload style={{ marginRight: '8px', color: '#FFF' }} />
                    </TextDefault>
                  </LinkMenu>

                  <LinkMenu onClick={() => actionHelloWhatsApp()}>
                    <TextDefault color="#FFFFFF" size="19px" align={'right'}>
                      Contato <IoLogoWhatsapp style={{ marginRight: '8px', color: '#FFF' }} />
                    </TextDefault>
                  </LinkMenu>

                </nav>
              </Box>
            </Drawer>

          </>
        )}
      </HeaderWrapper>

      <WelcomeTextWrapper width={areaDesktop ? '70%' : '85%'}>

        <Box direction={'column'} width={areaDesktop ? '90%' : '100%'} justify={'center'} align={'flex-start'}>
          <TextDefault family={'Nebula'} bottom={'10px'} right={'10px'} color="#000" size={isMobile ? '21px' : '33px'} left="30px">Precisando de assistência especializada?</TextDefault>
          <TextDefault weight={'normal'} family={'Octosquares Extra Light'} bottom={'20px'} right={'10px'} color="#000" size={isMobile ? '14px' : '17px'} left={"30px"}>PREENCHA O FORMULÁRIO ABAIXO E FALE COM O ESPECIALISTA AGORA!</TextDefault>
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

          <TextDefault family={'Octosquares Italic'} bottom={'10px'} color="#f5f5f5" size={isMobile ? '14px' : '19px'} left={"27px"}>Como podemos te ajudar?</TextDefault>

          <SelectField
            name="option"
            value={formData.option}
            onChange={handleChange}
            width={isMobile ? '76%' : '72%'}
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

          <SubmitButton left={'30px'} width={areaDesktop ? '400px' : '75%'} onClick={(e) => sendEmail(e)}>
            <TextDefault align={'center'} family={'Octosquares Italic'} color="#f5f5f5" size={isMobile ? '15px' : '15px'}>FALAR COM UM ESPECIALISTA</TextDefault>
          </SubmitButton>

        </Box>

      </WelcomeTextWrapper>

      {areaDesktop &&
        <WelcomeTextWrapperLogo>
          <LogoImg src={LogoImage} width={'400px'} />
        </WelcomeTextWrapperLogo>
      }



      <Box color={'#f5f5f5'} flex={'1'} height={areaDesktop ? '100vh' : 'auto'} direction={'column'} width={'100%'} justify={'flex-start'} align={'flex-start'} >

        <Box flex={'none'} direction={'column'} width={'100%'} justify={'flex-start'} align={'flex-start'} topSpace={'50px'} bottomSpace={'50px'}>
          <Box flex={'none'} direction={'column'} width={areaDesktop ? '70%' : '100%'} height={'100px'} style={{ background: 'linear-gradient(to right, #000, #f5f5f5)' }} justify={'center'} align={'flex-start'}>
            <TextDefault family={'Octosquares Bold'} right={'20px'} align={'right'} bottom={'30px'} top={'30px'} left={areaDesktop ? '85px' : '30px'} color="#f5f5f5" size={isMobile ? '22px' : '45px'}>FOI MULTADO? </TextDefault>
          </Box>
        </Box>

        <Box flex={'1'} direction={'row'} width={'100%'} justify={'space-around'} align={'flex-start'}>

          <Box direction={'column'} justify={'center'} align={'center'} flex={areaDesktop ? '0.8' : '0.9'}>
            <TextDefault family={'Caviar Dreams'} align={'justify'} color="#000" size={'21px'}>
              Não se preocupe! Na Fleet Solutions, oferecemos o suporte ideal
              para enfrentar esses desafios de forma eficiente e estratégica.
              Nossa equipe é especializada em desenvolver recursos
              totalmente personalizados para cada etapa do processo,
              assegurando que cada detalhe seja cuidadosamente considerado
              para alcançar a melhor solução.
            </TextDefault>

            <TextDefault family={'Octosquares Italic'} weight={'bold'} align={'center'} top={'100px'} bottom={'0px'} color="#000" size={isMobile ? '19px' : '29px'}>
              NÃO CORRA O RISCO DE PERDER SUA CNH,
            </TextDefault>

            <TextDefault family={'Octosquares Italic'} weight={'bold'} align={'center'} top={'0px'} bottom={'30px'} color="#000" size={isMobile ? '19px' : '29px'}>
              SAIBA SEUS DIREITOS!
            </TextDefault>

            <Box flex={'1'} width={'100%'} direction={'column'} justify={'center'} align={'center'}>
              <SubmitButton width={areaDesktop ? '400px' : '70%'} onClick={actionHelloWhatsApp} >QUERO FALAR COM UM ESPECIALISTA</SubmitButton>
            </Box>

          </Box>

          {areaDesktop &&
            <Box flex={'none'} width={'40%'} direction={'column'} justify={'center'} align={'center'} bottomSpace={'50px'}>
              <LogoImg src={FoiMultado} width={'100%'} />
            </Box>
          }

        </Box>

      </Box>



      <Box height={areaDesktop ? '100vh' : 'auto'} color={'#f5f5f5'} flex={'1'} direction={'column'} width={'100%'} justify={'flex-start'} align={'flex-start'} >

        <Box flex={'none'} direction={'column'} width={'100%'} justify={'flex-start'} align={'flex-end'} topSpace={'30px'} bottomSpace={'50px'}>
          <Box flex={'none'} direction={'column'} width={areaDesktop ? '70%' : '100%'} height={'100px'} style={{ background: 'linear-gradient(to right, #f5f5f5, #000)' }} justify={'center'} align={'flex-end'}>
            <TextDefault family={'Octosquares Bold'} right={areaDesktop ? '85px' : '30px'} align={'right'} bottom={'30px'} top={'30px'} left={'30px'} color="#f5f5f5" size={isMobile ? '22px' : '45px'}>EVITE PERDER DINHEIRO.</TextDefault>
          </Box>
        </Box>

        <Box flex={'1'} direction={'row'} width={'100%'} justify={'space-around'} align={'flex-start'}>

          {areaDesktop &&
            <Box flex={'none'} width={'40%'} direction={'column'} justify={'center'} align={'center'} bottomSpace={'50px'}>
              <LogoImg src={ImgFrotas} width={'100%'} />
            </Box>
          }

          <Box direction={'column'} justify={'center'} align={'center'} flex={areaDesktop ? '0.8' : '0.9'}>
            <TextDefault family={'Caviar Dreams'} align={'justify'} color="#000" size={'21px'}>
              Na Fleet Solutions, ajudamos sua empresa a economizar de forma
              inteligente.
              <p>
                Nossa gestão personalizada de frotas e motoristas é projetada
                para reduzir multas, otimizar processos e garantir a segurança no
                trânsito, evitando prejuízos com infrações e acidentes. Além
                disso, cuidamos da imagem da sua empresa nas ruas, buscando
                que seus motoristas atuem com responsabilidade e
                profissionalismo.
              </p>
            </TextDefault>

            <TextDefault family={'Octosquares Italic'} weight={'bold'} align={'center'} top={'70px'} bottom={'30px'} color="#000" size={isMobile ? '19px' : '29px'}>
              ECONOMIZE E PROTEJA SUA EMPRESA AGORA!
            </TextDefault>

            <SubmitButton width={areaDesktop ? '400px' : '70%'} onClick={actionHelloWhatsApp} >FALAR COM UM ESPECIALISTA EM FROTAS</SubmitButton>
          </Box>

        </Box>

      </Box>



      <Box topSpace={'50px'} bottomSpace={'50px'} flex={'none'} direction={'column'} width={'100%'} height={'130px'} style={{ background: 'linear-gradient(to right, #F26B2B, #EEBE2C)' }} justify={'center'} align={'center'}>
        <TextDefault family={'Octosquares Bold'} align={'center'} bottom={'30px'} top={'30px'} color="#f5f5f5" size={isMobile ? '22px' : '45px'}>COMO PODEMOS TE AJUDAR?</TextDefault>
      </Box>

      <Box
        color={'#f5f5f5'}
        flex={'none'}
        direction={areaDesktop ? 'row' : 'column'}
        width={'100%'}
        height={areaDesktop ? '100vh' : 'auto'}
        justify={areaDesktop ? 'space-around' : 'center'}
        align={'center'}
      >

        <Box
          flex={'none'}
          width={areaDesktop ? '40%' : '90%'}
          direction={'column'}
          justify={'flex-start'}
          align={'center'}
        >
          <LogoImg
            src={ImgMotoristas}
            width={'100%'}
            maxWidth={'350px'}
          />

          <TextDefault
            family={'Caviar Dreams'}
            weight={'normal'}
            align={'justify'}
            bottom={'30px'}
            color="#000"
            size={'21px'}
          >
            Nossa atuação para motoristas é detalhada e estratégica. Analisamos cada infração de forma
            individual, desenvolvendo defesas totalmente personalizadas - sem utilizar modelos prontos.
            Buscamos a melhor estratégia de defesa, oferecendo suporte completo para que você
            possa enfrentar e resolver questões complexas no trânsito, mantendo seus direitos e sua
            tranquilidade.
          </TextDefault>
        </Box>

        <Box
          flex={'none'}
          width={areaDesktop ? '40%' : '90%'}
          direction={'column'}
          justify={'center'}
          align={'center'}
        >
          <LogoImg
            src={ImgEmpresas}
            width={'100%'}
            maxWidth={'350px'}
          />

          <TextDefault
            family={'Caviar Dreams'}
            weight={'normal'}
            align={'justify'}
            bottom={'30px'}
            color="#000"
            size={'21px'}
          >
            Na Fleet Solutions, oferecemos soluções completas e personalizadas para empresas, como o monitoramento inteligente
            de placas, controle e gestão de multas e motoristas. Adaptamos nossos serviços para atender a qualquer demanda
            com eficiência, garantindo segurança e econômica. Nosso foco é otimizar processos, reduzir custos e fortalecer a reputação
            da sua empresa nas ruas.
          </TextDefault>
        </Box>

      </Box>



      <FleetSection id="services" height={areaDesktop ? '100vh' : 'auto'}>
        <Box direction={areaDesktop ? 'row' : 'column'} justify={'center'} align={areaDesktop ? 'flex-start' : 'center'} width={'100%'}>


          <Box flex={'none'} width={areaDesktop ? '55%' : '100%'} direction={'column'} justify={'flex-start'} align={areaDesktop ? 'center' : 'center'} bottomSpace={'50px'}>

            <Box topSpace={'5px'} flex={'none'} direction={'column'} width={areaDesktop ? '100%' : '100%'} height={'130px'} style={{ background: 'linear-gradient(to right, #F26B2B, #EEBE2C)' }} justify={'center'} align={'center'}>
              <TextDefault family={'Octosquares Bold'} align={'center'} bottom={'30px'} top={'30px'} color="#f5f5f5" size={isMobile ? '22px' : '45px'}>NOSSOS SERVIÇOS</TextDefault>
            </Box>

            <Box flex={'none'} width={areaDesktop ? '80%' : '100%'} direction={'column'} justify={'center'} align={'center'}>
              <TextDefault family={'Caviar Dreams'} align={'center'} top={'30px'} color="#000" size={'21px'}>
                Os serviços da nossa equipe são especializados e personalizados para o seu caso.
                Confira alguns dos serviços que disponibilizamos para assegurar o seu direito de
                dirigir e preservar o seu patrimônio.
              </TextDefault>

              <LogoImg top={'30px'} width={areaDesktop ? '65%' : '85%'} src={Ns} alt="Logo da Fleet Solutions" />

            </Box>
          </Box>


          <Box flex={'none'} width={areaDesktop ? '45%' : '100%'} left={'85px'} direction={'column'} justify={'center'} align={areaDesktop ? 'center' : 'center'}>

            <SubmitButtonTwo width={'90%'} height={areaDesktop ? '60px' : '85px'} onClick={(e) => actionHelloWhatsAppAssunt(e.target.innerText)}>
              MULTAS DE TRÂNSITO EM GERAL
            </SubmitButtonTwo>

            <Box flex={'none'} width={'91.5%'} direction={'row'} justify={'center'} align={'center'}>
              <SubmitButtonTwo height={areaDesktop ? '60px' : '85px'} onClick={(e) => actionHelloWhatsAppAssunt(e.target.innerText)}>
                DEFESA / RECURSOS DO BAFÔMETRO / LEI SECA
              </SubmitButtonTwo>

              <SubmitButtonTwo height={areaDesktop ? '60px' : '85px'} onClick={(e) => actionHelloWhatsAppAssunt(e.target.innerText)}>
                EXCESSO DE VELOCIDADE ACIMA DE 50%
              </SubmitButtonTwo>
            </Box>

            <SubmitButtonTwo width={'90%'} height={areaDesktop ? '60px' : '85px'} onClick={(e) => actionHelloWhatsAppAssunt(e.target.innerText)}>
              EXCESSO DE PONTOS NA CNH
            </SubmitButtonTwo>

            <Box flex={'none'} width={'91.5%'} direction={'row'}>
              <SubmitButtonTwo height={areaDesktop ? '60px' : '85px'} onClick={(e) => actionHelloWhatsAppAssunt(e.target.innerText)}>
                SUSPENSÃO DO DIREITO DE DIRIGIR
              </SubmitButtonTwo>

              <SubmitButtonTwo height={areaDesktop ? '60px' : '85px'} onClick={(e) => actionHelloWhatsAppAssunt(e.target.innerText)}>
                CASSAÇÃO DE CNH
              </SubmitButtonTwo>
            </Box>

            <SubmitButtonTwo width={'90%'} height={areaDesktop ? '60px' : '85px'} onClick={(e) => actionHelloWhatsAppAssunt(e.target.innerText)}>
              MULTA POR NÃO INDICAR CONDUTOR (NIC)
            </SubmitButtonTwo>

            <SubmitButtonTwo width={'90%'} height={areaDesktop ? '60px' : '85px'} onClick={(e) => actionHelloWhatsAppAssunt(e.target.innerText)}>
              ULTRAPASSAGEM EM FAIXA CONTÍNUA AMARELA
            </SubmitButtonTwo>

            <Box flex={'none'} width={'91.5%'} direction={'row'}>
              <SubmitButtonTwo height={areaDesktop ? '60px' : '85px'} onClick={(e) => actionHelloWhatsAppAssunt(e.target.innerText)}>
                CONSULTORIA PREVENTIVA E PERSONALIZADA PARA VOCÊ
              </SubmitButtonTwo>


              <SubmitButtonTwo width={'90%'} height={areaDesktop ? '60px' : '85px'} onClick={(e) => actionHelloWhatsAppAssunt(e.target.innerText)}>
                GESTÃO INTELIGENTE E PERSONALIZADA DE FROTAS
              </SubmitButtonTwo>
            </Box>

            <SubmitButtonTwo width={'90%'} height={areaDesktop ? '60px' : '85px'} onClick={(e) => actionHelloWhatsAppAssunt(e.target.innerText)}>
              SOLUÇÕES PARA EMPRESAS
            </SubmitButtonTwo>

          </Box>

        </Box>
      </FleetSection>

      <HeroSection height={areaDesktop ? '100vh' : 'auto'} id="fleet">
        <TextDefault align={'center'} right={'30px'} left={'30px'} top={'70px'} color="#f5f5f5" size={isMobile ? '22px' : '45px'}>POR QUE A FLEET SOLUTIONS É A SUA PARCEIRA IDEAL?</TextDefault>

        <Box flex={'none'} width={'100%'} direction={areaDesktop ? 'row' : 'column'} justify={areaDesktop ? 'space-around' : 'center'} align={'center'}>

          <Box flex={'1'} width={areaDesktop ? '50%' : '100%'} direction={'column'} justify={'space-around'} align={'center'}>
            <LogoImg src={One} width={'90%'} />
            <LogoImg src={Two} width={'90%'} />
            <LogoImg src={Three} width={'90%'} />
          </Box>

          <Box flex={'1'} width={areaDesktop ? '50%' : '100%'} direction={'column'} justify={'space-around'} align={'center'}>
            <LogoImg src={Four} width={'90%'} />
            <LogoImg src={Five} width={'90%'} />
            <LogoImg src={Six} width={'90%'} />
          </Box>

        </Box>

      </HeroSection>

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

        <TextDefault align={'center'} top={'5px'} color="#FFFFFF" size="13px" >© 2024 Fleet Solutions. Todos os direitos reservados.</TextDefault>
      </Footer>
    </Container>
  );
};

export default App;


// email: 
// senha: 
