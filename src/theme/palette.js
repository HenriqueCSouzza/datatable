import { selectTheme } from "./themes";
const checkLocalStorage = () => {
  let check = localStorage.getItem("theme");
  if (check === null) {
    localStorage.setItem("theme", "lightTheme");
    return "lightTheme";
  } else {
    return check;
  }
};
const theme = checkLocalStorage();
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  ...selectTheme[theme],
};
