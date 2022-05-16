import React, { useContext } from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

import { LocalizationContext } from "../providers/LocalizationProvider";
import { ProductType } from "../redux/stateTypes";
import { scaleX } from "../helpers/pixelHelper";
import Colors from "../config/colors";

interface Props {
    info: ProductType;
}

const ProductCard: React.FC<Props> = ({ info }) => {
    // Context
    const { appLanguage } = useContext(LocalizationContext);
    // Navigation
    const navigation = useNavigation();

    const shadow = {
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowColor: "black",
        shadowOffset: { height: 0, width: 0 },
    };

    return (
        <Container
            onPress={() =>
                navigation.navigate("ProductDetail", { product: info })
            }
            style={shadow}>
            <Img source={{ uri: info?.item?.images[0] }} resizeMode="cover" />
            <Infocontainer>
                <ProductName>
                    {info.item[`description_${appLanguage}`]}
                </ProductName>
                <Price>{info.item.price}$</Price>
            </Infocontainer>
        </Container>
    );
};

const Container = styled.TouchableOpacity`
    width: ${scaleX(150)}px;
    height: ${scaleX(190)}px;
    border-radius: ${scaleX(8)}px;
    background-color: ${Colors.white};
    margin: ${scaleX(6)}px;
`;
const Img = styled.Image`
    width: ${scaleX(150)}px;
    height: ${scaleX(120)}px;
    border-top-left-radius: ${scaleX(8)}px;
    border-top-right-radius: ${scaleX(8)}px;
`;
const ProductName = styled.Text`
    font-size: ${scaleX(14)}px;
    font-weight: 600;
`;
const Infocontainer = styled.View`
    width: 100%;
    height: 100%;
    padding: ${scaleX(6)}px;
`;
const Price = styled.Text`
    font-size: ${scaleX(12)}px;
    font-weight: 400;
    margin-top: ${scaleX(6)}px;
    text-align: right;
`;

export default ProductCard;
