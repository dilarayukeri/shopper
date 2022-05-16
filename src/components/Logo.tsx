import React from "react";
import styled from "styled-components/native";

import { scaleX } from "../helpers/pixelHelper";
import { images } from "../assets";

const Logo: React.FC = () => {
    return <Img source={images.shopper} resizeMode="cover" />;
};

const Img = styled.Image`
    width: ${scaleX(28)}px;
    height: ${scaleX(28)}px;
    margin-right: ${scaleX(5)}px;
`;

export default Logo;
