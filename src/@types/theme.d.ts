type ColorRange = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  [key: number]: string;
};

type PaletteColor = {
  lightest: string;
  light: string;
  main: string;
  dark: string;
  darkest: string;
  contrastText: string;
  [key: string]: string;
};

type ColorPreset = "blue" | "green" | "indigo" | "purple";

type ThemeOptions = {
  action: {
    active: string;
    disabled: string;
    disabledBackground: string;
    focus: string;
    hover: string;
    selected: string;
  };
  background: {
    default: string;
    paper: string;
  };
  divider: string;
  error: PaletteColor;
  info: PaletteColor;
  mode: string;
  neutral: ColorRange;
  primary?: PaletteColor;
  success: PaletteColor;
  text: {
    primary: string;
    secondary: string;
    disabled: string;
  };
  warning: PaletteColor;
};

type ThemeContext = {
  isDarkTheme: boolean;
  toggleThemeHandler: () => void;
};

type ThemeManager = {
  dark: ThemeOptions;
  light: ThemeOptions;
};
