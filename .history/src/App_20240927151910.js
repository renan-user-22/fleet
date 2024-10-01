import React from 'react';
import { Container, HeroSection, Content, Button, SliderContainer } from './stylesGlobal';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';  // Importando o CSS principal do Swiper
import 'swiper/css/pagination';  // Importando os estilos do Pagination
import 'swiper/css/navigation';  // Se você usar botões de navegação

const App = () => {
  return (
    <Container>
      <HeroSection>
        <Content>
          <h1>Bem-vindo à Fleet Solutions</h1>
          <p>Especialistas em gestão de frotas, defesa de multas e CNH.</p>
          <Button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Solicitar Consulta
          </Button>
        </Content>

        {/* Slider de Imagens */}
        <SliderContainer>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            loop={true}
          >
            <SwiperSlide>
              <img src="https://example.com/image1.jpg" alt="Gestão de Frotas" />
              <p>Gestão inteligente para sua frota</p>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://example.com/image2.jpg" alt="Defesa de Multas" />
              <p>Defesa especializada em multas de trânsito</p>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://example.com/image3.jpg" alt="CNH Suspensa" />
              <p>Recupere sua CNH rapidamente</p>
            </SwiperSlide>
          </Swiper>
        </SliderContainer>
      </HeroSection>
    </Container>
  );
};

export default App;
