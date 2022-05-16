import React, { useContext } from "react";
import styled from "styled-components/native";

import { LocalizationContext } from "../providers/LocalizationProvider";
import { ProductType } from "../redux/stateTypes";
import { scaleX } from "../helpers/pixelHelper";

interface Props {
    detail: ProductType;
}

const ProductDetail: React.FC<Props> = ({ detail }) => {
    const { translate, appLanguage } = useContext(LocalizationContext);

    return (
        <Container>
            <Row>
                <Header numberOfLines={3}>
                    {detail[`description_${appLanguage}`]}
                </Header>
                <Price>{detail.price}$</Price>
            </Row>
            <Column>
                <Description numberOfLines={3}>
                    {detail[`title_${appLanguage}`]}
                </Description>
                <Detail>
                    <Description style={{ fontWeight: "800" }}>
                        {translate("color")}
                    </Description>
                    <Description>{detail[`color_${appLanguage}`]}</Description>
                </Detail>
                <Detail>
                    <Description style={{ fontWeight: "800" }}>
                        {translate("material")}
                    </Description>
                    <Description>
                        {detail[`material_${appLanguage}`]}
                    </Description>
                </Detail>
            </Column>
        </Container>
    );
};

const Container = styled.View`
    width: 100%;
    margin-bottom: ${scaleX(28)}px;
    padding-horizontal: ${scaleX(16)}px;
`;
const Header = styled.Text`
    width: 73%;
    font-weight: 600;
    font-size: ${scaleX(20)}px;
`;
const Row = styled.View`
    flex-direction: row;
    width: 100%;
    padding-vertical: ${scaleX(10)}px;
    align-items: center;
    justify-content: space-between;
`;
const Column = styled.View`
    width: 100%;
    padding-vertical: ${scaleX(10)}px;
`;
const Detail = styled.View`
    width: 100%;
    flex-direction: row;
    padding-top: ${scaleX(16)}px;
`;
const Price = styled.Text`
    font-weight: 800;
    font-size: ${scaleX(16)}px;
`;
const Description = styled.Text`
    font-weight: 400;
    font-size: ${scaleX(15)}px;
`;

export default ProductDetail;
