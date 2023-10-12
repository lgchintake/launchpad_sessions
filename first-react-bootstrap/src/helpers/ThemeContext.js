import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);
const defaultTheme = "light";

export const ThemeProvider = ({ children }) => {
  const themeColor = localStorage.getItem("theme");
  const [theme, setTheme] = useState(themeColor || defaultTheme);
  const setAppTheme = (themeType) => {
    setTheme(themeType);
    localStorage.setItem("theme", themeType);
  };

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.remove("light");
    }
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setAppTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
