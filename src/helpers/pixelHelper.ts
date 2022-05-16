import { Dimensions, PixelRatio } from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const _scale = SCREEN_WIDTH / 375;
const _scaleY = SCREEN_HEIGHT / 812;
const _scaleX = SCREEN_WIDTH / 375;

const scale = (size: number) => {
    const newSize = size * _scale;
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

const scaleY = (size: number) => {
    const newSize = size * _scaleY;
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

const scaleX = (size: number) => {
    const newSize = size * _scaleX;
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

export default scale;
export { scaleX, scaleY };
