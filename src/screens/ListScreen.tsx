import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/native";

import { FlatList, View, ActivityIndicator } from "react-native";
import { getProductList } from "../redux/actions/productActions";
import { ProductCard, ListFilter } from "../components";
import Colors from "../config/colors";

const ListScreen = () => {
    // State
    const [page, setPage] = useState(1);
    // Redux
    const dispatch = useDispatch();
    const { products, getProductsProcess } = useSelector(
        product => product.product,
    );

    const getNewImages = () => {
        dispatch(getProductList(page + 1));
        setPage(page + 1);
    };

    const FooterIndicator = () => {
        return getProductsProcess ? (
            <View
                style={{
                    paddingVertical: 20,
                }}>
                <ActivityIndicator animating size="large" />
            </View>
        ) : null;
    };

    return (
        <Container>
            <ListFilter />
            <FlatList
                data={products}
                renderItem={product => <ProductCard info={product} />}
                keyExtractor={(item, index) => `feed_${index}`}
                showsHorizontalScrollIndicator={false}
                ListFooterComponent={FooterIndicator}
                onEndReached={() => getNewImages()}
                numColumns={2}
                showsVerticalScrollIndicator={false}
            />
        </Container>
    );
};

const Container = styled.View`
    flex: 1;
    background-color: ${Colors.main};
    align-items: center;
`;

export default ListScreen;
