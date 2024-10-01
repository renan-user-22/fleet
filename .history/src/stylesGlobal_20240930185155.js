import styled from 'styled-components';
import { motion } from 'framer-motion';
import backgroundImage from './img/ImageInitial.jpg';
//import backgroundImageOrange from './img'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

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

export const TextDefault = styled.h1`
  font-size: ${props => props.size || '15px'};
  color: ${(props) => props.color || '#000'};
  font-weight: ${props => props.weight || 'normal'};
  margin-left: ${props => props.left || '0px'};
  margin-top: ${props => props.top || '0px'};
  margin-right: ${props => props.right || '0px'};
  margin-bottom: ${props => props.bottom || '0px'};
`;

export const AreaImgBackground = styled.div`
  width: 100%;
  height: 600px;
  background-size: cover;
  background-image: url(${backgroundImage});
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Header = styled.header`
  position: absolute;
  top: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.5); 
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1;

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

export const ServicesSection = styled.section`
  width: 100%;
  height: 370px;
  background-color:#FF4500;
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

export const ServiceCard = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
  width: 250px;
  text-align: center;
  color: #000;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1rem;
    color: #555;
  }
`;

export const HeroSection = styled.section`
  width: 100%;
  padding: 50px;
  text-align: center;

  h1 {
    font-size: 2rem;
    color: #333;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }

  button {
    background-color: #f53629;
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
  width: 100%;
  background-color: #333;
  color: white;
  text-align: center;
  padding: 20px 0;

  p {
    margin: 0;
    font-size: 0.9rem;
  }
`;
