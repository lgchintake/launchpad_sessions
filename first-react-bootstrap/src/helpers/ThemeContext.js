import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null);
const defaultTheme = "Light";

export const ThemeProvider = ({ children }) => {
  const themeColor = localStorage.getItem("theme");
  const [theme, setTheme] = useState(themeColor || defaultTheme);
  const setAppTheme = (themeType) => {
    setTheme(themeType);
    localStorage.setItem("theme", themeType);
  };

  return (
    <ThemeContext.Provider value={{ theme, setAppTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
