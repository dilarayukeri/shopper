import React, { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/native";

import { LocalizationContext } from "../providers/LocalizationProvider";
import { Header, Category } from "../components";
import { scaleX } from "../helpers/pixelHelper";
import { ScrollView } from "react-native";
import {
    getProductList,
    getBooks,
    getOutdoors,
    getElectronics,
    getGarden,
} from "../redux/actions/productActions";
import Colors from "../config/colors";

const HomeScreen = () => {
    // Context
    const { translate } = useContext(LocalizationContext);
    // Redux
    const dispatch = useDispatch();
    const { books, electronics, outdoors, garden } = useSelector(
        product => product.product,
    );

    useEffect(() => {
        dispatch(getProductList(1));
        dispatch(getBooks());
        dispatch(getOutdoors());
        dispatch(getElectronics());
        dispatch(getGarden());
    }, []);

    return (
        <Container>
            <Header />
            <ScrollView showsVerticalScrollIndicator={false}>
                {books && <Category name={translate("books")} list={books} />}
                {electronics && (
                    <Category
                        name={translate("electronics")}
                        list={electronics}
                    />
                )}
                {outdoors && (
                    <Category name={translate("outdoor")} list={outdoors} />
                )}
                {garden && (
                    <Category name={translate("garden")} list={garden} />
                )}
            </ScrollView>
        </Container>
    );
};

const Container = styled.View`
    flex: 1;
    background-color: ${Colors.main};
    padding-top: ${scaleX(30)}px;
`;

export default HomeScreen;
