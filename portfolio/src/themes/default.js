const fonts = {
    family: "Poppins",
    weight: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
    },
};

const colors = {
    primary: "#854CE6",
    secondary: "#13ADC7",
    tertiary: "#E94560",
    background: "#0A192F",
    backgroundSecondary: "#112240",
    text: "#8892B0",
    textSecondary: "#CCD6F6",
    textLight: "#8892B0",
    white: "#E6F1FF",
    shadow: "#000000",
};

const size = {
    xs: "320px",
    sm: "768px",
    md: "1024px",
    lg: "1280px",
    xl: "1440px",
};

const breakpoints = {
    xs: `(min-width: ${size.xs})`,
    sm: `(min-width: ${size.sm})`,
    md: `(min-width: ${size.md})`,
    lg: `(min-width: ${size.lg})`,
    xl: `(min-width: ${size.xl})`,
};

const _default = {
    colors,
    fonts,
    breakpoints,
};

export default _default;