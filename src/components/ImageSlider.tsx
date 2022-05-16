import React, { useState } from "react";
import styled from "styled-components/native";
import Carousel, { Pagination } from "react-native-snap-carousel";

import { scaleX } from "../helpers/pixelHelper";

const ImageSlider = ({ imageList }: { imageList: string[] }) => {
    // State
    const [activeSlide, setsActiveSlide] = useState(0);

    const renderItem = (item: string) => {
        return <Img source={{ uri: item.item }} resizeMode="cover" />;
    };

    return (
        <Slider>
            <Carousel
                layout={"default"}
                data={imageList}
                renderItem={(img: string) => renderItem(img)}
                sliderWidth={scaleX(390)}
                sliderHeight={scaleX(390)}
                itemWidth={scaleX(390)}
                itemHeight={scaleX(390)}
                onSnapToItem={index => setsActiveSlide(index)}
                style={{ marginBottom: -30 }}
            />

            <Pagination
                dotsLength={imageList.length}
                activeDotIndex={activeSlide}
                containerStyle={{
                    backgroundColor: "transparent",
                }}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 4,
                    backgroundColor: "rgba(0, 0, 0, 0.75)",
                }}
                inactiveDotStyle={
                    {
                        // Define styles for inactive dots here
                    }
                }
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        </Slider>
    );
};

const Slider = styled.View`
    width: 100%;
    height: ${scaleX(340)}px;
`;
const Img = styled.Image`
    width: 100%;
    height: ${scaleX(260)}px;
`;

export default ImageSlider;
