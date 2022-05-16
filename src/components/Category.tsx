import React, { useContext } from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

import { LocalizationContext } from "../providers/LocalizationProvider";
import CategoryProducts from "./CategoryProducts";
import { ProductType } from "../redux/stateTypes";
import { scaleX } from "../helpers/pixelHelper";
import Colors from "../config/colors";

interface Props {
    name: string;
    list: ProductType[];
}

const Category: React.FC<Props> = ({ name, list }) => {
    // Context
    const { translate } = useContext(LocalizationContext);
    // Navigation
    const navigation = useNavigation();

    return (
        <Container>
            <Row>
                <Header>{name}</Header>
                <SeeAllButton onPress={() => navigation.navigate("List")}>
                    <SeeAllText>{translate("see_all")}</SeeAllText>
                </SeeAllButton>
            </Row>
            <CategoryProducts list={list} />
        </Container>
    );
};

const Container = styled.View`
    width: 100%;
    margin-top: ${scaleX(20)}px;
    margib-bottom: ${scaleX(8)}px;
`;
const Header = styled.Text`
    font-weight: 600;
    font-size: ${scaleX(20)}px;
`;
const Row = styled.View`
    flex-direction: row;
    width: 100%;
    padding-horizontal: ${scaleX(16)}px;
    padding-vertical: ${scaleX(10)}px;
    align-items: center;
    justify-content: space-between;
`;
const SeeAllButton = styled.TouchableOpacity`
    padding-horizontal: ${scaleX(6)}px;
    margin-right: ${scaleX(-8)}px;
    width: ${scaleX(100)}px;
    align-items: center;
    justify-content: center;
`;
const SeeAllText = styled.Text`
    font-weight: 400;
    font-size: ${scaleX(14)}px;
    text-decoration: underline;
    color: ${Colors.gray};
`;

export default Category;
