import React, { useEffect, useState } from "react";
import LogoMarca from '../../img/logomarca.png';
import LogoImagee from '../../img/logoo.png';
import { useMediaQuery } from 'react-responsive';

import { MdOutlineCheckCircle } from "react-icons/md";

import { FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import { HiHome } from "react-icons/hi";
import { MdDesignServices } from "react-icons/md";
import { MdAssuredWorkload } from "react-icons/md";
import { Drawer } from '@mui/material';
import { IoLogoWhatsapp } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";
// Efeito de animação
import { motion } from 'framer-motion';
import {
    Container,
    Box,
    TextDefault,
    SubmitButtonTwo,
    Whats,
    NavBar,
    HeaderWrapper,
    WelcomeTextWrapper,
    WelcomeTextWrapperLogo,
    WelcomeTextWrapperLogoTwo,
    BackgroundImage,
    LogoImg,
    HeroSection,
    Footer,
    FleetSection,
    InputField,
    SelectField,
    SubmitButton,
    LinkMenu,
} from '../../stylesGlobal';
import { useNavigate } from "react-router-dom";

const Enviado = () => {
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();

    const isMobile = useMediaQuery({ maxWidth: 968 });
    const [areaDesktop, setAreaDesktop] = useState(false);
    const [areaMobile, setAreaMobile] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [showTypewriter, setShowTypewriter] = useState(true);
    const [logoFooter, setLogoFooter] = useState(false);

    const handleScroll = () => {
        const isScrolled = window.scrollY > 50; // Muda a cor após 50px de rolagem
        setScrolled(isScrolled);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleClick = () => {
        setShowTypewriter(false); // Esconde o efeito de digitação
        setTimeout(() => {
            setShowTypewriter(true); // Reinicia o efeito de digitação após um breve atraso
        }, 70); // Ajuste o tempo se necessário
    };

    useEffect(() => {

        if (isMobile) {
            setAreaMobile(true);
            setAreaDesktop(false);
            setLogoFooter(false);
        } else {
            setAreaMobile(false);
            setAreaDesktop(true);
            setLogoFooter(true);
        }

    }, [isMobile]);

    // Função para redirecionar ao WhatsApp
    const Whats = () => {
        const phoneNumber = '+5532998195571';
        const message = 'Olá, gostaria de solicitar um atendimento.';
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.location.href = whatsappURL;
    };

    return (
        <Box direction={"column"} height={"100vh"} width={'100%'} justify={"center"} align={"center"}>

            {/* Header fixo */}
            <HeaderWrapper scrolled={scrolled} >
                <LogoImg width={areaDesktop ? '300px' : '230px'} left={'30px'} src={LogoMarca} alt="Logo da Fleet Solutions" />


                <TextDefault
                    size={"20px"}
                    style={{ cursor: "pointer", marginRight: '50px' }}
                    onClick={() => navigate("/")}
                    color="#f26b2b"
                >
                    X
                </TextDefault>


            </HeaderWrapper>

            {/* Mensagem e botão para WhatsApp */}
            <Box
                flex={"1"}
                direction={"column"}
                justify={"center"}
                align={"center"}
                width={"90%"}
                //height={"100vh"}
                topSpace={areaDesktop ? '70px' : '50px'}
            >
                <MdOutlineCheckCircle color="#6ac831" size={areaDesktop ? '70px' : '50px'} />

                <TextDefault weight={'bold'} align={'center'} bottom={"10px"} top={"15px"} size={areaDesktop ? '21px' : '19px'}>
                    Solicitação enviada com sucesso!
                </TextDefault>
                <TextDefault align={'center'} bottom={"10px"} family={'Octosquares Extra Light'}>
                    Agradecemos o seu contato. Em breve, nossa equipe entrará em contato com você.
                </TextDefault>
                <TextDefault weight={'bold'} align={'center'} bottom={"10px"} size={areaDesktop ? '21px' : '19px'}>
                    Quer adiantar seu atendimento?
                </TextDefault>
                <TextDefault align={'center'} bottom={"20px"} family={'Octosquares Extra Light'} >
                    Clique no botão abaixo e fale diretamente conosco pelo WhatsApp!
                </TextDefault>
                <SubmitButton width={"300px"} onClick={Whats}>
                    <TextDefault
                        align={"center"}
                        family={"Octosquares Italic"}
                        color="#f5f5f5"
                    >
                        FALAR COM UM ESPECIALISTA
                    </TextDefault>
                </SubmitButton>
            </Box>

            <Footer >

                {logoFooter &&
                    <LogoImg src={LogoImagee} alt="Logo da Fleet Solutions" />
                }

                <Box justify={'center'} align={'center'} direction={'column'}>
                    <TextDefault top={'5px'} color="#FFFFFF" size="13px" bottom={'5px'}>Fale conosco:</TextDefault>
                </Box>

                <div className="social-icons">

                    <LinkMenu href="https://www.instagram.com/_fleet.solutions/" >
                        <FaInstagram size={24} /> {/* Ícone do Instagram */}
                    </LinkMenu>

                    <LinkMenu href="#contact" onClick={() => Whats()} >
                        <FaWhatsapp size={24} />  {/* Ícone do WhatsApp */}
                    </LinkMenu>

                    <LinkMenu href="https://www.linkedin.com/company/solutionsfleet/?viewAsMember=true" >
                        <FaLinkedin size={24} />  {/* Ícone do LinkedIn */}
                    </LinkMenu>

                    <LinkMenu href="mailto:contato.fleetsolutions@gmail.com?subject=Atendimento%20personalizado%20Fleet%20Solutions&body=Ol%C3%A1%2C%20informe%20abaixo%20o%20seu%20nome%20completo%2C%20WhatsApp%2C%20e%20o%20problema%20que%20est%C3%A1%20enfrentando%3A%20" >
                        <BiLogoGmail size={24} />
                    </LinkMenu>

                </div>

                <TextDefault align={'center'} top={'5px'} color="#FFFFFF" size="13px" >© 2024 Fleet Solutions. Todos os direitos reservados.</TextDefault>
            </Footer>
        </Box>
    );
};

export default Enviado;
