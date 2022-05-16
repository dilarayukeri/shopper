import React from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";

import { ProductType } from "../redux/stateTypes";
import ProductCard from "./ProductCard";

interface Props {
    list: ProductType[];
}

const CategoryProducts: React.FC<Props> = ({ list }) => {
    return (
        <Container>
            <FlatList
                horizontal={true}
                data={list}
                renderItem={product => <ProductCard info={product} />}
                keyExtractor={(item, index) => `feed_${index}`}
                showsHorizontalScrollIndicator={false}
            />
        </Container>
    );
};

const Container = styled.View`
    width: 100%;
`;

export default CategoryProducts;
