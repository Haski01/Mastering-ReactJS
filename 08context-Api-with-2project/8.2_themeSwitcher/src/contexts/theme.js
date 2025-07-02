import { createContext, useContext } from "react";

// we also pass by default or initial value in context means those use ThemeContext initial value are there
// We also pass some value at initial state

// step-1
export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

// step-2
export const ThemeContextProvider = ThemeContext.Provider;

// step-3
export default function useTheme() {
  return useContext(ThemeContext);
}
