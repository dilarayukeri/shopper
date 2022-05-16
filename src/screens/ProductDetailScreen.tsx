import React from "react";
import styled from "styled-components/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { MainStackParamList } from "../navigation/Router";
import { ProductDetail, ImageSlider } from "../components";
import Colors from "../config/colors";

type Props = NativeStackScreenProps<
    MainStackParamList,
    "ProductDetail",
    "MainStack"
>;

const ProductDetailScreen = ({ route }: Props) => {
    // Router
    const { product } = route.params;

    return (
        <Container>
            <ImageSlider imageList={product.item.images} />
            <ProductDetail detail={product.item} />
        </Container>
    );
};

const Container = styled.View`
    flex: 1;
    width: 100%;
    background-color: ${Colors.main};
`;

export default ProductDetailScreen;
