import { error, indigo, info, neutral, success, warning } from "../shared";

export const createDarkPalette: ThemeOptions = {
  action: {
    active: neutral[500],
    disabled: `${neutral[100]}4C`,
    disabledBackground: `${neutral[100]}1A`,
    focus: `${neutral[100]}26`,
    hover: `${neutral[100]}0D`,
    selected: `${neutral[100]}1A`,
  },
  background: {
    default: "#0B0F19",
    paper: neutral[900],
  },
  divider: "#2D3748",
  error,
  info,
  mode: "dark",
  neutral,
  primary: indigo,
  success,
  text: {
    primary: "#EDF2F7",
    secondary: "#A0AEC0",
    disabled: "rgba(255, 255, 255, 0.48)",
  },
  warning,
};
