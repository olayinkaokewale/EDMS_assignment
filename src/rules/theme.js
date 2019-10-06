const Theme = {
    colors: {
        
        /* YELLOW COLORS */
        yellow900: "#F07300",
        yellow800: "#FF8F00",
        yellow700: "#FFAD0D",
        yellow600: "#FFBB38",
        yellow500: "#FFCA65",
        yellow400: "#FFDC99",
        yellow300: "#FFECC7",
        yellow200: "#FFF6E4",
        yellow100: "#FFFCF5",

        /* GREEN COLORS */
        green900: "#006242",
        green800: "#00865A",
        green700: "#0BB07B",
        green600: "#22C993",
        green500: "#3ED3A3",
        green400: "#6DDFBA",
        green300: "#92ECCF",
        green200: "#CFF8EB",
        green100: "#EAFCF7",

        /* RED COLORS */
        red900: "#A50000",
        red800: "#BD0303",
        red700: "#DD2727",
        red600: "#F03D3D",
        red500: "#FF5D5D",
        red400: "#FF8D8D",
        red300: "#FFC2C2",
        red200: "#FFEAEA",
        red100: "#FFF8F8",

        /* BLUE COLORS */
        blue900: "#0A44A5",
        blue800: "#0D55CF",
        blue700: "#0C66FF",
        blue600: "#007FFF",
        blue500: "#5AACFF",
        blue400: "#99CCFF",
        blue300: "#CCE6FF",
        blue200: "#EBF5FF",
        blue100: "#F5FAFF",

        /* GREY COLORS */
        grey900: "#8A94A6",
        grey800: "#98A1B1",
        grey700: "#A6AEBC",
        grey600: "#B5BBC6",
        grey500: "#C9CED6",
        grey400: "#E1E4E8",
        grey300: "#F1F2F4",
        grey200: "#F8F9FB",
        grey100: "#FCFCFD",

        /* BLACK COLORS */
        black900: "#0A1F44",
        black800: "#182C4F",
        black700: "#273A5B",
        black600: "#364866",
        black500: "#445571",
        black400: "#53627C",
        black300: "#5D6C84",
        black200: "#6C798F",
        black100: "#758196",

        white: "#FFFFFF",
        transparent: "#00000000"

    },
    rounded: {
        brandRadius: "20px"
    },
}

/* Definition of Text colors from theme */
const textColor = {
    blue: "blue800",
    green: "green800",
    red: "red700",
    darkOrange: "yellow900",
    dark: "black900",
    medium: "black400",
    light: "grey900",
    lighter: "grey700",
}

/* Definition of Background colors from theme */
const bgColor = {
    primary: "blue700",
    success: "green600",
    error: "red600",
    alert: "yellow700",

}

/* All grey backgrounds */
const grey = {
    lighter: "grey100",
    light: "grey200",
    medium: "gry300",
    dark: "grey400",
}

export default Theme;
export {
    textColor,
    bgColor,
    grey
}