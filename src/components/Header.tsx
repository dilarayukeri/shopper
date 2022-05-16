import React from "react";
import { Platform } from "react-native";
import styled from "styled-components/native";

import { scaleX } from "../helpers/pixelHelper";
import LanguageButton from "./LanguageButton";
import LogoText from "./LogoText";
import Logo from "./Logo";

const Header: React.FC = () => {
    return (
        <Container>
            <Row>
                <Logo />
                <LogoText />
            </Row>
            <LanguageButton />
        </Container>
    );
};

const Container = styled.View`
    flex-direction: row;
    width: 100%;
    padding-vertical: ${Platform.OS === "ios" ? scaleX(20) : scaleX(14)}px;
    padding-horizontal: ${scaleX(14)}px;
    align-items: center;
    justify-content: space-between;
    border-bottom-width: 1px;
    border-color: white;
`;
const Row = styled.View`
    flex-direction: row;
    align-items: center;
`;

export default Header;
