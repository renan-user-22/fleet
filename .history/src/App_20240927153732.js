import React from 'react';
import { Container, Header, HeroSection, ServicesSection, ServiceCard, Footer, SliderContainer } from './stylesGlobal';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper'; // Esses são os módulos


const App = () => {
  return (
    <Container>
      {/* Slider de fundo cobrindo Header e HeroSection */}
      <SliderContainer>
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          loop={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          <SwiperSlide>
            <img src="https://example.com/image1.jpg" alt="Imagem 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://example.com/image2.jpg" alt="Imagem 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://example.com/image3.jpg" alt="Imagem 3" />
          </SwiperSlide>
        </Swiper>
      </SliderContainer>

      {/* Header */}
      <Header>
        <h1>Fleet Solutions</h1>
        <nav>
          <a href="#services">Serviços</a>
          <a href="#about">Sobre Nós</a>
          <a href="#contact">Contato</a>
        </nav>
      </Header>

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

      {/* Serviços Section */}
      <ServicesSection id="services">
        <h2>Nossos Serviços</h2>
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

      {/* Footer */}
      <Footer>
        <p>© 2024 Fleet Solutions. Todos os direitos reservados.</p>
      </Footer>
    </Container>
  );
}

export default App;
