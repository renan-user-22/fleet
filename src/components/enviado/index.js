import React from "react";
import LogoMarca from '../../img/logomarca.png';
import {
    Box,
    TextDefault,
    SubmitButton,
    LogoImg,
} from '../../stylesGlobal';
import { useNavigate } from "react-router-dom";

const Enviado = () => {
    const navigate = useNavigate();

    // Função para redirecionar ao WhatsApp
    const Whats = () => {
        const phoneNumber = '+5532998195571';
        const message = 'Olá, gostaria de solicitar um atendimento.';
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.location.href = whatsappURL;
    };

    return (
        <Box direction={"column"} height={"100vh"} width={'100%'}  justify={"center"} align={"center"}>
            {/* Header com botão "X" */}
            <Box
                flex={"0.1"}
                direction={"column"}
                justify={"flex-end"}
                align={"flex-end"}
                width={"90%"}
                height={"25%"}
                padding={"20px"}
            >
                <TextDefault
                    size={"20px"}
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/")}
                >
                    X
                </TextDefault>
            </Box>

            {/* Logo */}
            <Box
                flex={"0.5"}
                direction={"column"}
                justify={"center"}
                align={"center"}
                width={"90%"}
                height={"25%"}
            >
                <LogoImg
                    width={"230px"}
                    src={LogoMarca}
                    alt="Logo da Fleet Solutions"
                />
            </Box>

            {/* Mensagem e botão para WhatsApp */}
            <Box
                flex={"1"}
                direction={"column"}
                //justify={"center"}
                align={"center"}
                width={"90%"}
                height={"25%"}
            >
                <TextDefault align={'center'} bottom={"25px"} size={"21px"}>
                    Solicitação enviada com sucesso!
                </TextDefault>
                <TextDefault align={'center'} bottom={"10px"}>
                    Obrigado pelo seu contato. Entraremos em contato com você em breve.
                </TextDefault>
                <TextDefault align={'center'} bottom={"20px"}>
                    Caso queira adiantar seu atendimento, clique no botão abaixo.
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
        </Box>
    );
};

export default Enviado;
