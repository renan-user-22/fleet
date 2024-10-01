import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

// Estilo para a seção principal (Hero)
export const HeroSection = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

// Slider Container, que ficará no fundo
export const SliderContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1; /* Slider fica no fundo */
  
  .swiper-slide {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover; /* Para garantir que a imagem cubra toda a área */
    }
  }
`;

// Conteúdo sobreposto ao Slider
export const Content = styled.div`
  position: relative;
  z-index: 2; /* O conteúdo sobrepõe o Slider */
  text-align: center;
  color: white;
  padding: 20px;

  h1 {
    font-size: 3rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 30px;
  }
`;

export const Button = styled(motion.button)`
  background-color: #ff7f50;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 15px 30px;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    background-color: #ff6347;
  }
`;
