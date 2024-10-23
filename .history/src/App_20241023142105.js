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
import Ns from './img/ns.png';
import Pq from './img/pqFleet.png';
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
  ServicesSection,
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
              <FaBars size={35} style={{ color: '#f26b2b' }} />
            </motion.div>

            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer}
              PaperProps={{
                style: { width: '50%', padding: '10px', backgroundColor: '#f26b2b' },
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
          <TextDefault bottom={'10px'} right={'10px'} color="#000" size={isMobile ? '22px' : '35px'} left="30px">Precisando de assistência especializada?</TextDefault>
          <TextDefault bottom={'30px'} right={'10px'} color="#000" size={isMobile ? '14px' : '19px'} left={"30px"}>Preencha o formulário abaixo e fale com o especialista agora!</TextDefault>
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

          <TextDefault bottom={'20px'} color="#000" size={isMobile ? '14px' : '19px'} left={"27px"}>Como podemos te ajudar?</TextDefault>

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

      <ServicesSection>

        <Box flex={'none'} direction={'column'} width={areaDesktop ? '60%' : '100%'} justify={'flex-start'} align={'center'}>

          <Box flex={'none'} direction={'column'} width={'100%'} height={'100px'} style={{ background: 'linear-gradient(to right, #000, #f5f5f5)' }} justify={'center'} align={'flex-start'}>
            <TextDefault bottom={'30px'} top={'30px'} left={'30px'} color="#f5f5f5" size={isMobile ? '22px' : '45px'}>Foi Multado?</TextDefault>
          </Box>

          <TextDefault family={'Century Gothic'} align={'justify'} top={'30px'} left={'35px'} right={'35px'} color="#000" size={isMobile ? '18px' : '21px'}>
            Não se preocupe! Na Fleet Solutions, oferecemos o suporte ideal
            para enfrentar esses desafios de forma eficiente e estratégica.
            Nossa equipe é especializada em desenvolver recursos
            totalmente personalizados para cada etapa do processo,
            assegurando que cada detalhe seja cuidadosamente considerado
            para alcançar a melhor solução possível.
          </TextDefault>

          <TextDefault family={'Arial'} weight={'bold'} align={'center'} top={'100px'} bottom={'30px'} left={'30px'} right={'30px'} color="#000" size={isMobile ? '19px' : '29px'}>
            NÃO CORRA O RISCO DE PERDER SUA CNH,
            SAIBA SEUS DIREITOS!
          </TextDefault>

          <SubmitButton onClick={actionHelloWhatsApp} >Quero falar com um especialista</SubmitButton>
        </Box>


        {areaDesktop &&
          <Box flex={'none'} width={'40%'} direction={'column'} justify={'center'} align={'center'}>
            <LogoImg src={FoiMultado} width={'50%'} />
          </Box>
        }

      </ServicesSection>

      <Box flex={'none'} direction={'column'} width={'100%'} height={'200px'} style={{ background: 'linear-gradient(to right, #eebe2c, #f26b2b)' }} justify={'center'} align={'center'}>
        <TextDefault align={'center'} bottom={'30px'} top={'30px'} left={'30px'} color="#f5f5f5" size={isMobile ? '22px' : '45px'}>Como podemos te ajudar?</TextDefault>
      </Box>

      <Box color={'#f5f5f5'} flex={'none'} direction={areaDesktop ? 'row' : 'column'} width={'100%'} justify={areaDesktop ? 'space-around' : 'center'} align={'center'}>

        <Box flex={'none'} width={areaDesktop ? '40%' : '100%'} direction={'column'} justify={'center'} align={'center'}>
          <LogoImg top={'50px'} src={ImgMotoristas} width={'115%'} />

          <TextDefault family={'Century Gothic'} weight={'normal'} align={'justify'} top={'20px'} bottom={'30px'} left={'30px'} right={'30px'} color="#000" size={'21px'}>
            Nossa atuação para motoristas é detalhada e estratégica. Analisamos cada infração de forma
            individual, desenvolvendo defesas totalmente personalizadas - sem utilizar modelos prontos.
            Buscamos a melhor estratégia de defesa possível, oferecendo suporte completo para que você
            possa enfrentar e resolver questões complexas no trânsito, mantendo seus direitos e sua
            tranquilidade.
          </TextDefault>
        </Box>

        <Box flex={'none'} width={areaDesktop ? '40%' : '100%'} direction={'column'} justify={'center'} align={'center'}>
          <LogoImg top={'50px'} src={ImgEmpresas} width={'115%'} />

          <TextDefault family={'Century Gothic'} weight={'normal'} align={'justify'} top={'17px'} bottom={'30px'} left={'30px'} right={'30px'} color="#000" size={'21px'}>
            Na Fleet Solutions, oferecemos soluções completas e personalizadas para empresas, como o monitoramento inteligente
            de placas, controle e gestão de multas e motoristas. Adaptamos nossos serviços para atender a qualquer demanda
            com eficiência, garantindo segurança e econômia. Nosso foco é otimizar processos, reduzir custos e fortalecer a reputação
            da sua empresa nas ruas.
          </TextDefault>
        </Box>

      </Box>


      <Box color={'#f5f5f5'} flex={'1'} direction={'column'} width={'100%'} justify={'flex-start'} align={'flex-start'} topSpace={'50px'}>

        <Box flex={'none'} direction={'column'} width={'100%'} justify={'flex-start'} align={'flex-end'} topSpace={'30px'} bottomSpace={'50px'}>
          <Box flex={'none'} direction={'column'} width={areaDesktop ? '70%' : '100%'} height={'100px'} style={{ background: 'linear-gradient(to right, #f5f5f5, #000)' }} justify={'center'} align={'flex-end'}>
            <TextDefault right={'20px'} align={'right'} bottom={'30px'} top={'30px'} left={'30px'} color="#f5f5f5" size={isMobile ? '22px' : '45px'}>Evite perder dinheiro.</TextDefault>
          </Box>
        </Box>

        <Box flex={'1'} direction={'row'} width={'100%'} justify={'flex-start'} align={'flex-start'}>

          {areaDesktop &&
            <Box flex={'none'} width={'40%'} direction={'column'} justify={'center'} align={'center'} bottomSpace={'50px'}>
              <LogoImg src={ImgFrotas} width={'100%'} />
            </Box>
          }

          <Box direction={'column'} justify={'center'} align={'center'}>
            <TextDefault family={'Century Gothic'} align={'justify'} top={'30px'} left={'30px'} right={'30px'} color="#000" size={isMobile ? '18px' : '21px'}>
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

            <TextDefault family={'Arial'} weight={'bold'} align={'center'} top={'70px'} bottom={'30px'} left={'30px'} right={'30px'} color="#000" size={isMobile ? '19px' : '29px'}>
              ECONOMIZE E PROTEJA SUA EMPRESA AGORA!
            </TextDefault>

            <SubmitButton onClick={actionHelloWhatsApp} >falar com um especialista em FROTA</SubmitButton>
          </Box>

        </Box>

      </Box>

      <FleetSection id="services">
        <Box direction={areaDesktop ? 'row' : 'column'} justify={'flex-start'} align={'flex-start'} width={'95%'}>


          <Box flex={'none'} width={areaDesktop ? '60%' : '100%'} direction={'column'} justify={'flex-start'} align={'flex-start'}>
            <LogoImg src={Ns} width={'90%'} />
          </Box>


          <Box flex={'none'} width={areaDesktop ? '40%' : '95%'} direction={'column'} justify={'center'} align={'center'}>

            <SubmitButtonTwo>
              Multas de trânsito em geral
            </SubmitButtonTwo>

            <Box flex={'none'} width={'103%'} direction={'row'} justify={'center'} align={'center'}>
              <SubmitButtonTwo>
                Defesa/Recurso do bafômetro/ lei seca
              </SubmitButtonTwo>

              <SubmitButtonTwo>
                Excesso de velocidade acima de 50%
              </SubmitButtonTwo>
            </Box>

            <SubmitButtonTwo>
              Excesso de pontos na CNH
            </SubmitButtonTwo>

            <Box flex={'none'} width={'103%'} direction={'row'}>
              <SubmitButtonTwo>
                Suspensão do direito de dirigir
              </SubmitButtonTwo>

              <SubmitButtonTwo>
                Cassação de CNH
              </SubmitButtonTwo>
            </Box>

            <SubmitButtonTwo>
              Multa por não indicar condutor (NIC)
            </SubmitButtonTwo>

            <SubmitButtonTwo>
              Ultrapassagem em faixa contínua amarela
            </SubmitButtonTwo>

            <Box flex={'none'} width={'103%'} direction={'row'}>
              <SubmitButtonTwo>
                Consultoria preventiva e personalizada para você
              </SubmitButtonTwo>

              <SubmitButtonTwo>
                gestão inteligente e personalizada de FROTAS
              </SubmitButtonTwo>
            </Box>

            <SubmitButtonTwo>
              Soluções para empresas
            </SubmitButtonTwo>

          </Box>

        </Box>
      </FleetSection>

      <HeroSection height={areaDesktop ? '900px' : '400px'} id="fleet">
        <TextDefault align={'center'} bottom={'10px'} top={'90px'} color="#f5f5f5" size={isMobile ? '22px' : '45px'}>Por que a Fleet Solutions é a sua parceira ideal?</TextDefault>

        <LogoImg src={Pq} width={areaDesktop ? '70%' : '110%'} />

        <LogoImg src={LogoMarca} width={areaDesktop ? '300px' : '150px'} />
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

        <TextDefault top={'5px'} color="#FFFFFF" size="13px" >© 2024 Fleet Solutions. Todos os direitos reservados.</TextDefault>
      </Footer>
    </Container>
  );
};

export default App;
