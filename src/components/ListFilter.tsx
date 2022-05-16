import React, { useContext } from "react";
import styled from "styled-components/native";

import { LocalizationContext } from "../providers/LocalizationProvider";
import { scaleX } from "../helpers/pixelHelper";
import { icons } from "../assets";

const ListFilter: React.FC = () => {
    const { translate } = useContext(LocalizationContext);
    return (
        <Container>
            <Row>
                <Icon source={icons.sort} />
                <ButtonText>{translate("sort")}</ButtonText>
            </Row>
            <Row>
                <ButtonText>{translate("filter")}</ButtonText>
                <Icon source={icons.filter} />
            </Row>
        </Container>
    );
};

const Container = styled.View`
    flex-direction: row;
    width: 100%;
    padding-vertical: ${scaleX(15)}px;
    padding-horizontal: ${scaleX(16)}px;
    align-items: center;
    justify-content: space-between;
`;
const Icon = styled.Image`
    width: ${scaleX(18)}px;
    height: ${scaleX(18)}px;
`;
const Row = styled.View`
    flex-direction: row;
    align-items: center;
`;
const ButtonText = styled.Text`
    margin-rigth: ${scaleX(4)}px;
    margin-left: ${scaleX(4)}px;
`;

export default ListFilter;
