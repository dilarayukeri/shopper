import React from "react";
import styled from "styled-components/native";

import { scaleX } from "../helpers/pixelHelper";

const LogoText: React.FC = () => {
    return <Logo>SHOPPER</Logo>;
};

const Logo = styled.Text`
    font-size: ${scaleX(18)}px;
    font-weight: 600;
`;

export default LogoText;
