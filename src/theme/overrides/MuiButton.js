import palette from "../palette";
import { modularScale, darken, lighten } from "polished";
export default {
  root: {
    textTransform: "normal",
    boxShadow: "none",
    borderRadius: 20,
    "&:focus": {
      outline: "none",
    },
  },

  sizeSmall: {
    fontSize: modularScale(-1.1, "1.08rem"),
  },
  text: {
    minWidth: "auto",
    padding: "0 !important",
    background: "none !important",
  },
  textPrimary: {
    fontSize: "12px",
    fontWeight: 400,
    "&:hover": {
      color: darken(0.2, palette.primary.main),
    },
  },
  textSecondary: {
    "&:hover": {
      color: darken(0.2, "#333DAF"),
    },
  },
  containedPrimary: {
    backgroundColor: palette.primary[300],
    color: palette.white,
    "&:hover": {
      boxShadow: "none",
      backgroundColor: darken(0.1, palette.primary[300]),
    },
  },
  contained: {
    backgroundColor: palette.white,
    boxShadow: "none",
    "&:focus": {
      outline: "none",
    },
    "&:hover": {
      boxShadow: "none",
      backgroundColor: darken(0.1, palette.white),
    },
  },
  outlined: {
    color: palette.generalColor.main,
    border: `1px solid ${palette.generalColor.medMain}`,
  },
  outlinedPrimary: {
    "&:focus": {
      outline: "none",
    },
    color: palette.primary[300],
    border: `1px solid ${palette.primary[300]}`,
    "&:hover": {
      boxShadow: "none",
      backgroundColor: lighten(0.03, palette.primary[50]),
    },
  },
  colorInherit: {
    "&:focus": {
      outline: "none",
    },
    color: palette.white,
    backgroundColor: palette.generalColor.medMain,
    "&:hover": {
      boxShadow: "none",
      backgroundColor: darken(0.2, palette.generalColor.medMain),
    },
  },
};
