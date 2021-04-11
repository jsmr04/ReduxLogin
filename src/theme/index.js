import { Dimensions } from "react-native";
const screenWidth = Dimensions.get('window').width

export const FONT = {
    SIZE: '20px'
}

export const COLOR = {
    PRIMARY: '#ffbb00',
    BACKGROUND: '#353b46',
    PRIMARY_TEXT: '#d3d7de',
    BUTTON_TEXT: '#ffffff',
    BG_INPUT: '#3d4751',
    PLACEHOLDER: '#707880'
}

export const DIMENSIONS = {
    MAX_WIDTH: `${screenWidth - 65}px`,
}