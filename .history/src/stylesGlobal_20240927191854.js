import styled from 'styled-components';
import { motion } from 'framer-motion';

// Container principal que envolve toda a aplicação
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  //overflow: hidden; /* Para evitar barra de rolagem desnecessária */
`;

export const AreaImgBackground = styled.div`
width: 100%;
height: 500px;
background-color: #CCC;
`;

export const Header = styled.header`
  position: relative;
  width: 100%;
  background: rgba(0, 0, 0, 0.5); /* Transparência para ver o slider ao fundo */
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1; /* Para sobrepor o slider */
  
  h1 {
    font-size: 2rem;
    letter-spacing: 2px;
  }

  nav {
    display: flex;
    gap: 20px;

    a {
      color: white;
      text-decoration: none;
      font-weight: bold;
      transition: color 0.3s ease;

      &:hover {
        color: #FF4500;
      }
    }
  }
`;

export const LogoImg = styled.img`
  width: 70px;
  height: auto;
  margin-left: 30px;
`;

export const ImageSlider = styled.img`
  width: 100%;
  height: auto;
`;

// Section dos serviços com estilo e animação de hover
export const ServicesSection = styled.section`
  width: 100%;
  height: 370px;
  background-color: #f53629;
  text-align: center;
  color: #FFFFFF;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 40px;
  }

  .cards {
    display: flex;
    justify-content: space-around;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  }
`;

// Card individual de cada serviço
export const ServiceCard = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 30%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  h3 {
    color: #FF8C00;
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    color: #555;
  }

  @media (max-width: 768px) {
    width: 80%;
    margin-bottom: 20px;
  }
`;

// Hero Section com animações
export const HeroSection = styled.section`
  color: white;
  height: 80vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  h1 {
    font-size: 3rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 30px;
  }

  button {
    padding: 15px 30px;
    background-color: #FF8C00;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #FF4500;
    }
  }
`;

// Footer simples
export const Footer = styled.footer`
  display: flex;
  width: 100%;
  height: 50px;
  background-color: #333;
  color: white;
  text-align: center;
  justify-content: center;

  bottom: 0;

  p {
    margin: 0;
    font-size: 0.9rem;
  }
`;
