import { lighten } from "polished";
import palette from "../palette";

export default {
  root: {
    backgroundColor: palette.generalColor.medium,
  },
  light: {
    backgroundColor: lighten(0.01, palette.generalColor.medMain),
  },
};
