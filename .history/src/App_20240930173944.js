import React from 'react';
//logomarca
import LogoImage from './img/logo.png';
// Icones do layout
import { TbMapDollar } from "react-icons/tb";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { LiaUserTieSolid } from "react-icons/lia";
import { IoCarSportOutline } from "react-icons/io5";
// Efeito
import { motion } from 'framer-motion';
//Estilos do arquivo stylesGlobal
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

  Footer
} from './stylesGlobal';

const App = () => {
  return (
    <Container>

      <AreaImgBackground>
        <Header>
          <LogoImg src={LogoImage} />

        </Header>

        <Box flex={'1'} color={'transparent'} width={'100%'} height={'100%'} direction={'column'} justify={'center'} align={'flex-end'}>

          <TextDefault color={'#FFFFFF'} left={'10px'} top={'10px'} bottom={'10px'} right={'50px'} size={'33px'}>Gestão de Frota Avançada</TextDefault>
          <TextDefault color={'#FFFFFF'} left={'10px'} top={'10px'} bottom={'10px'} right={'50px'} size={'21px'}>Economize até 40% e aumente a produtividade da sua equipe em 80%.</TextDefault>
          <TextDefault color={'#FFFFFF'} left={'10px'} top={'10px'} bottom={'10px'} right={'50px'} size={'21px'}>Soluções para empresas com CNPJ ATIVO ou motoristas com CPF ATIVO!</TextDefault>

        </Box>

      </AreaImgBackground>

      {/* Serviços Section */}
      <ServicesSection id="services">
        <h2>Como podemos te ajudar?</h2>
        <div className="cards">
          <ServiceCard>
            <h3>Defesa de Multas</h3>
            <p>Oferecemos suporte completo para defesa de multas.</p>
          </ServiceCard>
          <ServiceCard>
            <h3>Suspensão de CNH</h3>
            <p>Saiba como evitamos a suspensão da sua carteira de habilitação.</p>
          </ServiceCard>
          <ServiceCard>
            <h3>Gestão de Frotas</h3>
            <p>Gerencie sua frota com mais eficiência e menos preocupações.</p>
          </ServiceCard>
        </div>
      </ServicesSection>

      <HeroSection>
          <TextDefault color={'#FF4500'} left={'10px'} top={'10px'} bottom={'10px'} right={'50px'} size={'10px'}>Para quem é a Fleet Solutions</TextDefault>

          <Box flex={'1'} color={'transparent'} width={'100%'} height={'100%'} direction={'row'} justify={'space-around'} align={'center'}>
            <TextDefault color={'#FF4500'} left={'10px'} top={'10px'} bottom={'10px'} right={'50px'} size={'10px'}>  <TbMapDollar size={'30px'}/> Transportadoras de Carga e Passageiros</TextDefault>
            <TextDefault color={'#FF4500'} left={'10px'} top={'10px'} bottom={'10px'} right={'50px'} size={'10px'}>  <TbDeviceDesktopAnalytics size={'30px'}/> Locadoras de Veículos</TextDefault>
            <TextDefault color={'#FF4500'} left={'10px'} top={'10px'} bottom={'10px'} right={'50px'} size={'10px'}>  <LiaUserTieSolid size={'30px'}/> Gestores de Frota</TextDefault>
            <TextDefault color={'#FF4500'} left={'10px'} top={'10px'} bottom={'10px'} right={'50px'} size={'10px'}>  <IoCarSportOutline size={'30px'}/> Motoristas pessoas fisicas</TextDefault>
          </Box>
      </HeroSection>

      {/* Hero Section com animação */}
      <HeroSection>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h1>Gestão de Frotas e Soluções para Motoristas</h1>
          <p>Defesa de Multas, Suspensão de CNH, e mais!</p>
          <button>Solicitar Consulta</button>
        </motion.div>
      </HeroSection>


      {/* Footer */}
      <Footer>
        © 2024 Fleet Solutions. Todos os direitos reservados.
      </Footer>

    </Container>
  );
}

export default App;