"use client";

import {
  Context,
  createContext,
  JSX,
  ReactElement,
  useEffect,
  useState,
} from "react";

export const ThemeContext: Context<ThemeContext> = createContext({
  isDarkTheme: true,
  toggleThemeHandler: () => {},
});

interface ThemePropsInterface {
  children?: JSX.Element | Array<JSX.Element>;
}

const ThemeContextProvider = (props: ThemePropsInterface): ReactElement => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  useEffect(() => initialThemeHandler());

  const isLocalStorageEmpty = (): boolean => {
    return !localStorage.getItem("isDarkTheme");
  };

  const initialThemeHandler = (): void => {
    if (isLocalStorageEmpty()) {
      localStorage.setItem("isDarkTheme", `true`);
      document!.querySelector("body")!.classList.add("dark");
      setIsDarkTheme(true);
    } else {
      const isDarkTheme: boolean = JSON.parse(
        localStorage.getItem("isDarkTheme")!
      );

      if (isDarkTheme) {
        document!.querySelector("body")!.classList.add("dark");
      }

      setIsDarkTheme(() => {
        return isDarkTheme;
      });
    }
  };

  const toggleThemeHandler = (): void => {
    const isDarkTheme: boolean = JSON.parse(
      localStorage.getItem("isDarkTheme")!
    );
    setIsDarkTheme(!isDarkTheme);
    toggleDarkClassToBody();
    setValueToLocalStorage();
  };

  const toggleDarkClassToBody = (): void => {
    document!.querySelector("body")!.classList.toggle("dark");
  };

  const setValueToLocalStorage = (): void => {
    localStorage.setItem("isDarkTheme", `${!isDarkTheme}`);
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme: true, toggleThemeHandler }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
