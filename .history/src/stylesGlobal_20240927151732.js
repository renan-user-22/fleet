import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
`;

// Seção do Hero
export const HeroSection = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: linear-gradient(90deg, rgba(255,136,0,1) 0%, rgba(255,45,85,1) 100%);
`;

// Container de conteúdo
export const Content = styled.div`
  text-align: center;
  z-index: 2;

  h1 {
    font-size: 3rem;
    color: white;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    color: white;
    margin-bottom: 2rem;
  }
`;

// Botão Solicitar Consulta
export const Button = styled(motion.button)`
  padding: 15px 30px;
  background-color: #ff5733;
  color: white;
  border: none;
  border-radius: 25px;
  font-size: 1rem;
  cursor: pointer;
  outline: none;
  z-index: 2;
`;

// Container do Slider
export const SliderContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50vh;
  z-index: 1;

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    color: white;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.8);
  }

  p {
    position: absolute;
    bottom: 30px;
    font-size: 1.5rem;
    text-align: center;
    background: rgba(0, 0, 0, 0.5);
    padding: 10px 20px;
    border-radius: 10px;
  }
`;
