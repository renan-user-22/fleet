import styled, { createGlobalStyle, keyframes } from "styled-components";
import backgroundImage from './img/ImageInitialllll.jpg';
import backgroundImageWhite from './img/ImageInitiallll.jpg';

// Animação de Zoom contínuo no fundo
const zoomEffect = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

// Animação de Fade-In para o texto
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Animação para simular o giro de um pião
const spinningTop = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(180deg);
  }
  50% {
    transform: rotate(720deg);
  }
  75% {
    transform: rotate(1080deg);
  }
  100% {
    transform: rotate(1440deg); /* Número maior de rotações para simular aceleração */
  }
`;

export const Container = styled.div`
  //display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  //width: 100%;
`;

// Background com Zoom e Parallax
export const BackgroundImage = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  height: 80vh;
  width: 100%;
  overflow: hidden; // Garantir que a imagem não afete o scroll horizontal
  position: relative;
  z-index: -1; // A imagem de fundo ficará atrás dos textos
  animation: ${zoomEffect} 15s infinite;
`;

// Header
export const HeaderWrapper = styled.header`
  background-color: ${(props) => (props.scrolled ? "rgba(0, 0, 0, 0.5)" : "transparent")};
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.5s ease; // Transição suave
`;

// NavBar com animação de hover
export const NavBar = styled.nav`
  display: flex;
  gap: 20px;
  margin-right:50px;

  a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    position: relative;

    &:hover {
      color: #FF4500;
      transition: color 0.3s ease;
    }

    &:hover::after {
      content: '';
      width: 100%;
      height: 2px;
      background-color: #FF4500;
      position: absolute;
      bottom: -5px;
      left: 0;
      animation: ${fadeIn} 0.3s ease;
    }
  }
`;

// Texto ao lado direito com fonte sofisticada e estática
export const WelcomeTextWrapper = styled.div`
  position: absolute;
  left: 70px; // Texto ficará à esquerda
  top: 25%;
  z-index: 1; // Texto acima do fundo
  max-width: 40%;
  animation: ${fadeIn} 2.5s ease;
`;

export const WelcomeTextWrapperLogo = styled.div`
  position: absolute;
  right: 70px; // Texto ficará à esquerda
  top: 25%;
  z-index: 1; // Texto acima do fundo
  max-width: 40%;
  animation: ${fadeIn} 2.5s ease;
`;



export const WelcomeText = styled.div`
  color: white;
  font-family: 'Georgia', serif; // Fonte mais sofisticada
  font-size: 1.5rem;

  h1 {
    font-size: 3rem;
    margin-bottom: 20px;
    color: #fff;
  }

  p {
    line-height: 1.5;
    text-align: right;
  }
`;

export const Box = styled.div`
  display: flex;
  flex: ${(props) => props.flex || '1'};
  background-color: ${(props) => props.color || 'transparent'};
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || 'auto'};
  justify-content: ${(props) => props.justify || 'flex-start'};
  align-items: ${(props) => props.align || 'flex-start'};
  flex-direction: ${(props) => props.direction || 'row'};
  margin-bottom: ${(props) => props.bottomSpace || '0px'};
  margin-left: ${(props) => props.leftSpace || '0px'};
  border-radius: ${(props) => props.radius || '0px'};
  //padding: 10px; /* Adiciona espaçamento interno */
`;

export const TextDefault = styled.h1`
  font-size: ${(props) => props.size || '15px'};
  color: ${(props) => props.color || '#000'};
  font-weight: ${(props) => props.weight || 'normal'};
  margin-left: ${(props) => props.left || '0px'};
  margin-top: ${(props) => props.top || '0px'};
  margin-right: ${(props) => props.right || '0px'};
  margin-bottom: ${(props) => props.bottom || '0px'};
`;

export const AreaImgBackground = styled.div`
  width: 100%;
  height: 600px;
  background-size: cover;
  background-image: url(${(props) => props.currentImage});
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    height: 600px; /* Ajusta a altura da imagem para dispositivos menores */
  }
`;

export const LogoImg = styled.img`
  width: ${(props) => props.width || '60px'};
  height: auto;
  margin-left: ${(props) => props.left || '0px'};
  margin-right: ${(props) => props.right || '0px'};
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const LogoImgWhite = styled.img`
  width: 60px;
  height: auto;
  margin-left: ${(props) => props.left || '0px'};
  margin-top: 80px;
  margin-bottom: 10px;
`;

export const LogoImgAnemated = styled.img`
  width: ${(props) => props.width || '60px'};
  height: auto;
  margin-left: ${(props) => props.left || '0px'};
  margin-right: ${(props) => props.right || '0px'};
  margin-top: 10px;
  margin-bottom: 10px;

  // Aplicando a animação de rotação
  animation: ${rotate} 30s linear infinite;
`;

export const ServicesSection = styled.section`
  width: 100%;
  min-height: 700px; /* Define uma altura mínima */
  background-color: #FF4500;
  text-align: center;
  color: #FFFFFF;
  padding: 20px 0; /* Adiciona padding para espaçamento vertical */

  h2 {
    font-size: 2.5rem;
    margin-bottom: 40px;
  }

  .cards {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap; /* Permite que os cartões se ajustem em várias linhas */

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  }
  
  @media (min-width: 1024px) {
    height: auto; /* Altura flexível para telas maiores */
    padding: 50px 0; /* Aumenta o padding para dar mais espaço */
  }
`;

export const LinkMenu = styled.a`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 70px;
  text-decoration: none;

`;

export const ServiceCard = styled.div`
  background: white;
  border-radius: 7px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
  width: 25%;
  text-align: center;
  color: #000;
  transition: transform 0.3s;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1rem;
    color: #555;
  }

  &:hover {
    transform: translateY(-5px); /* Efeito de levantar ao passar o mouse */
  }

  @media (max-width: 768px) {
    width: 80%; /* Ajusta a largura para dispositivos menores */
    margin-bottom: 30px;
  }
`;

export const HeroSection = styled.section`
  width: 100%;
  height: 500px;
  background-size: cover;
  background-image: url(${backgroundImageWhite});
  display: flex;
  flex-direction: column;
  justify-content: center;

  button {
    background-color: #f53629;
    width: 230px;
    color: white;
    padding: 10px 20px;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: #d72f23;
      transform: translateY(-2px);
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  width: 100%;
  height: 200px;
  background-color: #333;
  color: white;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;

  p {
    margin: 2px;
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    height: 150px;
  }

  .social-icons {
    display: flex;
    justify-content: center;
    gap: 15px;

    svg {
      cursor: pointer;
      transition: color 0.3s;

      &:hover {
        color: #ffcc00;
      }
    }
  }
`;

export const FleetSection = styled.section`
  width: 100%;
  height: auto;
  background-color: #f5f5f5;
  text-align: center;
  min-height: 600px;
  padding: 50px 0;

  h2 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 30px;
  }

  .fleet-cards {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      height: auto;
    }
  }
`;

export const FleetCard = styled.div`
  background: white;
  border-radius: 7px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 20%;
  text-align: center;

  h3 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 15px;
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


