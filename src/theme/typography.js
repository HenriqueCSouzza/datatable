import palette from "./palette";

export default {
  htmlFontSize: 16,
  fontFamily: "Roboto, sans-serif",
  color: palette.generalColor.text,
  h1: {
    fontSize: "34px",
    fontWeight: "bold",
    letterSpacing: "72%",
    color: palette.black,
  },
  h2: {
    fontSize: "24px",
    fontWeight: 500,
    letterSpacing: "100%",
  },
  h3: {
    fontSize: "20px",
    fontWeight: 500,
    letterSpacing: "129%",
  },
  subtitle1: {
    fontSize: "16px",
    letterSpacing: "96%",

    color: palette.generalColor.medium,
    fontWeight: 500,
  },
  subtitle2: {
    fontSize: "14px",
    letterSpacing: "67%",
    fontWeight: 600,
  },
  body1: {
    fontSize: "14px",
    fontWeight: 500,
    color: palette.appBarColor.lightColor,
  },
  body2: {
    fontSize: "12px",
    fontWeight: 400,
    color: palette.generalColor.text,
  },
  body3: {
    color: palette.generalColor.main,
    fontSize: "14px",
    fontWeight: 900,
  },
  caption: {
    color: palette.generalColor.text,
    fontWeight: 700,
    fontSize: "12px",
  },
  button: {
    fontSize: "14px",
    fontWeight: 600,
    textTransform: "uppercase",
    // letterSpacing: "0.2em",
  },
  overline: {
    fontSize: "12px",
    textTransform: "none",
    fontWeight: 500,
    color: palette.generalColor.medium,
  },
};
