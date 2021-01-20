import palette from "../palette";
export default {
  root: {
    textDecoration: "none",
    "&:focus": {
      outline: "none",
    },
    color: palette.primary.lightColor,
    "&:hover": {
      textDecoration: "none",
      color: palette.primary.dark,
    },
  },
  button: {
    "&:hover": {
      textDecoration: "none",
      color: palette.primary.dark,
    },
  },
};
