import React from "react";
import styled from "styled-components/native";

import { useNavigation } from "@react-navigation/native";
import { scaleX } from "../helpers/pixelHelper";
import { icons } from "../assets";

const BackButton: React.FC = () => {
    const navigation = useNavigation();

    return (
        <Button onPress={() => navigation.goBack()}>
            <Icon source={icons.back} />
        </Button>
    );
};

const Button = styled.TouchableOpacity`
    width: ${scaleX(30)}px;
    height: ${scaleX(40)}px;
    align-items: center;
    justify-content: center;
`;
const Icon = styled.Image`
    width: ${scaleX(18)}px;
    height: ${scaleX(18)}px;
`;

export default BackButton;
