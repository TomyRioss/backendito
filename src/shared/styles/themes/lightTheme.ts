import { error, indigo, info, neutral, success, warning } from "../shared";

export const createLightPalette: ThemeOptions = {
  action: {
    active: neutral[500],
    disabled: `${neutral[900]}4C`,
    disabledBackground: `${neutral[900]}1A`,
    focus: `${neutral[900]}26`,
    hover: `${neutral[900]}0D`,
    selected: `${neutral[900]}1A`,
  },
  background: {
    default: neutral[50],
    paper: "#FFFFFF",
  },
  divider: "#F2F4F7",
  error,
  info,
  mode: "light",
  neutral,
  primary: indigo,
  success,
  text: {
    primary: neutral[900],
    secondary: neutral[500],
    disabled: `${neutral[900]}4C`,
  },
  warning,
};
