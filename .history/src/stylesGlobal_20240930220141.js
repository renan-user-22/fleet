import styled from 'styled-components';
import { motion } from 'framer-motion';
import backgroundImage from './img/ImageInitial.jpg';

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
  padding: 10px; 
`;

export const TextDefault = styled.h1`
  font-size: ${props => props.size || '15px'};
  color: ${(props) => props.color || '#000'};
  font-weight: ${props => props.weight || 'normal'};
  margin: ${props => `${props.top || '0px'} ${props.right || '0px'} ${props.bottom || '0px'} ${props.left || '0px'}`};
`;

export const AreaImgBackground = styled.div`
  width: 100%;
  height: 700px;
  background-size: cover;
  background-image: url(${backgroundImage});
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    height: 400px; /* Altura reduzida para mobile */
  }
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

  nav a {
    color: white;
    text-decoration: none;
    margin: 0 15px;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column; 
    align-items: center; 
    nav {
      display: flex;
      flex-direction: column;
      align-items: center; 
    }
  }
`;

export const ServicesSection = styled.section`
  padding: 20px;
  width: 100%;
  text-align: center;

  h2 {
    margin-bottom: 20px;
    font-size: 24px;
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 20px; 
    }
  }
`;

export const ServiceCard = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: transform 0.3s;

  h3 {
    font-size: 18px; 
  }

  p {
    font-size: 14px; 
  }

  &:hover {
    transform: translateY(-5px); 
  }
`;

export const FleetSection = styled.section`
  padding: 20px;
  width: 100%;
  text-align: center;

  .fleet-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }
`;

export const FleetCard = styled.div`
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;

  h3 {
    font-size: 16px; 
  }
`;

export const Footer = styled.footer`
  background: #333;
  color: white;
  text-align: center;
  padding: 20px;
  width: 100%;

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
