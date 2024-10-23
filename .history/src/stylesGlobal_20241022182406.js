import styled, { createGlobalStyle, keyframes } from "styled-components";
import backgroundImage from './img/ImageInitialllll.jpg';
import backgroundImageWhite from './img/ImageInitiallll.jpg';
import backgroundImageStop from './img/ImageInitialll.jpg';

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

const spinningTop = keyframes`
  0% {
    transform: rotateY(0deg) rotateX(10deg);
  }
  25% {
    transform: rotateY(180deg) rotateX(10deg);
  }
  50% {
    transform: rotateY(720deg) rotateX(10deg);
  }
  75% {
    transform: rotateY(1080deg) rotateX(10deg);
  }
  100% {
    transform: rotateY(1440deg) rotateX(10deg);
  }
`;

export const Container = styled.div`
  //display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  //z-index: -2;
  background-color: #f5f5f5;
  //width: 100%;
`;

// Background com Zoom e Parallax
export const BackgroundImage = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  height: ${(props) => props.height || '110vh'};
  width: 100%;
  overflow: hidden; // Garantir que a imagem não afete o scroll horizontal
  position: relative;
  z-index: 1; // A imagem de fundo ficará atrás dos textos
  animation: ${zoomEffect} 15s infinite;
`;

// Header
export const HeaderWrapper = styled.header`
  background-color: ${(props) => (props.scrolled ? "rgba(0, 0, 0, 0.8)" : "transparent")};
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 11;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.5s ease; // Transição suave
`;

// Botão WhatsApp com animação de vibração
export const Whats = styled.button`
  background-color: transparent; /* Cor de fundo típica do WhatsApp */
  padding: 15px;
  border-radius: 50%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 9999; /* Garante que ficará na frente de tudo */
  cursor: pointer;
  animation: vibrate 1s infinite ease-in-out; /* Animação de vibração contínua */
  
  @keyframes vibrate {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-7px); /* Vibração suave para cima */
    }
  }

  svg {
    color: white; /* Ícone do WhatsApp em branco */
    font-size: 24px;
  }

  @media (max-width: 768px) {
    bottom: 20px; /* Ajusta a posição para dispositivos menores */
    right: 20px;
  }
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
  left: 10px; // Texto ficará à esquerda
  top: 20%;
  z-index: 2; // Texto acima do fundo
  max-width: ${(props) => props.width || '50%'};
  animation: ${fadeIn} 2.5s ease;
`;

export const WelcomeTextWrapperLogo = styled.div`
  position: absolute;
  right: 90px; // Texto ficará à esquerda
  top: 25%;
  z-index: 1; // Texto acima do fundo
  max-width: 50%;
  animation: ${fadeIn} 2.5s ease;
`;

export const WelcomeTextWrapperLogoTwo = styled.div`
  display: flex;
  top: 100%;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 1; // Texto acima do fundo
  max-width: 100%;
  height: 160px;
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
  margin-top: ${(props) => props.topSpace || '0px'};
  border-radius: ${(props) => props.radius || '0px'};
  //padding: 10px; /* Adiciona espaçamento interno */
`;

export const TextDefault = styled.h1`
  text-align: ${(props) => props.align || 'left'};;
  font-size: ${(props) => props.size || '15px'};
  color: ${(props) => props.color || '#000'};
  font-weight: ${(props) => props.weight || 'normal'};
  margin-left: ${(props) => props.left || '0px'};
  margin-top: ${(props) => props.top || '0px'};
  margin-right: ${(props) => props.right || '0px'};
  margin-bottom: ${(props) => props.bottom || '0px'};
  font-family: ${(props) => props.family || 'Nebula'};
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
  margin-top: ${(props) => props.top || '10px'};
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

  // Aplicando a animação de rotação tipo pião
  animation: ${spinningTop} 30s cubic-bezier(0.25, 1, 0.5, 1) infinite;
  transform-origin: center; // Define o ponto de origem da transformação
  perspective: 1000px; // Cria uma perspectiva 3D
`;

export const PraQuemImg = styled.img`
  width: ${(props) => props.width || '90%'};
  height: auto;
  margin-left: ${(props) => props.left || '0px'};
  margin-right: ${(props) => props.right || '0px'};
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const ServicesSection = styled.div`
  display: flex;
  flex:1;
  width: 100%;
  min-height: 500px; /* Define uma altura mínima */
  background-color: #f5f5f5;
  flex-direction: ${(props) => props.direction || 'row'};
  padding: 20px 0; /* Adiciona padding para espaçamento vertical */
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
  cursor: pointer;
  width: 25%;
  text-align: center;
  color: #000;
  transition: transform 0.9s;
  z-index: ${(props) => props.zIndex};

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

// Styles for the ServicesSection
export const ServicesSectionImg = styled.section`
  width: 100%;
  min-height: 500px; /* Define uma altura mínima */
  background-image: url(${backgroundImageStop});
  background-size: cover;
  text-align: flex-start;
  justify-content: center;
  color: #FFFFFF;
  padding: 20px 0; /* Adiciona padding para espaçamento vertical */

`;


// Form container
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #ccc;
  justify-content: flex-start;
  gap: 15px;
  max-width: 500px;
  margin: 0 auto;
`;

// Input fields
export const InputField = styled.input`
  width: 97%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
  margin-left: 20px;
  margin-bottom: 20px;
`;

// Select dropdown
export const SelectField = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  margin-left: 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

// Submit Button
export const SubmitButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #f53629;
  color: #fff;
  margin-left: 20px;
  margin-right: 30px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
      background-color: #d72f23;
      transform: translateY(-2px);
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
      color: #FFF;
      transition: color 0.3s;

      &:hover {
        color: #ffcc00;
      }
    }
  }
`;

export const FleetSection = styled.section`
display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  background-image: url(${backgroundImageWhite});
  background-size: cover;
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
    justify-content: center;
    margin-top: 20px;

    @media (max-width: 768px) {
      flex-direction: column;
      justify-content: center;
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


