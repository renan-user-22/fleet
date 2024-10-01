import styled from 'styled-components';
import backgroundImage from './img/ImageInitial.jpg';

// Container principal
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #f0f0f5;
`;

// Box para layout flexível
export const Box = styled.div`
  display: flex;
  flex: ${props => props.flex};
  background-color: ${props => props.color};
  width: ${props => props.width};
  height: ${props => props.height};
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
  flex-direction: ${props => props.direction};
  margin-bottom: ${props => props.bottomSpace || '0px'};
  margin-left: ${props => props.leftSpace || '0px'};
  border-radius: ${props => props.radius || '0px'};
`;

// Texto padrão
export const TextDefault = styled.h1`
  font-size: ${props => props.size || '15px'};
  color: ${(props) => props.color || '#000'};
  font-weight: ${props => props.weight || 'normal'};
  margin-left: ${props => props.left || '0px'};
  margin-top: ${props => props.top || '0px'};
  margin-right: ${props => props.right || '0px'};
  margin-bottom: ${props => props.bottom || '0px'};
`;

// Seção com background
export const AreaImgBackground = styled.div`
  width: 100%;
  height: 600px;
  background-size: cover;
  background-image: url(${backgroundImage});
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

// Cabeçalho elegante
export const Header = styled.header`
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

// Logomarca
export const LogoImg = styled.img`
  width: 80px;
  height: auto;
  margin-left: 30px;
`;

// Seção de Serviços
export const ServicesSection = styled.section`
  width: 100%;
  height: 400px;
  background-color: #f53629;
  text-align: center;
  color: #FFFFFF;
  padding: 50px;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 40px;
    animation: fadeIn 1.5s ease-in-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .cards {
    display: flex;
    justify-content: space-around;
  }
`;

// Cartão de serviço
export const ServiceCard = styled.div`
  background-color: #ffffff;
  color: #000;
  padding: 20px;
  border-radius: 10px;
  width: 250px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 15px;
  }

  p {
    font-size: 1rem;
  }

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }
`;

// Seção Hero
export const HeroSection = styled.section`
  width: 100%;
  padding: 80px;
  text-align: center;
  background-color: #f0f0f5;

  h1 {
    font-size: 3rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 40px;
  }

  button {
    padding: 15px 30px;
    font-size: 1.2rem;
    color: #fff;
    background-color: #ff4500;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #ff6347;
  }
`;

// Footer
export const Footer = styled.footer`
  width: 100%;
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 20px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;
