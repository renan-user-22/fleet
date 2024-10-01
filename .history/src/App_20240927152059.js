import React from 'react';
import { Container, HeroSection, Content, Button, SliderContainer } from './stylesGlobal';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const App = () => {
  return (
    <Container>
      <HeroSection>
        {/* Slider de Imagens como fundo */}
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
            loop={true}
          >
            <SwiperSlide>
              <img src="https://example.com/image1.jpg" alt="Gestão de Frotas" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://example.com/image2.jpg" alt="Defesa de Multas" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://example.com/image3.jpg" alt="CNH Suspensa" />
            </SwiperSlide>
          </Swiper>
        </SliderContainer>

        {/* Conteúdo sobreposto ao slider */}
        <Content>
          <h1>Bem-vindo à Fleet Solutions</h1>
          <p>Especialistas em gestão de frotas, defesa de multas e CNH.</p>
          <Button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Solicitar Consulta
          </Button>
        </Content>
      </HeroSection>
    </Container>
  );
};

export default App;
