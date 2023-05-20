import { Dimensions } from "react-native";
const { width, height } = Dimensions.get('window');

export const SIZES = {
    base: 10,
    width,
    height,
}
export const DotStyle = {
    width: 8,
    height: 8,
    backgroundColor: '#fff',
    borderRadius: 4,
    borderColor: colors.black,
    borderWidth: 1.5,
    marginHorizontal: 5,
}
const theme = { SIZES, DotStyle }

export default theme;