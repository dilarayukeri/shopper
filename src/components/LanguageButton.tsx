import React, { useContext } from "react";
import styled from "styled-components/native";

import { LocalizationContext } from "../providers/LocalizationProvider";
import { scaleX } from "../helpers/pixelHelper";
import { icons } from "../assets";

const LanguageButton: React.FC = () => {
    const { appLanguage, setAppLanguage } = useContext(LocalizationContext);

    const changeLang = () => {
        setAppLanguage(appLanguage === "tr" ? "en" : "tr");
    };

    return (
        <Button onPress={changeLang}>
            <ButtonText>{appLanguage.toUpperCase()}</ButtonText>
            <Icon source={icons.language} />
        </Button>
    );
};

const Button = styled.TouchableOpacity`
    flex-direction: row;
    width: ${scaleX(60)}px;
    height: ${scaleX(40)}px;
    align-items: center;
    justify-content: center;
`;
const ButtonText = styled.Text`
    font-weight: 600;
    font-size: ${scaleX(18)}px;
`;
const Icon = styled.Image`
    width: ${scaleX(20)}px;
    height: ${scaleX(20)}px;
    margin-left: ${scaleX(4)}px;
`;

export default LanguageButton;
