const withAlphas = (color: PaletteColor): PaletteColor => {
    return {
        ...color,
        alpha5: `${color.main}0D`,
        alpha10: `${color.main}1A`,
        alpha15: `${color.main}26`,
        alpha30: `${color.main}4C`,
        alpha50: `${color.main}80`,
    }
}

export const neutral: ColorRange = {
  50: '#F8F9FA',
  100: '#F3F4F6',
  200: '#E5E7EB',
  300: '#D2D6DB',
  400: '#9DA4AE',
  500: '#6C737F',
  600: '#4D5761',
  700: '#2F3746',
  800: '#1C2536',
  900: '#111927'
};

export const blue: PaletteColor = withAlphas({
  lightest: '#F5F8FF',
  light: '#EBEFFF',
  main: '#2970FF',
  dark: '#004EEB',
  darkest: '#00359E',
  contrastText: '#FFFFFF'
});

export const green: PaletteColor = withAlphas({
  lightest: '#F6FEF9',
  light: '#EDFCF2',
  main: '#16B364',
  dark: '#087443',
  darkest: '#084C2E',
  contrastText: '#FFFFFF'
});

export const indigo: PaletteColor = withAlphas({
  lightest: '#F5F7FF',
  light: '#EBEEFE',
  main: '#6366F1',
  dark: '#4338CA',
  darkest: '#312E81',
  contrastText: '#FFFFFF'
});

export const purple: PaletteColor = withAlphas({
  lightest: '#F9F5FF',
  light: '#F4EBFF',
  main: '#9E77ED',
  dark: '#6941C6',
  darkest: '#42307D',
  contrastText: '#FFFFFF'
});

export const success: PaletteColor = withAlphas({
  lightest: '#F0FDF9',
  light: '#3FC79A',
  main: '#10B981',
  dark: '#0B815A',
  darkest: '#134E48',
  contrastText: '#FFFFFF'
});

export const info: PaletteColor = withAlphas({
  lightest: '#ECFDFF',
  light: '#CFF9FE',
  main: '#06AED4',
  dark: '#0E7090',
  darkest: '#164C63',
  contrastText: '#FFFFFF'
});

export const warning: PaletteColor = withAlphas({
  lightest: '#FFFAEB',
  light: '#FEF0C7',
  main: '#F79009',
  dark: '#B54708',
  darkest: '#7A2E0E',
  contrastText: '#FFFFFF'
});

export const error: PaletteColor = withAlphas({
  lightest: '#FEF3F2',
  light: '#FEE4E2',
  main: '#F04438',
  dark: '#B42318',
  darkest: '#7A271A',
  contrastText: '#FFFFFF'
});